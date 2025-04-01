import requests
import re

def video_id_from_short_url(short_url):
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36'
    }
    response = requests.get(short_url)
    if '?id=' in response.url:
        video_id = re.search(r'id=(\w+)', response.url)
        if video_id:
            return video_id.group(1)
        else:
            raise ValueError("Failed To Extract Video ID From URL.")
    else:
        raise ValueError("Invalid URL: Missing '?id=' Parameter.")

def process_video_url(video_url):
    if '?id=' in video_url:
        video_id = extract_video_id(video_url)
    else:
        video_id = video_id_from_short_url(short_url=video_url)

    file_type = get_file_type(video_id)

    return {
        'original_url': f"https://cdn.videy.co/{video_id}{file_type}",
        'mp4_url': f"https://cdn.videy.co/{video_id}{file_type}",
        'mp3_url': f"https://cdn.videy.co/{video_id}.mp3"
    }

def extract_video_id(video_url):
    video_id = re.search(r'id=(\w+)', video_url)
    if video_id:
        return video_id.group(1)
    else:
        raise ValueError("Failed To Extract Video ID From The Provided URL.")

def get_file_type(video_id):
    if len(video_id) == 9 and video_id[-1] == '2':
        return '.mov'
    else:
        return '.mp4'