// =========================
// TYPING EFFECT
// =========================
const words = ["Design", "Build", "Create"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const typedText = document.querySelector(".typed-text");
    if (!typedText) return; // safety check

    const currentWord = words[wordIndex];

    if (isDeleting) {
        charIndex--;
    } else {
        charIndex++;
    }

    typedText.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 70 : 120;

    // pause when word is fully typed
    if (!isDeleting && charIndex === currentWord.length) {
        speed = 1200;
        isDeleting = true;
    }
    // move to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

// =========================
// SCROLL FUNCTION
// =========================
function scrollToProjects() {
    window.location.href = "projects.html";
}

// =========================
// START EVERYTHING
// =========================
document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
const menuToggle = document.getElementById("menu-toggle");
    const mobileNav = document.getElementById("mobile-nav");

    menuToggle.addEventListener("click", () => {

        menuToggle.classList.toggle("active");
        mobileNav.classList.toggle("active");

});


    