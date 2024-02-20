// ändrar namn på h1
const urlParams = new URLSearchParams(window.location.search);
const tag = urlParams.get("tags");

document.querySelector(".title").textContent = tag;

// bestämmer vilken biotop-text som visas

if (tag === 'city') {
    document.querySelector('.biotope-city').classList.remove("hidden");
} else if (tag === 'suburban') {
    document.querySelector('.biotope-suburban').classList.remove("hidden");
} else if (tag === 'park') {
    document.querySelector('.biotope-park').classList.remove("hidden");
}
