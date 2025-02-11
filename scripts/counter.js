// Time management and review tracking
document.addEventListener('DOMContentLoaded', () => {
    // Get current time in user's timezone
    const now = new Date();
    const currentHour = now.getHours();
    
    // Check if system is in operating hours (6 AM to 10 PM)
    const isOperatingHours = currentHour >= 6 && currentHour < 22;
    
    if (!isOperatingHours) {
        alert('System is only available between 6 AM and 10 PM');
        window.location.href = 'form.html';
        return;
    }

    // Increment and store review counter with timestamp
    const reviewData = JSON.parse(localStorage.getItem('reviewData') || '{"count": 0, "reviews": []}');
    reviewData.count++;
    
    // Get review details from URL
    const params = new URLSearchParams(window.location.search);
    const newReview = {
        timestamp: now.toISOString(),
        product: params.get('productName'),
        rating: params.get('rating'),
        installDate: params.get('installDate'),
        features: params.getAll('features'),
        review: params.get('review'),
        reviewer: params.get('userName') || 'Anonymous'
    };
    
    // Add new review to storage
    reviewData.reviews.push(newReview);
    localStorage.setItem('reviewData', JSON.stringify(reviewData));
    
    // Update counter display
    document.getElementById('reviewCount').textContent = reviewData.count;
    
    // Display review details
    const reviewDetails = document.getElementById('reviewDetails');
    const details = {
        'Product': newReview.product,
        'Rating': `${newReview.rating} stars`,
        'Installation Date': newReview.installDate,
        'Features': newReview.features.join(', ') || 'None selected',
        'Review': newReview.review || 'No written review provided',
        'Reviewer': newReview.reviewer,
        'Submitted': now.toLocaleString()
    };
    
    // Create and append review details
    Object.entries(details).forEach(([key, value]) => {
        const p = document.createElement('p');
        p.innerHTML = `<strong>${key}:</strong> ${value}`;
        reviewDetails.appendChild(p);
    });
});