//biotop //
document.addEventListener("DOMContentLoaded", function () {
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
    .then((data) => {});
});

function showPlants(Plants) {
  Plants.forEach(plants);
}

function showData(data) {
  // Hent reference til din template
  const template = document.querySelector("#smallplantsTemplate");

  // Klone template-elementet
  const copy = smallplantsTemplate.content.cloneNode(true);

  // Find den overordnede container, hvor du vil indsætte kopien
  const parent = document.querySelector(".grid_plants");

  // Indsæt kopien i den overordnede container
  parent.appendChild(copy);
}
