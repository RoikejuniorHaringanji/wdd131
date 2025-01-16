document.addEventListener('DOMContentLoaded', () => {
    // Preload critical images for small screens
    const preloadImages = [
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    ];

    preloadImages.forEach(url => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = url;
        document.head.appendChild(link);
    });

    // Hamburger menu toggle
    const menuToggle = document.getElementById('hamburger-menu');
    const nav = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('visible');
        menuToggle.textContent = nav.classList.contains('visible') ? '✕' : '☰';
    });

    // Update current year and last modified date
    document.getElementById('current-year').textContent = new Date().getFullYear();
    document.getElementById('last-modified').textContent = `Last Modified: ${document.lastModified}`;

    // Temple data
    const temples = [/* Temple data here */];

    // Render temples dynamically
    const renderTemples = (temples) => {
        const gallery = document.getElementById("temple-gallery");
        gallery.innerHTML = ""; // Clear current content

        const isSmallScreen = window.innerWidth <= 768; // Detect small screens

        temples.forEach((temple, index) => {
            const card = document.createElement("div");
            card.classList.add("temple-card"); // Updated class name
            card.innerHTML = `
                <img 
                    src="${temple.imageUrl}" 
                    alt="${temple.templeName}" 
                    loading="${isSmallScreen && index === 0 ? 'eager' : 'lazy'}" 
                    width="400" 
                    height="250">
                <div class="temple-caption">
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Size:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </div>
            `;
            gallery.appendChild(card);
        });
    };

    // Filter temples based on criteria
    const filterTemples = (criteria) => {
        let filteredTemples = temples;
        // Filtering logic here
        renderTemples(filteredTemples);
    };

    // Event listeners for navigation links
    document.getElementById("nav-home").addEventListener("click", () => renderTemples(temples));
    document.getElementById("nav-old").addEventListener("click", () => filterTemples("old"));
    document.getElementById("nav-new").addEventListener("click", () => filterTemples("new"));
    document.getElementById("nav-large").addEventListener("click", () => filterTemples("large"));
    document.getElementById("nav-small").addEventListener("click", () => filterTemples("small"));

    // Initial render of all temples
    renderTemples(temples);
});