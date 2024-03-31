import os
import openai

from helpers.say import say



openai.api_key = "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"

def return_answer(user_query):
    try:
        # Using the Chat Completion endpoint correctly with a chat model
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": user_query}
            ],
            temperature=0.7,
            max_tokens=256  # Adjust max_tokens as needed
        )
        
        # Extracting and returning the text part of the response
        return response.choices[0].message['content'].strip() if response.choices else "I'm sorry, I couldn't process your request."
    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return "I'm sorry, I couldn't process your request."

if __name__ == '__main__':
    user_query = 'Tell me about machine learning.'
    answer = return_answer(user_query)
    print(answer)  # For debugging, remove or comment out in production
    say(answer)
