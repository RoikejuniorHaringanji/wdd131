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
function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1) + ' °C';
    } else {
        return 'N/A';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // static value in °C
    const windSpeed = 5; // static value in km/h
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = windChill;
});
// Get the hamburger button and the navigation menu
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add click event listener to toggle the menu
if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}