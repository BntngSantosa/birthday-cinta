// Mendapatkan referensi ke elemen audio
const audioPlayer = document.getElementById("audioPlayer");
const btnAudioPlayer = document.querySelector("#btnAudioPlayer");

btnAudioPlayer.addEventListener("click", () => {
  btnAudioPlayer.classList.toggle("fa-circle-pause");
  btnAudioPlayer.classList.toggle("fa-circle-play");

  // Memeriksa kelas ikon saat ini dan memanggil fungsi yang sesuai
  if (btnAudioPlayer.classList.contains("fa-circle-play")) {
    // Memastikan ada interaksi pengguna sebelum memainkan lagu
    document.body.addEventListener( "click", function playHandler() {
        playSong();
        // Hapus event listener setelah pemutaran dimulai
        document.body.removeEventListener("click", playHandler);
    }, { once: true });
  } else {
    stopSong();
  }
});

// Fungsi untuk memutar lagu
function playSong() {
  audioPlayer.play();
}

playSong();

// Fungsi untuk menghentikan lagu
function stopSong() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}
