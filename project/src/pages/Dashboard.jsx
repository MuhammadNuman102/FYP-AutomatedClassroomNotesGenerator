import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  FaMicrophone, 
  FaYoutube, 
  FaPodcast, 
  FaImage, 
  FaPlusCircle,
  FaCheckCircle,
  FaMagic,
  FaFolderOpen
} from "react-icons/fa";

const Dashboard = () => {
  const navigate = useNavigate(); 

  const [selectedAudio, setSelectedAudio] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [youtubeURL, setYoutubeURL] = useState("");
  const [noteTitle, setNoteTitle] = useState(""); 
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateNotes = async () => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      alert("Please login or register first!");
      return;
    }

    if (!noteTitle) {
      alert("Please enter a title for your notes!");
      return;
    }
    if (!selectedAudio && !selectedImage && !youtubeURL) {
      alert("Please upload at least one file or provide a YouTube link.");
      return;
    }

    const formData = new FormData();
    formData.append("title", noteTitle);
    formData.append("user_id", userId);
    
    if (youtubeURL) formData.append("youtube_url", youtubeURL);
    if (selectedAudio) formData.append("audio_file", selectedAudio);
    if (selectedImage) formData.append("image_file", selectedImage);

    try {
      setIsGenerating(true); 
      
      const response = await fetch("http://localhost:8000/generate-notes", {
        method: "POST",
        body: formData,
      });
      
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Error generating notes");
      }
      setIsGenerating(false);

      if (response.ok) {
        window.open(`http://localhost:8000/download/${data.note_id}`, "_blank");
      } else {
        alert("Error: " + data.detail);
      }
      
    } catch (error) {
      console.error("Generation failed:", error);
      setIsGenerating(false);
      alert("Failed to connect to the server.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-200 text-slate-900 pt-28 pb-20 px-6 relative overflow-hidden">
      
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-50/50 rounded-full blur-[120px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 relative">
          <button 
            onClick={() => navigate("/Notes")}
            className="absolute top-0 right-0 flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-300/80 text-slate-700 hover:text-indigo-600 px-5 py-2.5 rounded-2xl font-bold shadow-md shadow-slate-200/50 transition-all duration-300 md:translate-y-0 -translate-y-12"
          >
            <FaFolderOpen className="text-lg opacity-80" />
            <span>Saved Notes</span>
          </button>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span className="text-indigo-600 text-[10px] font-black uppercase tracking-widest">AI Workspace</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-slate-950">
            Smart <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Generator</span>
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Transform your learning sources into structured intelligence. Select a medium below to begin.
          </p>
        </div>

        {/* Input Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Audio Card */}
          <div className="group bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-indigo-200 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-inner">
              <FaMicrophone size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Lecture Audio</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">Upload MP3/WAV files for high-precision transcription.</p>
            
            <label className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-[2rem] cursor-pointer hover:bg-slate-50 hover:border-indigo-400 transition-all group/label">
              {selectedAudio ? (
                 <span className="flex items-center gap-2 text-emerald-600 font-bold"><FaCheckCircle /> {selectedAudio.name.substring(0,18)}...</span>
              ) : (
                 <span className="flex items-center gap-2 text-slate-400 font-bold group-hover/label:text-indigo-600"><FaPlusCircle /> Add Audio File</span>
              )}
              <input type="file" className="hidden" accept=".mp3,.wav" onChange={(e)=>setSelectedAudio(e.target.files[0])} />
            </label>
          </div>

          {/* YouTube Card */}
          <div className="group bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-rose-200 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-rose-50 text-rose-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-inner">
              <FaYoutube size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">YouTube URL</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">Summarize full lectures directly from any YouTube link.</p>
            
            <div className="w-full relative">
              <input
                type="text"
                placeholder="https://youtube.com/..."
                className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 focus:outline-none focus:ring-4 focus:ring-rose-500/10 focus:border-rose-300 transition-all font-medium text-center shadow-inner"
                value={youtubeURL}
                onChange={(e)=>setYoutubeURL(e.target.value)}
              />
            </div>
          </div>

          {/* Live Transcription Card */}
          <div 
            // onClick={() => navigate("/live-transcription")}
            onClick={() => {
    window.scrollTo(0, 0); // Force scroll to top
    navigate("/live-transcription");
  }}
            className="group bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-emerald-200 transition-all duration-500 flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-inner">
              <FaPodcast size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Live Transcription</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">Record live lectures and stream audio in real-time to generate notes instantly.</p>
            
            <div className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-[2rem] group-hover:bg-slate-50 group-hover:border-emerald-400 transition-all">
              <span className="flex items-center gap-2 text-slate-400 font-bold group-hover:text-emerald-600">
                <FaPlusCircle /> Start Live Session
              </span>
            </div>
          </div>

          {/* Whiteboard Card */}
          <div className="group bg-white border border-slate-200/60 p-10 rounded-[2.5rem] shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:border-cyan-200 transition-all duration-500 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-cyan-50 text-cyan-600 rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-6 transition-transform shadow-inner">
              <FaImage size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">Visual Insights</h3>
            <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">Extract text and diagrams from whiteboard photos.</p>
            
            <label className="w-full flex flex-col items-center justify-center p-8 border-2 border-dashed border-slate-200 rounded-[2rem] cursor-pointer hover:bg-slate-50 hover:border-cyan-400 transition-all group/label">
              {selectedImage ? (
                 <span className="flex items-center gap-2 text-emerald-600 font-bold"><FaCheckCircle /> {selectedImage.name.substring(0,18)}...</span>
              ) : (
                 <span className="flex items-center gap-2 text-slate-400 font-bold group-hover/label:text-cyan-600"><FaPlusCircle /> Add Image File</span>
              )}
              <input type="file" className="hidden" accept="image/*" onChange={(e)=>setSelectedImage(e.target.files[0])} />
            </label>
          </div>

        </div>

         {/* Title Input */}
        <div className="mt-12 text-center">
          <input
            type="text"
            placeholder="Enter a title for your notes..."
            value={noteTitle}
            onChange={(e) => setNoteTitle(e.target.value)}
            className="w-full max-w-md mx-auto block mb-6 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Action Button Section */}
        <div className="mt-24 text-center relative flex flex-col items-center justify-center">
          
          {/* Moving Circle Spinner (Shows above button when generating) */}
          {isGenerating && (
            <div className="mb-6 flex flex-col items-center gap-2 animate-bounce">
              <div className="w-12 h-12 border-4 border-indigo-600/20 border-t-indigo-600 rounded-full animate-spin"></div>
              <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">AI is working...</span>
            </div>
          )}

          <button
            onClick={handleGenerateNotes}
            className="group relative inline-flex items-center justify-center"
            disabled={isGenerating}
          >
            {/* Soft Shadow Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-3xl blur-xl opacity-20 group-hover:opacity-60 transition duration-1000"></div>
            
            <div className={`relative bg-slate-950 text-white px-14 py-6 rounded-[2rem] font-black text-xl flex items-center gap-4 transition-all duration-300 shadow-2xl ${isGenerating ? 'opacity-80 cursor-not-allowed' : 'hover:bg-indigo-600 hover:-translate-y-1'}`}>
              <FaMagic className={`${isGenerating ? 'animate-pulse text-indigo-400' : 'text-indigo-300 group-hover:text-white'}`} />
              {isGenerating ? "Crafting Your Notes..." : "Generate Notes"}
            </div>
          </button>
          <p className="text-slate-400 mt-8 text-sm font-medium">Processing takes roughly 45 seconds per source.</p>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;