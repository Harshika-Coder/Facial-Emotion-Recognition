const video = document.getElementById('video');
const emotionText = document.getElementById('emotion');
const startBtn = document.getElementById('startBtn');

// Access webcam
startBtn.addEventListener('click', async () => {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;

    // Placeholder: Simulate emotion detection
    setTimeout(() => {
      emotionText.textContent = '😄 Happy (Confidence: 92%)';
    }, 3000);
  } catch (err) {
    alert('Camera access denied or not available.');
  }
});