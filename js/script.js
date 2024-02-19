//forage side //
document.addEventListener("DOMContentLoaded", function () {
  const city = document.getElementById("city");
  const suburban = document.getElementById("suburban");
  const park = document.getElementById("park");
  const images = document.querySelectorAll(".image-list img");
  const title = document.getElementById("title");
  const img = document.querySelector("img");
  const description = document.getElementById("destination");

  city.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("location", "city");
    window.location.href = "biotop.html";
  });

  suburban.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("location", "suburban");
    window.location.href = "biotop.html";
  });

  park.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("location", "park");
    window.location.href = "biotop.html";
  });

  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".image-list img");

    images.forEach((image) => {
      image.addEventListener("click", function (event) {
        event.preventDefault();
        const selectedText = this.getAttribute("data-text");
        const selectedImageSrc = this.getAttribute("src");
        localStorage.setItem("selectedText", selectedText);
        localStorage.setItem("selectedImageSrc", selectedImageSrc);
        window.location.href = "biotop.html";
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    const selectedText = localStorage.getItem("selectedText");
    const selectedImageSrc = localStorage.getItem("selectedImageSrc");
    if (selectedText && selectedImageSrc) {
      document.getElementById("title").textContent = selectedText;
      document.getElementById("img").src = selectedImageSrc;
      document.getElementById("destination").textContent =
        getDescription(selectedText); // Funktion til at få beskrivelse baseret på valgt tekst
    }
  });

  function getDescription(text) {
    // Returner en beskrivelse baseret på den valgte tekst
    if (text === "City") {
      return "Description of city";
    } else if (text === "Suburban") {
      return "Description of suburban";
    } else if (text === "Park") {
      return "Description of park";
    } else {
      return "Default description";
    }
  }
});
//biotop//
// Hændelseslytter for forår
spring.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("season", "spring");
  window.location.href = "plants.html";
});

// Hændelseslytter for sommer
summer.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("season", "summer");
  window.location.href = "plants.html";
});

// Hændelseslytter for efterår
fall.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("season", "fall");
  window.location.href = "plants.html";
});

// Hændelseslytter for vinter
winter.addEventListener("click", function (event) {
  event.preventDefault();
  localStorage.setItem("season", "winter");
  window.location.href = "plants.html";
});

fetch(
  "https://pitrqqwekcolglxqqngo.supabase.co/rest/v1/vild_mad?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdHJxcXdla2NvbGdseHFxbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2ODA5NjksImV4cCI6MjAyMzI1Njk2OX0.84FjJ7ILcIkugWA0eYWDBVy-ChVHdqLbYHSfHxmv1eo"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data:", error));

function showPlants(plants) {
  plants.forEach((plant) => {
    const template = document.querySelector("#smallplantsTemplate").content;
    const copy = template.cloneNode(true);

    copy.querySelector("img").src = plant.image;
    copy.querySelector("h3").textContent = plant.name;

    document.querySelector("main").appendChild(copy);
  });
}
