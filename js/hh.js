const urlParams = new URLSearchParams(window.location.search);
const tag = urlParams.get("tag");

//biotop //

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
  .then((data) => {
    // Update the title element with the tag value
    document.querySelector(".title").textContent = tag;
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

//function showPlants(plants) {
//const parent = document.querySelector(".grid_plants");

//plants.forEach((plant) => {
//  const template = document.querySelector("#smallplantsTemplate");
//const copy = template.content.cloneNode(true);

//const plantName = copy.querySelector(".plants-name");
// const plantImage = copy.querySelector(".plants-image");

// plantName.textContent = plant.name;
//plantImage.src = plant.image;

//  parent.appendChild(copy);
// });
//}
