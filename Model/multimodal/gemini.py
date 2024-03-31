#helper modules
from helpers.listen import listen
from helpers.say import say


import pathlib
import textwrap
import os
import google.generativeai as genai
from IPython.display import display
from IPython.display import Markdown
import PIL.Image
import google.ai.generativelanguage as glm


genai.configure(api_key="AIzaSyDBpg8HM1CVvdWAgk4yPSKjES6lOCsgSuE")

model = genai.GenerativeModel('gemini-pro-vision')


def describe():
    say('Enter the location of the image :')
    path =input('Enter the location of the image :')
    if path:
        say('Any description?')
        desc = listen()
    img = PIL.Image.open(path)
    response = model.generate_content([desc, img], stream=True)
    response.resolve()
    print(response.text)
    say(response.text)
    return True

if __name__ == '__main__':
    describe("C:\\Users\\Hp\\Desktop\\Code\\flower.jpg")
