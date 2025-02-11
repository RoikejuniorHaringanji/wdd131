// Product data array
const products = [
    { id: 1, name: "Smart Home Hub" },
    { id: 2, name: "Wireless Security Camera" },
    { id: 3, name: "Robot Vacuum Cleaner" },
    { id: 4, name: "Smart Thermostat" },
    { id: 5, name: "Video Doorbell" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Check operating hours first (6 AM to 10 PM)
    const currentHour = new Date().getHours();
    const isOperatingHours = currentHour >= 6 && currentHour < 22;
    
    if (!isOperatingHours) {
        alert('Review system is only available between 6 AM and 10 PM');
        document.getElementById('reviewForm').style.display = 'none';
        return;
    }

    // Populate product select options
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set date restrictions
    const installDateInput = document.getElementById('installDate');
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    
    installDateInput.max = today.toISOString().split('T')[0];
    installDateInput.min = sixMonthsAgo.toISOString().split('T')[0];

    // Display total reviews submitted
    const reviewData = JSON.parse(localStorage.getItem('reviewData') || '{"count": 0, "reviews": []}');
    const totalReviews = document.createElement('p');
    totalReviews.className = 'text-sm text-gray-600 mt-2';
    totalReviews.textContent = `Total reviews submitted: ${reviewData.count}`;
    document.querySelector('.container').appendChild(totalReviews);

    // Form validation with enhanced checks
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const rating = document.querySelector('input[name="rating"]:checked');
        const productName = document.getElementById('productName').value;
        const review = document.getElementById('review').value;
        
        // Enhanced validation
        if (!rating || !productName) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Check review length if provided
        if (review && (review.length < 10 || review.length > 500)) {
            alert('Review must be between 10 and 500 characters');
            return;
        }
        
        // If all validation passes, submit the form
        form.submit();
    });
});