//import { printStad } from "./stader.mjs";
//import { ReadWikiAPI } from "./PrintCityinfo.mjs";
//import { removeStorage } from "./localStorage.mjs";

// export only top-level function 
function printGalaxy() {
  //Get data from API.
  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
    .then((response) => response.json())
    .then((movie) => {
      document.getElementById("title").innerText = movie.Title;
      document.getElementById("director").innerText = "Director is " +  movie.Director;
    })
    .catch((error) => {
      console.error('Error:', error);
    }
    );
}
printGalaxy();
