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

searchInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const searchTerm = searchInput.value.trim();
    handleSearch(searchTerm);
  }
});

async function searchMovies(title) {
  try {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    if (data.Response === "True") {
      setMovies(data.Search);
      setError("");
    } else {
      setMovies([]);
    }
  } catch (error) {
    setError("No result.");
  }
}

function setMovies(movies) {
  movieContainer.innerHTML = "";

  if (movies.length > 0) {
    movies.forEach((movie, index) => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "movie";

      const yearDiv = document.createElement("div");
      const yearParagraph = document.createElement("p");
      yearParagraph.textContent = movie.Year;
      yearDiv.appendChild(yearParagraph);
      movieDiv.appendChild(yearDiv);

      const imageDiv = document.createElement("div");
      const image = document.createElement("img");
      image.src =
        movie.Poster !== "N/A"
          ? movie.Poster
          : "https://via.placeholder.com/400";
      image.alt = movie.Title;
      imageDiv.appendChild(image);
      movieDiv.appendChild(imageDiv);

      const infoDiv = document.createElement("div");
      const typeSpan = document.createElement("span");
      typeSpan.textContent = movie.Type;
      const titleHeader = document.createElement("h3");
      titleHeader.textContent = movie.Title;
      infoDiv.appendChild(typeSpan);
      infoDiv.appendChild(titleHeader);
      movieDiv.appendChild(infoDiv);

      movieContainer.appendChild(movieDiv);
    });
  } else {
    const emptyDiv = document.createElement("div");
    emptyDiv.className = "empty";
    const h2 = document.createElement("h2");
    h2.textContent = "No movies Found";
    emptyDiv.appendChild(h2);
    movieContainer.appendChild(emptyDiv);
  }
}

function setError(errorMessage) {
  errorDiv.textContent = errorMessage;
}