// Product array
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// Populate Product Name Dropdown
document.addEventListener("DOMContentLoaded", function() {
    const productSelect = document.getElementById("product");
    
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id; // ✅ Correctly using ID for value
        option.textContent = product.name; // ✅ Displaying product name
        productSelect.appendChild(option);
    });
    document.addEventListener("DOMContentLoaded", function () {
        const featuresContainer = document.getElementById("featuresContainer");
    
        if (!featuresContainer) return; // Prevents error if div is missing
    
        const features = [
            "Easy to use", "Durable", "Good value", "High quality", "Innovative features", "Great design"
        ];
    
        features.forEach(feature => {
            const div = document.createElement("div");
            div.className = "feature-item";
    
            const input = document.createElement("input");
            input.type = "checkbox";
            input.id = feature.toLowerCase().replace(/\s+/g, '-'); // e.g., "easy-to-use"
            input.name = "features";
            input.value = feature;
    
            const label = document.createElement("label");
            label.htmlFor = input.id;
            label.textContent = feature;
    
            div.appendChild(input);
            div.appendChild(label);
            featuresContainer.appendChild(div);
        });
    });
    

      // Form submission
      const form = document.getElementById('productReviewForm');
      form.addEventListener('submit', function(e) {
          if (!form.checkValidity()) {
              e.preventDefault();
              return;
          }
          
          // Increment review counter
          const currentCount = parseInt(localStorage.getItem('reviewCount') || '0');
          localStorage.setItem('reviewCount', currentCount + 1);
      });
  });
  document.addEventListener('DOMContentLoaded', function() {
    const currentCount = parseInt(localStorage.getItem('reviewCount') || '0');
    const newCount = currentCount + 1;
    localStorage.setItem('reviewCount', newCount);
    
    document.getElementById('reviewCount').textContent = `Total reviews submitted: ${newCount}`;
});
document.addEventListener("DOMContentLoaded", function () {
    const installDateInput = document.getElementById("installDate");

    if (installDateInput) {
        const today = new Date();
        const formattedDate = today.toISOString().split("T")[0]; // YYYY-MM-DD format
        installDateInput.value = formattedDate; // Set default value to today
    }
});

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
