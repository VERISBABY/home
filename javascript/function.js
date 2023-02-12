// Nút đăng kí
const button = document.querySelector(".dangkinews");

function logSubmit(event) {
    log.textContent = `SUBCRIBED SUCCESS!`;
    event.preventDefault();
  }
  
  const form = document.getElementById('form');
  const log = document.getElementById('log');
  form.addEventListener('submit', logSubmit);

  // INDEX - SLIDER
  var options = {
  accessibility: true,
  prevNextButtons: true,
  arrowShape: {
    x0: 10,
    x1: 60,
    y1: 40,
    x2: 60,
    y2: 35,
    x3: 15
  }
};
var slides = document.getElementsByClassName('carousel-cell');
var flkty = new Flickity(carousel, options);

flkty.on('scroll', function () {
  flkty.slides.forEach(function (slide, i) {
    var image = slides[i];
    var x = (slide.target + flkty.x) * -1/3;
    image.style.backgroundPosition = x + 'px';
  });
});

document.getElementById("year").innerHTML = new Date().getFullYear();
