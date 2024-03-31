# Sentiment
from ML import sentiment

# Deal with files
from deal_with_files.open_file import deal_with_query
from deal_with_files.vecDB import vectorize
from deal_with_files.performQA import ques_ans

# Helper modules
from helpers.listen import listen
from helpers.say import say

# Gen image
from ML import genImage
from multimodal import gemini

# Basic tasks
from basicTasks import search, time, chatbot, singlePrompt, sendMail
from basicTasks.news import fetch_news_about
from basicTasks.weather import fetch_weather
from basicTasks.youtube import youtube_video
from basicTasks.diary import create_diary_entry
import re
play_pattern = re.compile(r'(jarvis\s+)?play\s+(.+)', re.IGNORECASE)

if __name__ == '__main__':
    print('Jarvis activated')
    say('Jarvis activated')

    while True:
        print('Listening...')
        query = listen().lower()
        print(f"Query: {query}")

        # Checking for YouTube play command with flexible pattern
        if match := play_pattern.search(query):
            search_query = match.group(2)  # Extracted search query
            youtube_video(search_query)
        elif 'jarvis search' in query and 'on google' in query:
            search.google_search(query)
        elif 'jarvis what time is it' in query:
            time.time()
        elif 'jarvis new prompt' in query:
            singlePrompt.enterPrompt()
        elif 'jarvis send email' in query:
            sendMail.sendEmail()
        elif 'power off' in query:
            say('Shutting down')
            break  # Exit the loop to stop the program
        elif 'jarvis talk to me' in query:
            chatbot.chat()
        elif 'news about' in query:
            topic = query.split('news about ')[1]
            article = fetch_news_about(topic)
            if article:
                title = article.get('title')
                description = article.get('description')
                say(f"Here is the latest news about {topic}: {title}. {description}")
            else:
                say(f"No news found for {topic}")
        elif 'what is the weather' in query:
            location = "Mumbai" if query.endswith('what is the weather') or query.endswith('what is the weather?') else query.split('what is the weather in ')[1]
            weather_info = fetch_weather(location)
            if weather_info:
                say(weather_info)
            else:
                say("I'm sorry, I couldn't fetch the weather for that location.")
        elif 'take notes' in query:
            say("Starting to take notes. Say 'end process' to finish.")
            create_diary_entry()
            say("Your notes have been saved.")
        elif 'jarvis open' in query and 'located' in query:
            deal_with_query(query)
        elif 'please read' in query and 'located' in query:
            deal_with_query(query)
            continue  # To skip processing anything further in this loop iteration
        elif 'jarvis generate image' in query:
            genImage.createImage()
        elif 'jarvis describe image' in query:
            gemini.describe()
        elif 'malf' not in query:
            say('I did not quite catch that, mind repeating it?')