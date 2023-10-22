const createMovieCard = (movie) => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie';
  
    const yearDiv = document.createElement('div');
    const yearParagraph = document.createElement('p');
    yearParagraph.textContent = movie.Year;
    yearDiv.appendChild(yearParagraph);
    movieCard.appendChild(yearDiv);
  
    const imageDiv = document.createElement('div');
    const image = document.createElement('img');
    image.src = movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400';
    image.alt = movie.Title;
    imageDiv.appendChild(image);
    movieCard.appendChild(imageDiv);
  
    const infoDiv = document.createElement('div');
    const typeSpan = document.createElement('span');
    typeSpan.textContent = movie.Type;
    const titleHeader = document.createElement('h3');
    titleHeader.textContent = movie.Title;
    infoDiv.appendChild(typeSpan);
    infoDiv.appendChild(titleHeader);
    movieCard.appendChild(infoDiv);
  
    return movieCard;

  };


