
const playAudioBtn = document.getElementsByClassName('play-audio-btn')[0];
const audio = document.getElementsByClassName('Audio')[0];

playAudioBtn.addEventListener('click', () => {
    audio.play()
});