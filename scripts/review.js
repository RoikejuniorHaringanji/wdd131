
function showConfirmation() {
    const formContainer = document.getElementById('reviewForm');
    const reviewCount = localStorage.getItem('reviewCount');

    formContainer.innerHTML = `
        <div class="confirmation">
            <div class="confirmation-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M20 6L9 17l-5-5"></path>
                </svg>
            </div>
            <h2>Thank You!</h2>
            <p>Your review has been submitted successfully.</p>
            <p class="review-count">Total reviews submitted: ${reviewCount}</p>
            <button onclick="location.reload()" class="submit-btn">Submit Another Review</button>
        </div>
    `;
}
document.addEventListener('DOMContentLoaded', function() {
    const currentCount = parseInt(localStorage.getItem('reviewCount') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('reviewCount', newCount);
    
    document.getElementById('reviewCount').textContent = `Total reviews submitted: ${newCount}`;
});
// Display current year dynamically
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update the "last modified" date dynamically in the footer
const lastModifiedElement = document.getElementById("last-modified-date");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}