// Update the current year dynamically in the footer
const currentYearElement = document.getElementById("currentyear");
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Update the "last modified" date dynamically in the footer
const lastModifiedElement = document.getElementById("last-modified-date");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}

// Get the hamburger button and the navigation menu
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add click event listener to toggle the menu
if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}
