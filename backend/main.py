from fastapi import FastAPI, Depends, HTTPException, UploadFile, File, Form
from sqlalchemy.orm import Session
from typing import Optional
from fastapi.responses import FileResponse
import shutil
import uuid
import os
# added for realtime transcription
import json
# import asyncio
# import websockets
# from fastapi import WebSocket, WebSocketDisconnect
# from openai import AsyncOpenAI
# import tempfile
# import base64
# from openai import OpenAI
from dotenv import load_dotenv


from database import engine, Base, get_db, User, Note
from ai_services import extract_youtube_audio, transcribe_audio, perform_ocr_with_gemini, generate_final_notes, create_pdf
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(title="Classroom Notes Generator API")
# options added
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
 

@app.get("/")
def root():
    return {"message": "API is running"}


@app.post("/signup") #signup vs register issue()change done in register component
def signup(username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username).first()
    if user:
        raise HTTPException(status_code=400, detail="Username registered")
    # Note: Use Passlib to hash this password in a real app!
    new_user = User(username=username, hashed_password=password)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"message": "User created successfully", "user_id": new_user.id}

@app.post("/login")
def login(username: str = Form(...), password: str = Form(...), db: Session = Depends(get_db)):
    user = db.query(User).filter(User.username == username, User.hashed_password == password).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid credentials")
    return {"message": "Login successful", "user_id": user.id}

# --- CORE FUNCTIONALITY ---

@app.post("/generate-notes")
async def generate_notes(
    user_id: int = Form(...),
    title: str = Form(...),
    youtube_url: Optional[str] = Form(None),
    audio_file: Optional[UploadFile] = File(None),
    image_file: Optional[UploadFile] = File(None),
    db: Session = Depends(get_db)
):
    audio_text = ""
    ocr_text = ""
    
    # 1. Handle Audio / YouTube
    if youtube_url:
        temp_audio = extract_youtube_audio(youtube_url)
        audio_text = transcribe_audio(temp_audio)
        os.remove(temp_audio) # Clean up
    elif audio_file:
        audio_path = f"temp_{audio_file.filename}"
        with open(audio_path, "wb") as buffer:
            buffer.write(await audio_file.read())
        audio_text = transcribe_audio(audio_path)
        os.remove(audio_path) # Clean up
        
    # 2. Handle Image OCR via Gemini
    if image_file:
        image_path = f"temp_{image_file.filename}"
        with open(image_path, "wb") as buffer:
            buffer.write(await image_file.read())
        ocr_text = perform_ocr_with_gemini(image_path)
        os.remove(image_path) # Clean up

    if not audio_text and not ocr_text:
        raise HTTPException(status_code=400, detail="Must provide an audio source, YouTube URL, or Image.")

    # 3. Generate Final Notes
    final_notes = generate_final_notes(audio_text, ocr_text)

    # 4. Create PDF
    pdf_path = create_pdf(final_notes, title)

    # 5. Save to Database
    new_note = Note(user_id=user_id, title=title, file_path=pdf_path)
    db.add(new_note)
    db.commit()

    return {"message": "Notes generated successfully", "note_id": new_note.id}

@app.get("/notes/{user_id}")
def get_user_notes(user_id: int, db: Session = Depends(get_db)):
    notes = db.query(Note).filter(Note.user_id == user_id).all()
    return notes

@app.get("/download/{note_id}")
def download_note(note_id: int, db: Session = Depends(get_db)):
    note = db.query(Note).filter(Note.id == note_id).first()
    if not note or not os.path.exists(note.file_path):
        raise HTTPException(status_code=404, detail="File not found")
    return FileResponse(path=note.file_path, filename=f"{note.title}.pdf", media_type='application/pdf')

# added for trancription request
# @app.get("/api/realtime-token")
# def generate_realtime_token():
#     try:
#         token = get_temp_token()
#         return {"token": token}
#     except Exception as e:
#         raise HTTPException(status_code=500, detail=str(e))


# load_dotenv()
# client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
# OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# @app.post("/realtime-transcribe")
# async def realtime_transcribe(audio: UploadFile = File(...)):
#     try:
#         with tempfile.NamedTemporaryFile(delete=False, suffix=".wav") as temp_audio:
#             temp_audio.write(await audio.read())
#             temp_path = temp_audio.name

#         with open(temp_path, "rb") as f:
#             transcript = client.audio.transcriptions.create(
#                 model="whisper-1",
#                 file=f,
#                 language="ur",
#                 prompt="This audio contains English and Urdu mixed technical lecture content."
#             )

#         os.remove(temp_path)
#         return {"text": transcript.text}

#     except Exception as e:
#         print("Transcription error:", str(e))
#         return {"text": "", "error": str(e)}
from dotenv import load_dotenv 

# Load environment variables from the .env file
load_dotenv()

import httpx 

AZURE_SPEECH_KEY = os.getenv("AZURE_SPEECH_KEY")
AZURE_SPEECH_REGION = os.getenv("AZURE_SPEECH_REGION")

@app.get("/api/azure-token")
async def get_azure_token():
    if not AZURE_SPEECH_KEY or not AZURE_SPEECH_REGION:
        raise HTTPException(status_code=500, detail="Azure credentials are missing on the server.")
        
    # Azure Token Issue URL
    token_url = f"https://{AZURE_SPEECH_REGION}.api.cognitive.microsoft.com/sts/v1.0/issueToken"
    headers = {
        "Ocp-Apim-Subscription-Key": AZURE_SPEECH_KEY,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    
    async with httpx.AsyncClient() as client:
        try:
            response = await client.post(token_url, headers=headers)
            if response.status_code == 200:
                # The response body contains the plain-text JWT token string
                return {"token": response.text, "region": AZURE_SPEECH_REGION}
            else:
                raise HTTPException(status_code=response.status_code, detail="Failed to fetch token from Azure.")
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Azure Token Error: {str(e)}")


import google.generativeai as genai
from fastapi import APIRouter

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(
    api_key=GEMINI_API_KEY
)


@app.post("/realtime-notes")
async def generate_realtime_notes(data: dict):
    transcript = data.get("text")
    
    if not transcript or len(transcript.strip()) < 5:
        raise HTTPException(status_code=400, detail="Transcript is too short to generate notes.")

    try:
        # Initialize Gemini
        model = genai.GenerativeModel("models/gemini-2.5-flash")

        # Structured Prompt for Real-time Classroom context
        prompt = f"""
        CONTEXT: This is a transcript from a live university lecture.
        LANGUAGE: The speaker uses a mix of Urdu and English (code-switching).
        
        TRANSCRIPT:
        {transcript}
        
        TASK:
        1.Provide notes using transcription in simple words with examples.
        2.correct any errors in transcription by relating it to topic and translate urdu into english.
        2. provide definitions, examples and structured notes etc in english.
        3. Format the entire output in clean Markdown.
        """

        response = model.generate_content(prompt)
        
        return {
            "status": "success",
            "notes": response.text
        }
        
    except Exception as e:
        print(f"Gemini Error: {e}")
        raise HTTPException(status_code=500, detail="Failed to process notes with AI.")





