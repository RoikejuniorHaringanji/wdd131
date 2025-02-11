// Product data array
const products = [
    { id: 1, name: "Smart Home Hub" },
    { id: 2, name: "Wireless Security Camera" },
    { id: 3, name: "Robot Vacuum Cleaner" },
    { id: 4, name: "Smart Thermostat" },
    { id: 5, name: "Video Doorbell" }
];

// Populate product select options
document.addEventListener('DOMContentLoaded', () => {
    const productSelect = document.getElementById('productName');
    
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set min date to 6 months ago and max date to today
    const installDateInput = document.getElementById('installDate');
    const today = new Date();
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(today.getMonth() - 6);
    
    installDateInput.max = today.toISOString().split('T')[0];
    installDateInput.min = sixMonthsAgo.toISOString().split('T')[0];

    // Form validation
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (e) => {
        const rating = document.querySelector('input[name="rating"]:checked');
        const productName = document.getElementById('productName').value;
        
        if (!rating || !productName) {
            e.preventDefault();
            alert('Please fill in all required fields');
        }
    });
});