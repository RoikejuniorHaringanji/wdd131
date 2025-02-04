// Get the container where temples will be displayed
const templeContainer = document.getElementById("temple-container");

// Function to display temple cards
function displayTemples(temples) {
	// Clear previous content
	templeContainer.innerHTML = "";

	temples.forEach(temple => {
		// Create a card element
		const card = document.createElement("div");
		card.classList.add("temple-card");

		// Create an image element
		const img = document.createElement("img");
		img.src = temple.imageUrl;
		img.alt = temple.templeName;
		img.loading = "lazy"; // Enable lazy loading

		// Create a title
		const title = document.createElement("h3");
		title.textContent = temple.templeName;

		// Create a paragraph for location
		const location = document.createElement("p");
		location.textContent = `Location: ${temple.location}`;

		// Create a paragraph for dedication date
		const dedicated = document.createElement("p");
		dedicated.textContent = `Dedicated: ${temple.dedicated}`;
		
		const area = document.createElement("p");
		area.textContent = `Area: ${temple.area} sq ft`;
		

		// Append elements to the card
		card.appendChild(img);
		card.appendChild(title);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);

		// Append card to the container
		templeContainer.appendChild(card);
	});
}

// Define the temples array
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Bountiful Utah",
		location: "Bountiful, Utah, United States",
		dedicated: "1995, January, 8-14",
		area: 104000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bountiful-utah-temple/bountiful-utah-temple-40955-main.jpg"
	},
	{
		templeName: "Manila Philippines",
		location: "Manila, Philippines",
		dedicated: "1984, September, 25",
		area: 25000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/029-Manila-Philippines-Temple.jpg"
	},
	{
		templeName: "Salt Lake City Utah",
		location: "Salt Lake City, Utah, United States",
		dedicated: "1893, April, 6",
		area: 253015,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
	},
	{
		templeName: "San Diego California",
		location: "San Diego, California, United States",
		dedicated: "1993, April, 25",
		area: 72000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
	},
	{
		templeName: "San Salvador El Salvador",
		location: "San Salvador, El Salvador",
		dedicated: "2011, August, 21",
		area: 11200,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/135-San-Salvador-El-Salvador-Temple.jpg"
	},
	{
		templeName: "Sapporo Japan",
		location: "Sapporo, Japan",
		dedicated: "2016, August, 21",
		area: 55789,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sapporo-japan-temple/sapporo-japan-temple-3374-main.jpg"
	},

	{
		templeName: "Seattle Washington",
		location: "Seattle, Washington, United States",
		dedicated: "1980, November, 17",
		area: 11000,
		imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg"
	}
];

// Initially display all temples
displayTemples(temples);

// Get the hamburger button and the navigation menu
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

// Add click event listener to toggle the menu
if (hamburgerButton && navMenu) {
	hamburgerButton.addEventListener("click", () => {
		navMenu.classList.toggle("show");
	});
}

// Function to filter temples based on selected category
function filterTemples(filterType) {
	let filtered = [];

	switch (filterType) {
		case "old":
			filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
			break;
		case "new":
			filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
			break;
		case "large":
			filtered = temples.filter(t => t.area > 90000);
			break;
		case "small":
			filtered = temples.filter(t => t.area < 10000);
			break;
		default:
			filtered = temples; // Show all temples
	}

	displayTemples(filtered);
}

// Add event listeners to menu items for filtering
document.querySelectorAll("nav a").forEach(link => {
	link.addEventListener("click", (event) => {
		event.preventDefault(); // Prevent page reload
		filterTemples(event.target.textContent.toLowerCase()); // Convert text to lowercase for matching
	});
});

// Footer: Set current year & last modified date
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
