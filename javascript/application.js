import Mustache from "mustachejs";

const url = "https://www.omdbapi.com/?s=harry%20potter&apikey=adf1f2d7";
const list = document.querySelector('#results');
const template = document.querySelector('#movieCardTemplate').innerHTML;

fetch(url)
  .then(response => response.json())
  .then((data) => {
    data.Search.forEach((movie) => {
      const output = Mustache.render(template, movie);

      list.insertAdjacentHTML('beforeend', output)
    })
  })

// Mustache.render(string, object)
// const output = Mustache.render('<h1>{{title}}</h1>', { title: 'Hello Mustache.js' });
// list.insertAdjacentHTML('beforeend', output)

// Template creation
// Data input
// Template engine
// Output generation

// Mustache is a class
