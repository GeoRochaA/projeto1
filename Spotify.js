const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);

let currentTrackIndex = 0;

const playlist = [
    './Audios/Anti-Hero.mp3',
    './Audios/Blank Space.mp3',
    './Audios/cardigan.mp3',
    './Audios/Cruel Summer.mp3',
    './Audios/Enchanted.mp3',
    './Audios/Look What You Made Me Do.mp3',
    './Audios/Lover.mp3',
    './Audios/Shake it Off.mp3',
    './Audios/Style.mp3',
    './Audios/You Belong With Me.mp3',
];

function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playButton.textContent = 'Pausar';
    } else {
        audioPlayer.pause();
        playButton.textContent = 'Play';
    }
}

function playPrevious() {
    currentTrackIndex--;
    if (currentTrackIndex < 0) {
        currentTrackIndex = playlist.length - 1;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

function playNext() {
    currentTrackIndex++;
    if (currentTrackIndex >= playlist.length) {
        currentTrackIndex = 0;
    }
    audioPlayer.src = playlist[currentTrackIndex];
    audioPlayer.play();
}

audioPlayer.addEventListener('ended', playNext);
