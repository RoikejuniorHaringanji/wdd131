document.addEventListener('DOMContentLoaded', () => {
    // Increment review counter
    let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount);
    
    // Update counter display
    document.getElementById('reviewCount').textContent = reviewCount;

    // Display review details from URL parameters
    const params = new URLSearchParams(window.location.search);
    const reviewDetails = document.getElementById('reviewDetails');
    
    const details = {
        'Product': params.get('productName'),
        'Rating': params.get('rating') + ' stars',
        'Installation Date': params.get('installDate'),
        'Features': params.getAll('features').join(', ') || 'None selected',
        'Review': params.get('review') || 'No written review provided',
        'Reviewer': params.get('userName') || 'Anonymous'
    };

    // Create and append review details
    Object.entries(details).forEach(([key, value]) => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        reviewDetails.appendChild(p);
    });
});