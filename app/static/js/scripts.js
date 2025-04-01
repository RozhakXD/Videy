document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const convertBtn = document.getElementById('convert-btn');
    const videoUrlInput = document.getElementById('video-url');
    const resultContainer = document.getElementById('result-container');
    const loadingElement = document.querySelector('.loading');
    const videoPlayer = document.getElementById('video-player');
    const playBtn = document.querySelector('.play-btn');
    const videoPreview = document.querySelector('.video-preview');
    const originalDownloadBtn = document.querySelector('.original-download');
    const mp4DownloadBtn = document.querySelector('.mp4-download');
    const mp3DownloadBtn = document.querySelector('.mp3-download');

    let currentVideoData = {
        id: '',
        originalUrl: '',
        mp4Url: '',
        mp3Url: ''
    };

    convertBtn.addEventListener('click', async function() {
        const url = videoUrlInput.value.trim();

        if (!url) {
            alert('Please enter a valid Videy.co URL');
            return;
        }

        if (!url.includes('videy')) {
            alert('Please enter a valid Videy.co URL (e.g. https://videy.co/v/?id=3qQ0sNdc1)');
            return;
        }

        loadingElement.style.display = 'block';
        resultContainer.style.display = 'none';

        try {
            const response = await fetch('/api/process', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    url: url
                }),
            });
            const data = await response.json();

            currentVideoData = {
                id: data.videoId,
                originalUrl: data.originalUrl,
                mp4Url: data.mp4Url,
                mp3Url: data.mp3Url
            };

            videoPlayer.src = data.originalUrl;
            videoPlayer.style.display = 'block';

            originalDownloadBtn.onclick = () => downloadVideo(data.originalUrl, 'mp4');
            mp4DownloadBtn.onclick = () => downloadVideo(data.mp4Url, 'mp4');
            mp3DownloadBtn.onclick = () => downloadVideo(data.mp3Url, 'mp3');

            loadingElement.style.display = 'none';
            resultContainer.style.display = 'block';
            resultContainer.scrollIntoView({
                behavior: 'smooth'
            });

        } catch (error) {
            console.error('Error processing video:', error);
            loadingElement.style.display = 'none';
            alert('Error processing video. Please try again.');
        }
    });

    function downloadVideo(url, type) {
        if (!url || url === 'undefined') {
            alert('Invalid download link. Please try processing the video again.');
            return;
        }

        const downloadUrl = `/api/download?url=${encodeURIComponent(url)}&type=${type}`;

        fetch(downloadUrl, {
                method: 'GET'
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Download failed! Server responded with status: ${response.status}`);
                }
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.style.display = 'none';
                a.setAttribute('download', `videy-${currentVideoData.id}.${type}`);

                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            })
            .catch(error => {
                console.error('Download error:', error);
                alert(`Error: ${error.message}`);
            });
    }

    playBtn.addEventListener('click', function() {
        videoPreview.querySelector('video').style.display = 'block';
        videoPreview.querySelector('.play-btn').style.display = 'none';
        videoPlayer.play();
    });
});