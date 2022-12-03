const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.body;

startButton.addEventListener('click', startChangeColor);
stopButton.addEventListener('click', stopChangeColor);

stopButton.setAttribute('disabled', true);
let timer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function timerChangeColor() {
  timer = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function startChangeColor() {
  timerChangeColor();

  stopButton.removeAttribute('disabled');
  startButton.setAttribute('disabled', true);
}

function stopChangeColor() {
  clearInterval(timer);

  stopButton.setAttribute('disabled', true);
  startButton.removeAttribute('disabled');
}
