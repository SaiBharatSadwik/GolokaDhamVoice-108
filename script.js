let slideIndex = [0, 0, 0]; // For multiple sliders
const slideId = ["home", "about", "camps"];

function showSlides(n, no) {
    let i;
    let slides = document.querySelectorAll(`#${slideId[no]} .slide`);
    if (n >= slides.length) slideIndex[no] = 0;
    if (n < 0) slideIndex[no] = slides.length - 1;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[no]].style.display = "block";
}

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function autoSlide() {
    for (let no = 0; no < slideId.length; no++) {
        slideIndex[no]++;
        showSlides(slideIndex[no], no);
    }
    setTimeout(autoSlide, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    for (let no = 0; no < slideId.length; no++) {
        showSlides(slideIndex[no], no);
    }
    autoSlide();
});

function toggleMenu() {
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}
