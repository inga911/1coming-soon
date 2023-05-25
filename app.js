const days = document.querySelectorAll('days');
const hours = document.querySelectorAll('hours');
const minutes = document.querySelectorAll('minutes');
const seconds = document.querySelectorAll('seconds');

const currentTime  = new Date().getFullYear();
const christmasEve = new Date(`December 24 ${currentTime } 00:00:00`);

function newYearsCountDown() {
  const currentTime  = new Date();
  const left = christmasEve - currentTime ;
  const d = Math.floor(left / 1000 / 60 / 60 / 24);
  const h = Math.floor(left / 1000 / 60 / 60) % 24;
  const m = Math.floor(left / 1000 / 60) % 60;
  const s = Math.floor(left / 1000) % 60;

  document.getElementById('days').innerHTML = d;
  document.getElementById('hours').innerHTML = h < 10 ? '0' + h : h;
  document.getElementById('minutes').innerHTML = m < 10 ? '0' + m : m;
  document.getElementById('seconds').innerHTML = s < 10 ? '0' + s : s;
}

setInterval(newYearsCountDown, 1000);