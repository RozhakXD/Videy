from flask import render_template, request, jsonify, send_file
from app.utils.video_processor import process_video_url
from io import BytesIO
from app import app
import random
import string
import requests

@app.route('/api/process', methods=['POST'])
def process_video():
    data = request.get_json()
    video_url = data.get('url')

    try:
        result = process_video_url(video_url)
        return jsonify(
            {
                'success': True,
                'originalUrl': result['original_url'],
                'mp4Url': result['mp4_url'],
                'mp3Url': result['mp3_url']
            }
        )
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 400

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/download', methods=['GET'])
def download_video():
    url = request.args.get('url')
    file_type = request.args.get('type', 'mp4')

    try:
        response = requests.get(url, stream=True)
        response.raise_for_status()

        file_data = BytesIO(response.content)

        file_name = f"{''.join(random.choices(string.ascii_lowercase + string.digits, k=6))}.{file_type}"

        return send_file(
            file_data,
            as_attachment=True,
            download_name=file_name,
            mimetype=f"{'audio' if file_type == 'mp3' else 'video'}/{file_type}"
        )
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500