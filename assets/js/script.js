// Mendapatkan referensi ke elemen audio
const audioPlayer = document.getElementById("audioPlayer");
const btnAudioPlayer = document.querySelector("#btnAudioPlayer");

btnAudioPlayer.addEventListener("click", () => {
    btnAudioPlayer.classList.toggle("fa-circle-play");
    btnAudioPlayer.classList.toggle("fa-circle-pause");

    btnAudioPlayer.classList.contains("fa-circle-pause") ? playSong() : stopSong();
});

// Fungsi untuk memutar lagu
function playSong() {
  audioPlayer.play();
}

// Fungsi untuk menghentikan lagu
function stopSong() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
