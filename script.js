const song = document.getElementById('song');
const playButton = document.getElementById('playButton');
const status = document.getElementById('status');

async function tryPlay() {
  try {
    await song.play();
    playButton.textContent = 'إيقاف الأغنية';
    status.textContent = 'الأغنية شغّالة ❤️';
  } catch (error) {
    // Most browsers block autoplay with sound until the visitor interacts.
    playButton.textContent = 'شغّلي الأغنية ❤️';
    status.textContent = 'اضغطي تشغيل لو المتصفح منع التشغيل التلقائي';
  }
}

window.addEventListener('load', tryPlay);
playButton.addEventListener('click', async () => {
  if (song.paused) {
    await tryPlay();
  } else {
    song.pause();
  }
});
song.addEventListener('play', () => {
  playButton.textContent = 'إيقاف الأغنية';
  status.textContent = 'الأغنية شغّالة ❤️';
});
song.addEventListener('pause', () => {
  playButton.textContent = 'شغّلي الأغنية ❤️';
  status.textContent = 'اضغطي تشغيل للاستماع مرة تانية';
});

// Gentle floating hearts rising from the bottom.
const hearts = document.getElementById('hearts');
const symbols = ['♡', '♥', '💕', '♡', '♥'];
function createHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 18}px`;
  heart.style.setProperty('--drift', `${Math.random() * 100 - 50}px`);
  const duration = 7 + Math.random() * 6;
  heart.style.animationDuration = `${duration}s`;
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(createHeart, 650);
for (let i = 0; i < 9; i++) setTimeout(createHeart, i * 220);
