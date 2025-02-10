// Product array for the select options
const products = [
    { id: 1, name: "Premium Coffee Maker" },
    { id: 2, name: "Smart Thermostat" },
    { id: 3, name: "Robot Vacuum Cleaner" },
    { id: 4, name: "Air Purifier Pro" },
    { id: 5, name: "Smart Home Security System" }
];

// Features array for checkboxes
const features = [
    "Easy to use",
    "Durable",
    "Good value",
    "High quality",
    "Innovative",
    "Energy efficient"
];

// Populate product select options
function populateProducts() {
    const productSelect = document.getElementById('product');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });
}

// Populate feature checkboxes
function populateFeatures() {
    const featuresContainer = document.getElementById('featuresContainer');
    features.forEach(feature => {
        const div = document.createElement('div');
        div.className = 'feature-item';
        
        const input = document.createElement('input');
        input.type = 'checkbox';
        input.id = feature.toLowerCase().replace(/\s+/g, '-');
        input.name = 'features';
        input.value = feature;

        const label = document.createElement('label');
        label.htmlFor = input.id;
        label.textContent = feature;

        div.appendChild(input);
        div.appendChild(label);
        featuresContainer.appendChild(div);
    });
}

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
    populateProducts();
    populateFeatures();

    // Form submission handling
    const form = document.getElementById('reviewForm');
    form.addEventListener('submit', (e) => {
        // Form is submitted to review.html using GET method as specified
        // Counter increment is handled in counter.js on the review page
    });
});