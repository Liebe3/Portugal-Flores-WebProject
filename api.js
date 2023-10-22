const API_KEY = "aceddfe5";
const API_URL = `http://www.omdbapi.com?apikey=${API_KEY}`;

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const errorDiv = document.getElementById("error");
const movieContainer = document.getElementById("movieContainer");

searchButton.addEventListener("click", handleSearch);

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const searchTerm = searchInput.value.trim();
    handleSearch(searchTerm);
  }
});

function handleSearch(searchTerm) {
  if (searchTerm) {
    searchMovies(searchTerm);
  } else {
    setMovies([]);
    setError("Please fill out this field");
  }
}
