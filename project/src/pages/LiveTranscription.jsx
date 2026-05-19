import React, { useState, useRef } from 'react';
import * as speechsdk from 'microsoft-cognitiveservices-speech-sdk';

const LiveTranscription = () => {
    const [finalText, setFinalText] = useState("");
    const [recognizingText, setRecognizingText] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [status, setStatus] = useState("Ready");
    const [aiNotes, setAiNotes] = useState(""); 
    
    const recognizerRef = useRef(null);

    const startRecording = async () => {
        try {
            setStatus("Connecting...");
            setAiNotes(""); // Clears old notes when clicking Start
            
            // 1. Fetch the short-lived authorization token from your FastAPI backend
            const tokenResponse = await fetch('http://localhost:8000/api/azure-token');
            if (!tokenResponse.ok) {
                throw new Error("Could not fetch speech token from backend server.");
            }
            
            const tokenData = await tokenResponse.json();
            const { token, region } = tokenData;

            // 2. Initialize the Speech Configuration using the temporary Token
            const speechConfig = speechsdk.SpeechConfig.fromAuthorizationToken(token, region);
            
            // Note: If you prefer using the exact WebSocket v2 endpoint structure you had before:
            // const endpoint = `wss://${region}.stt.speech.microsoft.com/speech/universal/v2`;
            // const speechConfig = speechsdk.SpeechConfig.fromEndpoint(new URL(endpoint), token);
            // speechConfig.setProperty(speechsdk.PropertyId.SpeechServiceConnection_AuthToken, token);

            // 3. Enable Continuous Language Identification (for multi-lingual lecture tracking)
            speechConfig.setProperty(
                speechsdk.PropertyId.SpeechServiceConnection_LanguageIdMode, 
                "Continuous"
            );

            // 4. Define the target languages to dynamically detect
            const autoDetectSourceLanguageConfig = speechsdk.AutoDetectSourceLanguageConfig.fromLanguages(
                ["ur-IN", "en-US"]
            );

            const audioConfig = speechsdk.AudioConfig.fromDefaultMicrophoneInput();

            // 5. Create the Recognizer engine
            const recognizer = speechsdk.SpeechRecognizer.FromConfig(
                speechConfig, 
                autoDetectSourceLanguageConfig, 
                audioConfig
            );
            
            recognizerRef.current = recognizer;

            // --- Event Listeners ---
            recognizer.recognizing = (s, e) => {
                if (e.result.reason === speechsdk.ResultReason.RecognizingSpeech) {
                    setRecognizingText(e.result.text);
                }
            };

            recognizer.recognized = (s, e) => {
                if (e.result.reason === speechsdk.ResultReason.RecognizedSpeech) {
                    // Append newly completed phrase to the transcript bank
                    setFinalText(prev => prev + " " + e.result.text);
                    setRecognizingText(""); 
                }
            };

            recognizer.canceled = (s, e) => {
                console.error(`CANCELED: ${e.errorDetails}`);
                setStatus("Connection Closed");
                stopRecording();
            };

            // 6. Begin Continuous Listening
            recognizer.startContinuousRecognitionAsync(
                () => {
                    setIsRecording(true);
                    setStatus("Live: Urdu + English");
                },
                (err) => {
                    console.error(err);
                    setStatus("Mic Error");
                }
            );

        } catch (err) {
            console.error(err);
            setStatus("Setup Failed");
        }
    };

    const stopRecording = () => {
        if (recognizerRef.current) {
            recognizerRef.current.stopContinuousRecognitionAsync(
                () => {
                    recognizerRef.current.close();
                    recognizerRef.current = null;
                    setIsRecording(false);
                    setRecognizingText("");
                    setStatus("Ready");
                }
            );
        }
    };

    // Submits completed transcription to Gemini backend engine
    const generateNotes = async () => {
        if (!finalText) return alert("No transcript to process!");
        
        setStatus("Gemini is writing notes...");
        try {
            const response = await fetch('http://localhost:8000/realtime-notes', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text: finalText })
            });
            const data = await response.json();
            
            if (data.notes) {
                setAiNotes(data.notes); 
                setStatus("Notes Generated!");
            } else {
                setStatus("AI Note Error");
            }
            
            console.log(data.notes);
        } catch (err) {
            console.error(err);
            setStatus("Note Generation Failed");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-8 bg-white shadow-2xl rounded-3xl mt-12 border border-gray-100">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">Lecture Intelligence</h2>
                    <p className="text-gray-500 mt-1">Real-time Urdu/English Transcription</p>
                </div>
                <div className="flex flex-col items-end">
                    <span className={`px-4 py-1 rounded-full text-sm font-semibold shadow-sm transition-all ${
                        isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-green-100 text-green-600'
                    }`}>
                        ● {status}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
                <button
                    onClick={isRecording ? stopRecording : startRecording}
                    className={`py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-lg ${
                        isRecording 
                        ? 'bg-red-500 hover:bg-red-600 shadow-red-200' 
                        : 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200'
                    }`}
                >
                    {isRecording ? '⏹ Stop Recording' : '🎤 Start Live Session'}
                </button>

                <button
                    onClick={generateNotes}
                    disabled={isRecording || !finalText}
                    className={`py-4 rounded-2xl font-bold text-white transition-all transform active:scale-95 shadow-lg ${
                        !finalText || isRecording
                        ? 'bg-gray-300 cursor-not-allowed' 
                        : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200'
                    }`}
                >
                    ✨ Generate AI Notes
                </button>
            </div>

            <div 
                className="p-8 bg-gray-50 border border-gray-200 rounded-3xl min-h-[400px] text-xl leading-relaxed text-gray-800 shadow-inner overflow-y-auto"
                dir="auto"
                style={{ textAlign: (finalText + recognizingText).match(/[\u0600-\u06FF]/) ? 'right' : 'left' }}
            >
                {finalText || recognizingText ? (
                    <div>
                        <span className="text-gray-900">{finalText}</span>
                        <span className="text-indigo-400 italic font-medium ml-2">
                            {recognizingText}
                        </span>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 py-20">
                        <p className="italic">Waiting for audio input...</p>
                        <p className="text-sm mt-2">Azure will auto-detect Urdu and English.</p>
                    </div>
                )}
            </div>

            {aiNotes && (
                <div className="mt-8 p-8 bg-gradient-to-br from-gray-50 to-emerald-50/30 border border-emerald-100 rounded-3xl shadow-xl">
                    <div className="flex items-center gap-2 mb-4 border-b border-emerald-100 pb-3">
                        <span className="text-2xl">✨</span>
                        <h3 className="text-xl font-bold text-emerald-900">AI Structured Notes</h3>
                    </div>
                    <div className="text-gray-700 text-lg leading-relaxed whitespace-pre-wrap font-normal">
                        {aiNotes}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LiveTranscription;