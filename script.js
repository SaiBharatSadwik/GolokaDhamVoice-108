let currentIndex = 0;

function rotateSlides(slider) {
    const slides = slider.children;
    const totalSlides = slides.length;

    currentIndex = (currentIndex + 1) % totalSlides;
    slider.style.transform = `translateX(${-currentIndex * 100}%)`;

    setTimeout(() => rotateSlides(slider), 3000);
}

function initializeSliders() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        rotateSlides(slider);
    });
}

function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', initializeSliders);
