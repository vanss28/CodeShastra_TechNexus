import speech_recognition as sr
from datetime import datetime
import os

def create_diary_entry():
    # Initialize the recognizer
    r = sr.Recognizer()
    
    # Specify the directory to store diary entries
    diary_dir = "diary_entries"
    os.makedirs(diary_dir, exist_ok=True)
    
    # Create a new file with the current date and time
    now = datetime.now()
    filename = now.strftime("%Y-%m-%d_%H-%M-%S") + "_diary.txt"
    filepath = os.path.join(diary_dir, filename)
    
    print("Please start speaking. Say 'end process' to stop recording.")
    
    with sr.Microphone() as source:
        # Adjust for ambient noise
        r.adjust_for_ambient_noise(source)
        
        # Flag to keep recording
        keep_recording = True
        
        while keep_recording:
            try:
                # Listen for audio
                audio = r.listen(source)
                # Transcribe audio
                text = r.recognize_google(audio)
                
                # Check for the end command
                if "end process" in text.lower():
                    print("Ending note-taking session.")
                    keep_recording = False
                    text = text.replace("end process", "")  # Remove the command from notes
                else:
                    print(f"Transcribed: {text}")
                    
                # Append the transcribed text to the file with timestamp
                with open(filepath, "a") as file:
                    file.write(f"{now.strftime('%Y-%m-%d %H:%M:%S')} - {text}\n")
            
            except sr.UnknownValueError:
                # Google Speech Recognition could not understand audio
                print("Could not understand audio, please try again.")
            except sr.RequestError as e:
                # Could not request results from Google Speech Recognition service
                print(f"Could not request results; {e}")
            except Exception as e:
                print(f"An error occurred; {e}")

if __name__ == "__main__":
    create_diary_entry()
