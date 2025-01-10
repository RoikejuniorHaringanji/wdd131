// Update the "Last Modification" date dynamically
function updateLastModified() {
    const footerDate = document.querySelector('footer p:nth-child(2)');
    const lastModified = new Date(document.lastModified);
    const formattedDate = lastModified.toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
    footerDate.textContent = `Last Modification: ${formattedDate}`;
}

// Add a greeting based on the time of day
function addGreeting() {
    const header = document.querySelector('header');
    const greeting = document.createElement('p');
    const currentHour = new Date().getHours();
    let message;

    if (currentHour < 12) {
        message = 'Good Morning!';
    } else if (currentHour < 18) {
        message = 'Good Afternoon!';
    } else {
        message = 'Good Evening!';
    }

    greeting.textContent = message;
    greeting.style.fontSize = '1.5rem';
    greeting.style.color = '#ffffff';
    header.appendChild(greeting);
}

// Smooth scrolling for internal links (if any are added in the future)
function smoothScroll() {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize functions
document.addEventListener('DOMContentLoaded', () => {
    updateLastModified();
    addGreeting();
    smoothScroll();
});