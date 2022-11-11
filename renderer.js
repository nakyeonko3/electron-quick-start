/**
 * This file is loaded via the <script> tag in the index.html file and will
 * be executed in the renderer process for that window. No Node.js APIs are
 * available in this process because `nodeIntegration` is turned off and
 * `contextIsolation` is turned on. Use the contextBridge API in `preload.js`
 * to expose Node.js functionality from the main process.
 */
const audio = new Audio('lum.mp3');
const video = document.querySelector('video');
audio.volume = 0.1;
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
console.log(audio);
