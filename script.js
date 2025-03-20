// Hamburger Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Slider Functionality
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach((slider) => {
        const slides = slider.querySelector(".slides");
        let index = 0;

        setInterval(() => {
            index++;
            if (index >= slides.children.length) {
                index = 0;
            }
            slides.style.transform = `translateX(-${index * 100}%)`;
        }, 3000);
    });
});
