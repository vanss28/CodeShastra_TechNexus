import os

def deal_with_query(query):
    # Assuming the default file type as txt
    default_file_type = 'txt'
    
    location_map = {
        'desktop': r'C:\Users\purve\Desktop',
        'code folder': r'C:\Users\purve\Desktop\Codeshastra',
        'college folder': r'C:\Users\purve\Desktop\Codeshastra',
        'downloads': r'C:\Users\purve\Downloads'
    }

    def location_translate(location):
        return location_map.get(location.lower(), None)

    words = query.lower().split()
    file_name = folder_name = file_type = None
    
    for i, word in enumerate(words):
        if word in ["open", "read"]:
            file_type = words[i + 1] if i + 1 < len(words) else default_file_type
            file_name = words[i + 2] if i + 2 < len(words) else None
        elif word == 'located':
            location_key = ' '.join(words[i + 1:]) if i + 1 < len(words) else 'desktop'
            folder_name = location_translate(location_key)
            break  # No need to continue once location is found

    if file_name and folder_name:
        path = os.path.join(folder_name, f"{file_name}.{file_type}")
        print(f"Attempting to open: {path}")
        if os.path.exists(path):
            os.startfile(path)
        else:
            print(f"File not found at: {path}")
    else:
        print("Error: Missing information to construct the file path.")

if __name__ == "__main__":
    deal_with_query('jarvis open test located in desktop')
    # Or even: deal_with_query('jarvis read test located in desktop')
