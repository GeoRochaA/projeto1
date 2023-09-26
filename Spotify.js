const audioPlayer = document.getElementById('audio-player');
const playButton = document.querySelector('.play-button');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

playButton.addEventListener('click', togglePlay);
prevButton.addEventListener('click', playPrevious);
nextButton.addEventListener('click', playNext);

let currentTrackIndex = 0;

const playlist = [
    'Anti-Hero.mp3',
    'Blank Space.mp3',
    'cardigan.mp3',
    'Cruel Summer.mp3',
    'Enchanted.mp3',
    'Look What You Made Me Do.mp3',
    'Lover.mp3',
    'Shake it Off.mp3',
    'Style.mp3',
    'You Belong With Me.mp3',
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
