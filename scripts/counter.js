document.addEventListener('DOMContentLoaded', () => {
    // Get the current count from localStorage
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    
    // Increment the count
    reviewCount++;
    
    // Save the new count
    localStorage.setItem('reviewCount', reviewCount.toString());
    
    // Update the display
    const countElement = document.getElementById('reviewCount');
    if (countElement) {
        countElement.textContent = reviewCount;
    }
});