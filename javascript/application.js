const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
const list = document.querySelector('#results');


fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const movieCard = `<div class='col-3 mb-3'>
        <div class="card shadow-lg">
          <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title} poster">
          <div class="card-body">
            <h2 class="card-title">${movie.Title}</h2>
            <p class="card-text">${movie.Year}</p>
            <a href="https://www.imdb.com/title/${movie.imdbID}" class="btn btn-primary" target="_blank">Go on IMDB</a>
          </div>
        </div>
      </div>`;

      list.insertAdjacentHTML('beforeend', movieCard);
    })
  })



// Template creation
// Data input
// Template engine
// Output generation
