document.addEventListener("DOMContentLoaded", function() {
    const albumImage = document.getElementById('album-image');
    const prevButton = document.getElementById('prev-button');
    const playButton = document.getElementById('play-button');
    const nextButton = document.getElementById('next-button');
    const audio = document.getElementById('audio');
  
    const playlist = [
        { title: 'Música 1', albumArt: 'Taylor Swift Summer.jpg', audioFile: 'Taylor Swift - Cruel Summer.mp3' },
        { title: 'Música 2', albumArt: 'taylor_swift_album.jpg', audioFile: 'song2.mp3' },
        { title: 'Música 3', albumArt: 'taylor_swift_album.jpg', audioFile: 'song3.mp3' }
    ];
  
    let currentSongIndex = 0;
    let isPlaying = false;
  
    function playSong(index) {
        albumImage.src = playlist[index].albumArt;
        audio.src = playlist[index].audioFile;
        audio.load();
        if (isPlaying) {
            audio.play();
        }
    }
  
    function togglePlay() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
            playButton.textContent = 'Reproduzir';
        } else {
            audio.play();
            isPlaying = true;
            playButton.textContent = 'Pausar';
        }
    }
  
    playButton.addEventListener('click', togglePlay);
  
    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
        playSong(currentSongIndex);
    });
  
    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % playlist.length;
        playSong(currentSongIndex);
    });
  
    // Iniciar com a primeira música
    playSong(currentSongIndex);
  });
  
