let timer;
let time = 0;

function displayTime() {
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  document.getElementById('display').textContent = 
    `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  time++;
}

document.getElementById('start').addEventListener('click', function() {
  if (!timer) {
    timer = setInterval(displayTime, 1000);
  }
});

document.getElementById('pause').addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
});

document.getElementById('reset').addEventListener('click', function() {
  clearInterval(timer);
  timer = null;
  time = 0;
  displayTime();
});

document.getElementById('lap').addEventListener('click', function() {
  const lapTime = document.createElement('li');
  lapTime.textContent = document.getElementById('display').textContent;
  document.getElementById('laps').appendChild(lapTime);
});