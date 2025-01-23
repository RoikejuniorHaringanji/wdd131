// Ensure this script is either in a separate .js file linked with 'defer' or within a <script> tag at the end of the body.
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("last-modified-date").textContent = document.lastModified;
});
