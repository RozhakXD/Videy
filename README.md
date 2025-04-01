# 🚀 Videy - Your Ultimate Video Downloader 🎥
![Videy - Logo](https://github.com/user-attachments/assets/d0f7d996-964a-40f8-81af-e99dfce4fbd2)

## 🔍 Overview
Videy is a modern and efficient web application that enables users to download videos effortlessly from Videy.co links. With just a simple paste of the URL, users can access multiple download options, including original quality, MP4 format, and MP3 audio extraction.

This platform is designed to be user-friendly, secure, and fast, ensuring a seamless video downloading experience. Whether you want to download videos for offline viewing or extract audio from a clip, Videy provides the right tools to meet your needs.

## 🌟 Key Features
- 🚀 Lightning-fast Video Processing – Download videos in seconds with our optimized system.
- 🔒 Secure & Private – All downloads go through a secure backend proxy to protect user privacy.
- 📁 Multiple Format Options – Supports** MP4 (video)**, **MP3 (audio extraction)**, and **original quality downloads**.
- 🎥 Built-in Video Preview – View the video before downloading to ensure you get the right file.
- 📱 Fully Responsive Design – Enjoy seamless access on both desktop and mobile devices.

## 🛠 Technology Stack
### Frontend
- HTML5 - For structured and semantic content.
- CSS3 - Styled with animations and modern design principles.
- JavaScript - Enhancing interactivity and user experience.
### Backend
- Python Flask - Lightweight yet powerful web framework.
- Requests - HTTP library to facilitate CDN access.
- Flask-CORS - Handles cross-origin resource sharing.

## 🚀 Installation Guide
### Prerequisites
- `pip` package manager ready to use.
- Python 3.8 or later installed.

### Setup Instructions
```
git clone https://github.com/RozhakXD/Videy.git
cd Videy
python -m venv venv
source venv/bin/activate  # For Linux/Mac
venv\Scripts\activate     # For Windows
pip install -r requirements.txt
python run.py
```
**Access the app in your browser:** `http://localhost:5000`

## 🌐 API Endpoints
Videy offers a simple yet powerful API to handle video processing and downloads:

| Endpoint         | Method | Description                     |
|-----------------|--------|---------------------------------|
| `/`             | GET    | Main application page          |
| `/api/process`  | POST   | Process Videy.co URL           |
| `/api/download` | GET    | Download video/audio file  

## 🎨 User Interface
![Cuplikan layar 2025-04-01](https://github.com/user-attachments/assets/093c3e91-a0ac-4359-90bc-c3cf6d5e1c74)

![Cuplikan layar 2025-04-01](https://github.com/user-attachments/assets/f2f591d3-6163-4adb-bb01-8141e86e0ad7)

## 🛡️ Security Features
- Input validation to ensure only valid **Videy.co** URLs are processed.
- Secure backend proxy for safe and private downloads.
- Future implementation of rate-limiting to prevent abuse.
- No permanent storage of downloaded files, ensuring user privacy.

## 📈 Performance Metrics
Videy is optimized for speed and reliability:
- ⏱️ Average processing time: **Less than 2 seconds**.
- ⏳ 99% uptime guarantee.
- 📦 Supports video downloads up to **2GB** in size.

## 💖 Support the Project
If you find **Videy** useful, consider supporting its development:
- ☕ [Buy me a coffee on PayPal](https://paypal.me/rozhak9)
- 🎁 [Donate via Saweria](https://saweria.co/rozhak09)

For any inquiries or support, reach out to:

Project Maintainer - **Rozhak**  
📧 Email - rozhak9@proton.me  
📂 Project Repository - [https://github.com/RozhakXD/Videy](https://github.com/RozhakXD/Videy)

## 📜 License
This project is distributed under the **MIT License**. See `LICENSE` for details.
