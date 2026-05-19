import requests
import assemblyai as aai

# Use your exact API key
API_KEY = "9c6ecfcd94b24931adc806fe8ae6e878"

def get_temp_token():
    url = "https://api.assemblyai.com/v2/realtime/token"

    headers = {
        "authorization": API_KEY,   # IMPORTANT: lowercase works better
        "content-type": "application/json"
    }

    response = requests.post(
        url,
        json={"expires_in": 600},
        headers=headers
    )

    print("STATUS:", response.status_code)
    print("BODY:", response.text)

    return response.json()