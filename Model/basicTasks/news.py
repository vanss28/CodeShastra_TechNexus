import sys
import os
import sys
import requests




# Manually add the directory containing 'jarvis' to sys.path
jarvis_dir = 'c:\\Users\\purve\\Desktop\\J.A.R.V.I.S-no-web-ui'
if jarvis_dir not in sys.path:
    sys.path.append(jarvis_dir)

from FIONA.helpers.say import say

# Load API key from .env file or directly assign here for testing
news_api_key = "e612d9d945f24d119146eb26292e422f"
base_url = "https://newsapi.org/v2/everything"  # Correctly define the base URL

def fetch_news_about(item):
    params = {
        "q": item,
        "sortBy": "publishedAt",
        "apiKey": news_api_key,
        "language": "en",
    }

    try:
        response = requests.get(base_url, params=params)
        if response.status_code == 200:
            articles = response.json().get("articles")
            if articles:
                return articles[0]  # Return the first article
            else:
                print(f"No articles found about {item}.")
        else:
            print(f"Failed to fetch news: HTTP {response.status_code}")
    except requests.RequestException as e:
        print(f"Request failed: {e}")

    return None

def read_article_description(item):
    article = fetch_news_about(item)
    if article:
        description = article.get("description")
        print(f"Description of the first article about {item}: {description}")
        
        # Use your custom say function to read out the description
        say(description)
    else:
        print(f"No articles found about {item}.")

if __name__ == "__main__":
    item_to_search = "cricket"  # Change this to any topic of interest
    read_article_description(item_to_search)

