let secondHand = document.querySelector('#sec');
let minHand = document.querySelector('#min');
let hourHand = document.querySelector('#hr');
// const audio = new audio('')

function clockRotating() {
  var date = new Date();
  var getSeconds = date.getSeconds() / 60;
  var getMinutes = date.getMinutes() / 60;
  var getHours = date.getHours() / 12;

  secondHand.style.transform = 'rotate(' + getSeconds * 360 + 'deg)';
  minHand.style.transform = 'rotate(' + getMinutes * 360 + 'deg)';
  hourHand.style.transform = 'rotate(' + getHours * 360 + 'deg)';

  document.querySelector('.current-day').innerHTML = date.toDateString();
  document.querySelector('.current-seconds').innerHTML = date.getSeconds();
  audio.play();
}

setInterval(clockRotating, 1000);
