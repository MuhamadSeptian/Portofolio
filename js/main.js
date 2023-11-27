function openNav() {
  document.getElementById('myNav').style.width = '60%';
}
function closeNav() {
  document.getElementById('myNav').style.width = '0%';
}
setInterval(displayClock, 500);
function displayClock() {
  document.getElementById('time').innerHTML = new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric', second: 'numeric' });
}
window.onload = function () {
  var greeting;
  var time = new Date().getHours();
  if (time < 12) {
    greeting = 'Good morning';
  } else if (time < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }
  document.getElementById('greet').innerHTML = greeting;
  setTimeout(function () {
    document.getElementById('greet').style.visibility = 'hidden';
  }, 10000);

  function changeImage() {
    var BackgroundImg = ['./images/luciaweave.png', './images/brs.png', './images/IMG_8096.JPG', './images/alisa.png', './images/wuwa.png'];
    var i = Math.floor(Math.random() * 5);
    document.getElementById('home').style.backgroundImage = 'url("' + BackgroundImg[i] + '")';
  }
  window.setInterval(changeImage, 10000);
};
