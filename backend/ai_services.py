import os
import uuid
import assemblyai as aai
import google.generativeai as genai
import yt_dlp
from fpdf import FPDF
from dotenv import load_dotenv  # Add this import

# Load environment variables from the .env file
load_dotenv()

# Retrieve the keys from the environment
ASSEMBLYAI_API_KEY = os.getenv("ASSEMBLYAI_API_KEY")
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")
# Optional but recommended: Check if keys are loaded properly
if not ASSEMBLYAI_API_KEY or not GEMINI_API_KEY:
    raise ValueError("Missing API keys! Please check your .env file.")

# -----------------------------
# CONFIGURATION
# -----------------------------

aai.settings.api_key = ASSEMBLYAI_API_KEY

genai.configure(
    api_key=GEMINI_API_KEY
)

model = genai.GenerativeModel("models/gemini-2.5-flash")


# -----------------------------
# YOUTUBE AUDIO DOWNLOAD
# -----------------------------

def extract_youtube_audio(url: str) -> str:
    file_id = str(uuid.uuid4())

    output_path = f"temp_{file_id}"

    ydl_opts = {
        "format": "bestaudio/best",
        "outtmpl": output_path,
        "postprocessors": [
            {
                "key": "FFmpegExtractAudio",
                "preferredcodec": "mp3"
            }
        ],
    }

    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])
    
    return f"{output_path}.mp3"



# -----------------------------
# AUDIO TRANSCRIPTION (FIXED)
# -----------------------------

def transcribe_audio(audio_path: str) -> str:
    try:
        config = aai.TranscriptionConfig(
            speech_models=["universal"]
        )

        transcriber = aai.Transcriber()

        transcript = transcriber.transcribe(
            audio_path,
            config=config
        )

        if transcript.status == "error":
            raise Exception(transcript.error)

        return transcript.text

    except Exception as e:
        raise Exception(
            f"Transcription failed: {str(e)}"
        )


# -----------------------------
# GEMINI OCR (FIXED)
# -----------------------------

def perform_ocr_with_gemini(image_path: str) -> str:

    if not image_path:
        return ""

    try:
        with open(image_path, "rb") as img:
            image_bytes = img.read()

        # Change mime type if using png:
        # "image/png"

        response = model.generate_content([
            "Extract all readable text from this whiteboard image clearly. Preserve notes, formulas, and diagrams.",
            {
                "mime_type": "image/png",
                "data": image_bytes
            }
        ])

        return response.text

    except Exception as e:
        raise Exception(
            f"OCR failed: {str(e)}"
        )


# -----------------------------
# COMBINE + GENERATE NOTES
# -----------------------------

def generate_final_notes(
    audio_text: str,
    ocr_text: str
) -> str:

    try:
        prompt = f"""
You are an expert educational assistant.

Audio Transcription:
{audio_text}

Whiteboard OCR:
{ocr_text}

Combine both and generate:

- Structured study notes
- Headings
- Bullet points
- Examples
- Clear explanations
"""

        response = model.generate_content(prompt)

        return response.text

    except Exception as e:
        raise Exception(
            f"Notes generation failed: {str(e)}"
        )


# -----------------------------
# PDF CREATION
# -----------------------------

def create_pdf(
    text: str,
    title: str
) -> str:

    os.makedirs(
        "generated_pdfs",
        exist_ok=True
    )

    pdf = FPDF()

    pdf.add_page()

    pdf.set_font(
        "Arial",
        size=12
    )

    cleaned_text = (
        text.encode(
            "latin-1",
            "replace"
        ).decode("latin-1")
    )

    pdf.multi_cell(
        0,
        10,
        txt=cleaned_text
    )

    safe_title = title.replace(
        " ",
        "_"
    )

    file_path = (
        f"generated_pdfs/"
        f"{uuid.uuid4()}_{safe_title}.pdf"
    )

    pdf.output(file_path)

    return file_path