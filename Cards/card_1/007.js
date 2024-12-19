
const playAudioBtn = document.getElementsByClassName('play_audio')[0];
const audio = document.getElementsByClassName('Audio')[0];

playAudioBtn.addEventListener('click', () => {
    event.preventDefault();

    if (!audio.paused) {
        audio.currentTime = 0;
    }
    audio.play()
});