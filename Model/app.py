import streamlit as st
import speech_recognition as sr
from streamlit_option_menu import option_menu  # For navigation

# Initialize recognizer
r = sr.Recognizer()

# Function to record speech and convert to text
def record_audio():
    r = sr.Recognizer()
    with sr.Microphone() as source:
        r.pause_threshold = 0.5
        audio = r.listen(source, timeout=30)  # Wait for up to 10 seconds for input
        try:
            query = r.recognize_google(audio, language='en-in')
            print(query)
            return query
        except sr.WaitTimeoutError:
            print('timeout')
            return 'error'
        except Exception as e:
            print('malf')
            return 'malf'

# Streamlit app layout
st.title('Speech to Text Converter')
st.write('Click the button to start recording')

# Button to start recording
if st.button('Record/Stop'):
    query = record_audio()
    st.write(query)