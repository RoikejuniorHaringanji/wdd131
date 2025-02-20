const images = [
    { src: 'https://images.pexels.com/photos/30804925/pexels-photo-30804925/free-photo-of-spectacular-snow-covered-mountain-peaks-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Majestic Peaks', category: 'mountain' },
    { src: 'https://images.pexels.com/photos/1684885/pexels-photo-1684885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Whispering Waterfalls', category: 'waterfall' },
    { src: 'https://images.pexels.com/photos/30707987/pexels-photo-30707987/free-photo-of-golden-autumn-path-in-cajnice-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Golden Trail', category: 'forest' },
    { src: 'https://images.pexels.com/photos/6501776/pexels-photo-6501776.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Crimson Horizon', category: 'wildlife' },
    { src: 'https://images.pexels.com/photos/14282937/pexels-photo-14282937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Echoing Valleys', category: 'mountain' },
    { src: 'https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Morning Mist', category: 'waterfall' },
    { src: 'https://images.pexels.com/photos/11481378/pexels-photo-11481378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Rocky Ascent', category: 'forest' },
    { src: 'https://images.pexels.com/photos/1743400/pexels-photo-1743400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Starlit Summit', category: 'wildlife' },
    { src: 'https://images.pexels.com/photos/14177834/pexels-photo-14177834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Frosty Ridge', category: 'mountain' },
    { src: 'https://images.pexels.com/photos/30611832/pexels-photo-30611832/free-photo-of-common-blue-butterfly-on-heather-blossom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Wildflower Meadows', category: 'waterfall' },
    { src: 'https://images.pexels.com/photos/1174132/pexels-photo-1174132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Sunset Overlook', category: 'forest' },
    { src: 'https://images.pexels.com/photos/17895022/pexels-photo-17895022/free-photo-of-watefall-cascades-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Hidden Cascades', category: 'wildlife' },
    { src: 'https://images.pexels.com/photos/7818376/pexels-photo-7818376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Mountain Pathways', category: 'mountain' },
    { src: 'https://images.pexels.com/photos/5587798/pexels-photo-5587798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Blossom Ridge', category: 'waterfall' },
    { src: 'https://images.pexels.com/photos/2849231/pexels-photo-2849231.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Rocky Peaks', category: 'forest' },
    { src: 'https://images.pexels.com/photos/21330203/pexels-photo-21330203/free-photo-of-woman-walking-in-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', alt: 'Dense Forest', category: 'forest' },
];

const galleryGrid = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const closeLightbox = document.getElementById('close-lightbox');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentImageIndex = 0;

// Ensure galleryGrid exists before appending
if (galleryGrid) {
    loadGallery();
}

// Function to load gallery images dynamically
function loadGallery() {
    images.forEach((image, index) => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('gallery-item');

        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        imgElement.dataset.index = index;
        imgElement.classList.add('gallery-image');

        const caption = document.createElement('p');
        caption.textContent = image.alt;
        caption.classList.add('image-caption');

        imgElement.addEventListener('click', () => openLightbox(index));

        imgContainer.appendChild(imgElement);
        imgContainer.appendChild(caption);
        galleryGrid.appendChild(imgContainer);
    });
}


// Open lightbox function
function openLightbox(index) {
    currentImageIndex = index;
    const image = images[index];
    lightboxImg.src = image.src;
    lightboxCaption.textContent = image.alt;
    lightbox.style.display = 'flex';
}

// Close the lightbox
if (closeLightbox) {
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });
}

// Navigate left and right in lightbox
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        openLightbox(currentImageIndex);
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        openLightbox(currentImageIndex);
    });
}
// Hamburger menu logic
const hamburgerButton = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

if (hamburgerButton && navMenu) {
    hamburgerButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
}