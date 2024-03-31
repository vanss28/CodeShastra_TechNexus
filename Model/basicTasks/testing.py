from news import fetch_news_about

# Test fetching news about a specific topic
topic = "technology"
article = fetch_news_about(topic)
if article:
    print(f"Description of the first article about {topic}: {article['description']}")
else:
    print(f"No articles found about {topic}.")
