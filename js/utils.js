// animation before page loads
const loader = document.querySelector(".loader-container");

window.addEventListener("load", () => {
    loader.style.display = "none";
});