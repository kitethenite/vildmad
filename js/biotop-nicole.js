// ändrar namn på h1
const urlParams = new URLSearchParams(window.location.search);
const tag = urlParams.get("tags");

document.querySelector(".title").textContent = tag;

// bestämmer vilken biotop-text som visas

if (tag === "city") {
  document.querySelector(".biotope-city").classList.remove("hidden");
} else if (tag === "suburban") {
  document.querySelector(".biotope-suburban").classList.remove("hidden");
} else if (tag === "park") {
  document.querySelector(".biotope-park").classList.remove("hidden");
}

// merger plants.html till biotop.html

// hämtar data från API
const url = "https://pitrqqwekcolglxqqngo.supabase.co/rest/v1/vild_mad";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdHJxcXdla2NvbGdseHFxbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2ODA5NjksImV4cCI6MjAyMzI1Njk2OX0.84FjJ7ILcIkugWA0eYWDBVy-ChVHdqLbYHSfHxmv1eo";

fetch(url, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showPlants(data));

// dags att loopa och kalla showPlants
function showPlants(plants) {
  const filteredPlants = plants.filter((plant) => plant.biotop.includes(tag));

  // Display filtered plants
  filteredPlants.forEach(showPlant);
}

function showPlant(plant) {
  console.log(plant);

  // fånga upp template
  const template = document.querySelector("template").content;

  //viktigt att skriva const clone innan cloneNode!
  const clone = template.cloneNode(true);

  const plantImageUrl = plant.image;

  clone.querySelector("img").src = plantImageUrl;
  clone.querySelector("h2").textContent = plant.name;
  clone.querySelector(".latin-name").textContent = plant.latin_name;

  // här ska man trycka på planta för att komma in till plant-info
  clone
    .querySelector(".plant-link")
    .setAttribute("href", `plant_info.html?id=${plant.id}`);

  document.querySelector("main").appendChild(clone);
}
