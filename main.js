const imgs = document.querySelectorAll('.main-slider img');
const dots = document.querySelectorAll('.dot');
let currentImg = 0;
const interval = 5000;
let timer = setInterval(changeSlide, interval);

function changeSlide() {
  for (var i = 0; i < imgs.length; i++) {
    imgs[i].style.opacity = 0;
    dots[i].className = dots[i].className.replace(' active', '');
  }

  currentImg = (currentImg + 1) % imgs.length;

  imgs[currentImg].style.opacity = 1;
  dots[currentImg].className += ' active';
}