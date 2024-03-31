import requests
import os
import sys
import io
from PIL import Image
jarvis_dir = 'c:\\Users\\purve\\Desktop\\J.A.R.V.I.S-no-web-ui'
if jarvis_dir not in sys.path:
    sys.path.append(jarvis_dir)

from FIONA.helpers.say import say
from helpers.listen import listen

HG_FACE="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"

API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0"
headers = {"Authorization": f"Bearer {HG_FACE}"}

def createImage():
    say('Enter prompt')
    prompt = listen()
    if prompt and 'malf' not in prompt:
        query = {
            'inputs' : prompt
        }
        response = requests.post(API_URL, headers=headers, json=query).content
        
        image = Image.open(io.BytesIO(response))
        file_path = f"C:\\Users\\purve\\Pictures\\Saved Pictures\\{prompt[0:10]}.jpg"

    
        image.save(file_path, exist_ok=True)
        say('Image generated and stored succesfully in images folder')
    return True


if __name__ == "__main__":
    createImage('Astroanut riding on a horse')