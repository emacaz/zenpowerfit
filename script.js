function togglePlayPause() {
  var video = document.getElementById("myVideo");
  var playButton = document.querySelector(".play-button svg");

  if (video.paused || video.ended) {
    video.play();
    playButton.innerHTML =
      '<path d="M8 5v14l11-7z"/><path d="M0 0h24v24H0z" fill="none"/>';
  } else {
    video.pause();
    playButton.innerHTML =
      '<path d="M10 8v8l6-4z"/><path d="M0 0h24v24H0z" fill="none"/>';
  }
}

function importHotmart() {
  var imported = document.createElement("script");
  imported.src = "https://static.hotmart.com/checkout/widget.min.js";
  document.head.appendChild(imported);
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.type = "text/css";
  link.href = "https://static.hotmart.com/css/hotmart-fb.min.css";
  document.head.appendChild(link);
}
importHotmart();
