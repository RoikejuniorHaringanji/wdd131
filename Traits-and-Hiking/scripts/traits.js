document.addEventListener("DOMContentLoaded", function () {
    const difficultyFilter = document.getElementById("difficulty");
    const distanceFilter = document.getElementById("distance");
    const trailCards = document.querySelectorAll(".trail-card");

    // Load saved filters from LocalStorage
    difficultyFilter.value = localStorage.getItem("difficulty") || "all";
    distanceFilter.value = localStorage.getItem("distance") || "all";

    function filterTrails() {
        const difficulty = difficultyFilter.value;
        const distance = distanceFilter.value;

        localStorage.setItem("difficulty", difficulty);
        localStorage.setItem("distance", distance);

        trailCards.forEach(card => {
            const cardDifficulty = card.getAttribute("data-difficulty");
            const cardDistance = card.getAttribute("data-distance");

            const difficultyMatch = difficulty === "all" || cardDifficulty === difficulty;
            const distanceMatch = distance === "all" || cardDistance === distance;

            card.style.display = (difficultyMatch && distanceMatch) ? "block" : "none";
        });
    }

    difficultyFilter.addEventListener("change", filterTrails);
    distanceFilter.addEventListener("change", filterTrails);
    filterTrails(); // Apply filters on page load

    // Expand/Collapse Trail Details
    document.querySelectorAll(".toggle-details").forEach(button => {
        button.addEventListener("click", function () {
            const details = this.nextElementSibling;
            details.style.display = details.style.display === "block" ? "none" : "block";
            this.textContent = details.style.display === "block" ? "Hide Details" : "View Details";
        });
    });
});
// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}