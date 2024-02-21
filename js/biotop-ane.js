const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

const url = `https://pitrqqwekcolglxqqngo.supabase.co/rest/v1/vild_mad?id=eq.${id}`;

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdHJxcXdla2NvbGdseHFxbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2ODA5NjksImV4cCI6MjAyMzI1Njk2OX0.84FjJ7ILcIkugWA0eYWDBVy-ChVHdqLbYHSfHxmv1eo";

fetch(url, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showData(data));

function showData(data) {
  console.log(data);

  function showPlants(plants) {
    plants.forEach(showPlant);
  }

  function showPlant(plant) {
    console.log(plant);

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
// Anta at du har hentet data fra API-en med en månedsattributt
let apiData = [
    { month: 2, title: "Plant 1", latinName: "Latin name 1" },
    { month: 3, title: "Plant 2", latinName: "Latin name 2" },
    { month: 1, title: "Plant 3", latinName: "Latin name 3" },
    // ... flere elementer
  ];
  
  // Velg de riktige seksjonene
  const inSeasonSection = document.querySelector('.in-season');
  const outOfSeasonSection = document.querySelector('.out-of-season');
  
  // Loop gjennom dataene og legg til planteelementer i de riktige seksjonene
  apiData.forEach(element => {
    const template = document.querySelector('.plants-template');
    const clonedTemplate = document.importNode(template.content, true);
    clonedTemplate.querySelector('h2').textContent = element.title;
    clonedTemplate.querySelector('.latin-name').textContent = element.latinName;
  
    const plantLink = clonedTemplate.querySelector('.plant-link');
    plantLink.href = 'plant_info.html';  // Sett URL-en basert på plantens ID eller annen identifikator
  
    const img = clonedTemplate.querySelector('img');
    img.src = 'plant.image';  // Sett bildets kilde basert på plantens bilde-URL
  
    if (element.month === 2) {
      inSeasonSection.appendChild(clonedTemplate);
    } else {
      outOfSeasonSection.appendChild(clonedTemplate);
    }
  });
  
}
