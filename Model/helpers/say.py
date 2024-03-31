import win32com.client

speaker = win32com.client.Dispatch("SAPI.SpVoice")

# Set the default voice to Zira
for voice in speaker.GetVoices():
    if "Zira" in voice.GetDescription():
        speaker.Voice = voice
        break

def say(text):
    speaker.Speak(text)
    
if __name__ == '__main__':
    say("Hello World")