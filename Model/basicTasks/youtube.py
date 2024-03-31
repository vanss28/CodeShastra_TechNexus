# youtube.py
from youtubesearchpython import VideosSearch
import webbrowser
from helpers.say import say

def youtube_video(search_query):
    videos_search = VideosSearch(search_query, limit=1)
    results = videos_search.result()
    
    if results['result']:
        first_video_url = results['result'][0]['link']
        chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe %s"
        webbrowser.get(chrome_path).open(first_video_url, new=2)
    else:
        say("No search results found")
