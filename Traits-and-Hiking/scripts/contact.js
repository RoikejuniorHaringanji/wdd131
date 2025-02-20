// Smooth Scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation
document.getElementById("booking-form").addEventListener("submit", function (event) {
    let fullName = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let trip = document.getElementById("trip").value;
    
    if (fullName.length < 3) {
        alert("Name must be at least 3 characters long.");
        event.preventDefault();
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else if (!/^\d{10,15}$/.test(phone)) {
        alert("Enter a valid phone number (10-15 digits).");
        event.preventDefault();
    } else if (trip === "Choose a Trip") {
        alert("Please select an adventure before submitting.");
        event.preventDefault();
    }
});

// Dynamic Hero Animation (Fade-in effect)
document.addEventListener("DOMContentLoaded", function () {
    let heroText = document.querySelector(".hero-content");
    heroText.style.opacity = "0";
    setTimeout(() => {
        heroText.style.transition = "opacity 2s ease-in-out";
        heroText.style.opacity = "1";
    }, 500);
});

// Floating WhatsApp Button Animation
document.addEventListener("DOMContentLoaded", function () {
    let whatsappBtn = document.querySelector(".whatsapp-button");
    setInterval(() => {
        whatsappBtn.style.transform = "scale(1.1)";
        setTimeout(() => {
            whatsappBtn.style.transform = "scale(1)";
        }, 500);
    }, 3000);
});
// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}

