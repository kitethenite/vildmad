// ändrar namn på h1
const urlParams = new URLSearchParams(window.location.search);
const tag = urlParams.get("tags");


document.querySelector(".title").textContent = tag;
