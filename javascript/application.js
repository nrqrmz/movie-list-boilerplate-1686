const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
const list = document.querySelector('#results');
const template = document.querySelector('#movieCardTemplate');

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const clone = template.content.cloneNode(true);

      clone.querySelector('img').src = movie.Poster;
      clone.querySelector('img').alt = `${movie.Title} poster`;
      clone.querySelector('h2').innerText = movie.Title;
      clone.querySelector('p').innerText = movie.Year;
      clone.querySelector('a').href = `https://www.imdb.com/title/${movie.imdbID}`;

      list.appendChild(clone);
    })
  })

// Template creation
// Data input
// Template engine
// Output generation
