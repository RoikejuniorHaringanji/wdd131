const testimonials = [
    { img: "images/Caroline.webp", text: "This website helped me find the perfect hiking spot! The tips were super useful, and the gallery inspired my next adventure!", name: "Samatha Gomez" },
    { img: "images/Ian.webp", text: "This site has completely transformed the way I plan my hikes! The interactive map makes navigation effortless.", name: "Ian Blessing" },
    { img: "images/mathew.webp", text: "A must-have resource for any adventurer! The trail descriptions are spot-on, and the recommendations are fantastic.", name: "Mathew Johns" },
    { img: "images/Ruth.webp", text: "I discovered so many hidden gems thanks to this site. The details and insights provided are truly invaluable!", name: "Ruth Joans" }
];

const container = document.getElementById("testimonial-container");

testimonials.forEach(({ img, text, name }) => {
    const card = document.createElement("div");
    card.classList.add("testimonial-card");
    card.innerHTML = `
        <img src="${img}" alt="${name}" class="profile-img">
        <blockquote>"${text}" – <em>${name}</em></blockquote>
    `;
    container.appendChild(card);
});


// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
