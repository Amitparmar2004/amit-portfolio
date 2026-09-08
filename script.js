// =========================================
// MOBILE MENU
// =========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(7, 20, 31, 0.97)";

    } else {

        navbar.style.background =
            "rgba(7, 20, 31, 0.85)";

    }

});


// =========================================
// ROLE TYPING ANIMATION
// =========================================

const roles = [
    "Python Developer",
    "Full Stack Developer",
    
];

const roleText = document.getElementById("roleText");

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeRole() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        roleText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;

            setTimeout(typeRole, 1800);
            return;
        }

    } else {

        roleText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

            setTimeout(typeRole, 400);
            return;
        }
    }

    setTimeout(
        typeRole,
        isDeleting ? 55 : 100
    );
}

typeRole();



