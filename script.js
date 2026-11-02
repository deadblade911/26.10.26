const slides = document.querySelectorAll('.slide');
const track = document.querySelector('.slider__track');
let currentIndex = 0;
let autoTimer = null;

function startAuto() {
    autoTimer = setInterval(() => goTo(currentIndex + 1), 3000);
}

function stopAuto() {
    if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
    }
}

document.querySelectorAll('.slider__btn').forEach(btn => {
    btn.addEventListener('mouseover', () => {
        stopAuto();
    });
    btn.addEventListener('mouseout', () => {
        startAuto();
    });
});

slides.forEach(slide => {
    slide.addEventListener('mouseover', () => {
        stopAuto();
    });
    slide.addEventListener('mouseout', () => {
        startAuto();
    });
});

function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    currentIndex = index;
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.slider__btn--prev').addEventListener('click', () => goTo(currentIndex - 1));

document.querySelector('.slider__btn--next').addEventListener('click', () => goTo(currentIndex + 1));

startAuto();
