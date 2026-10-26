const track = document.querySelector('.slider__track');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function goTo(index) {
  if (index < 0) index = slides.length - 1;
  if (index >= slides.length) index = 0;
  currentIndex = index;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.slider__btn--prev')
  .addEventListener('click', () => goTo(currentIndex - 1));

document.querySelector('.slider__btn--next')
  .addEventListener('click', () => goTo(currentIndex + 1));
