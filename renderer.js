/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const audio = new Audio('lum.mp3');
const video = document.querySelector('video');
audio.volume = 0.4;
audio.loop = true;
let flag = true;

video.addEventListener('click', () => {
  if (flag === true) {
    audio.play();
    flag = false;
  } else {
    audio.pause();
    flag = true;
  }
});

setInterval(
  () => {
    if (video.currentTime > 100) {
      console.log('loop start');
      video.currentTime = 10;
    }
  },
  1000,
  'Parameter 1',
  'Parameter 2'
);
