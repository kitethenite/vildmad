//forage side //
const city = document.getElementById("city");
const suburban = document.getElementById("suburban");
const park = document.getElementById("park");

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
  const title = document.getElementById("title");
  const description = document.getElementById("destination");

  const location = localStorage.getItem("location");

  if (location === "city") {
    title.textContent = "City";
    img.src = "city.jpg";
    description.textContent = "Description of city";
  } else if (location === "suburban") {
    title.textContent = "Suburban";
    img.src = "suburban.jpg";
    description.textContent = "Description of suburban";
  } else if (location === "park") {
    title.textContent = "Park";
    img.src = "park.jpg";
    description.textContent = "Description of park";
  }
});

// biotop //
document.addEventListener("DOMContentLoaded", function () {
  const spring = document.getElementById("spring");
  const summer = document.getElementById("summer");
  const fall = document.getElementById("fall");
  const winter = document.getElementById("winter");

  // Hændelseslytter for forår
  spring.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("season", "spring");
    changeSeasonText("Spring");
    window.location.href = "plants.html";
  });

  // Hændelseslytter for sommer
  summer.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("season", "summer");
    changeSeasonText("Summer");
    window.location.href = "plants.html";
  });

  // Hændelseslytter for efterår
  fall.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("season", "fall");
    changeSeasonText("Fall");
    window.location.href = "plants.html";
  });

  // Hændelseslytter for vinter
  winter.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("season", "winter");
    changeSeasonText("Winter");
    window.location.href = "plants.html";
  });

  // Funktion til at ændre tekst i h1 baseret på valgt sæson
  function changeSeasonText(season) {
    const seasonHeading = document.querySelector("#smallplantsTemplate h1");
    seasonHeading.textContent = season;
  }
});
