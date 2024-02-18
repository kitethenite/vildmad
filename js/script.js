fetch("http://127.0.0.1:5500/plants.html")
  .then((res) => res.json())
  .then(ShowPlants);

function ShowPlants(plants) {
  plants.forEach(ShowPlants);
}

function ShowPlants(plants) {
  console.log(plants);

  const template = document.querySelector("#smallPlants").content;
  const copy = template.cloneNode(true);

  document.querySelector("main").appendChild(copy);
}
