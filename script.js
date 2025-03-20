// Navbar Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Image Slider Functionality
const sliders = document.querySelectorAll('.slider');

sliders.forEach((slider) => {
    let slideIndex = 0;
    const slides = slider.querySelectorAll('img');

    function showSlides() {
        slides.forEach((slide) => {
            slide.style.display = 'none';
        });

        slideIndex++;
        if (slideIndex > slides.length) slideIndex = 1;
        slides[slideIndex - 1].style.display = 'block';

        setTimeout(showSlides, 3000); // Change every 3 seconds
    }

    showSlides();
});
