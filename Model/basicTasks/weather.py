
import requests

def fetch_weather(location):
    api_key = "3e444da9a5e62b10307571615ae1ad8a"
    base_url = "http://api.openweathermap.org/data/2.5/weather?"

    # Construct the full API URL
    full_url = f"{base_url}appid={api_key}&q={location}&units=metric"  # Using metric units

    try:
        response = requests.get(full_url)
        if response.status_code == 200:
            # Parse the JSON response
            weather_data = response.json()
            main_data = weather_data['main']
            temperature = main_data['temp']
            pressure = main_data['pressure']
            humidity = main_data['humidity']
            weather = weather_data['weather'][0]['description']

            # Construct a response string
            weather_response = f"Temperature: {temperature}°C, Pressure: {pressure} hPa, Humidity: {humidity}%, Conditions: {weather}"
            return weather_response
        else:
            print(f"Failed to fetch weather: HTTP {response.status_code}")
            return None
    except requests.RequestException as e:
        print(f"Request failed: {e}")
        return None
