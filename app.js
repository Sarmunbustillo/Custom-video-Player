const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

//play and pause video
const toggleVideoStatus = () => {
  video.paused ? video.play() : video.pause();
};

//update play pause icon
const updatePlayIcon = () => {
  video.paused
    ? (play.innerHTML = '<span class="pause-icon"></span>')
    : (play.innerHTML = '<span class="play-icon"></span>');
};

//update progress and timestamp
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // get the mins
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = `0${String(mins)}`;
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = `0${String(secs)}`;
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

//set video progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};
//stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

//event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
