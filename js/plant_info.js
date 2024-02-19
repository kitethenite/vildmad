// This works as planned now

const url =
  "https://pitrqqwekcolglxqqngo.supabase.co/rest/v1/vild_mad?id=eq.12";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdHJxcXdla2NvbGdseHFxbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2ODA5NjksImV4cCI6MjAyMzI1Njk2OX0.84FjJ7ILcIkugWA0eYWDBVy-ChVHdqLbYHSfHxmv1eo";

//GET /people?select=fullName:full_name,birthDate:birth_date HTTP/1.1

fetch(url, {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showData(data));

//denna visar alla object från json, vart för sig.
// function showData(data) {
//     console.log(data, "connected to showData now");
//   console.table(data);

// //   <h1 class="plant-name">plant info</h1>
// //   <p class="description"></p>

// document.querySelector(".plant-name").textContent = data.name;
//   document.querySelector(".description").textContent = data.description;
// }

function showData(data) {
  console.log(data); // Check if data is accessible within this function
  console.table(data, "connected to showData now");

  // Access the first object in the array
  const plantInfo = data[0];

  // Access the name and description properties from the plantInfo object
  const plantName = plantInfo.name;
  const plantDescription = plantInfo.description;
  const plantImageUrl = plantInfo.image;

  // Update the DOM elements with the retrieved data
  document.querySelector(".plant-name").textContent = plantName;
  document.querySelector(".description").textContent = plantDescription;

  document.querySelector(".plant-image").src = plantImageUrl;

  // Months array
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

  // Iterate over the seasons object to find the months when the plant is in season
  const inSeasonMonths = [];
  Object.keys(plantInfo.seasons).forEach((monthIndex) => {
    if (plantInfo.seasons[monthIndex]) {
      inSeasonMonths.push(months[parseInt(monthIndex)]);
    }
  });

  // Construct a string indicating the months when the plant is in season
  const seasonString =
    inSeasonMonths.length > 0
      ? `This plant is in season in ${inSeasonMonths.join(", ")}.`
      : "This plant is not in season.";

  // Update the DOM with the season information
  document.querySelector(".season-info").textContent = seasonString;
}

/////////
