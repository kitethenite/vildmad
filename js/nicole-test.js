// /rest/v1/vild_mad?select=seasons
// ett exempel på hur man kan sortera vilken data som hämtas

// 1. Only some fields
// • .../rest/v1/tabelnavn?select=name,price
// 2. WHERE/FILTER
// • .../rest/v1/tabelnavn?price=lt.500 (less than) 3. ORDER BY / SORT
// • .../rest/v1/ tabelnavn?order=price.desc 4. A single product
// • .../rest/v1/ tabelnavn?id=eq.1

const url = "https://pitrqqwekcolglxqqngo.supabase.co/rest/v1/vild_mad";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpdHJxcXdla2NvbGdseHFxbmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc2ODA5NjksImV4cCI6MjAyMzI1Njk2OX0.84FjJ7ILcIkugWA0eYWDBVy-ChVHdqLbYHSfHxmv1eo";

//GET /people?select=fullName:full_name,birthDate:birth_date HTTP/1.1

fetch(url + "?id=eq.3&select=seasons,name,january", {
  method: "GET",
  headers: {
    apikey: key,
  },
})
  .then((response) => response.json())
  .then((data) => showData(data));

//denna visar all json som ett array
// function showDatas(datas) {
//   console.log(datas);

//   //fångar upp och loopar showData
//   datas.forEach(showData);
// }

//denna visar alla object från json, vart för sig.
function showData(data) {
  console.table(data, "connected to showData now");

  document.querySelector(".biotopename").textContent = data.name + " här";

  document.querySelector("img").src = data.image; 
  document.querySelector(".seasons").textContent = data.june;
}

/////////
