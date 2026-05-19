import requests

DEEPGRAM_API_KEY = "120893485714596a37b6ff4afe72440ca39208b1"

def get_deepgram_token():

    url = "https://api.deepgram.com/v1/auth/grant"

    headers = {
        "Authorization": f"Token {DEEPGRAM_API_KEY}",
        "Content-Type": "application/json"
    }

    response = requests.post(
        url,
        headers=headers,
        json={"ttl": 3600}
    )

    print(response.status_code)
    print(response.text)

    if response.status_code != 200:
        raise Exception(response.text)

    return response.json()["access_token"]