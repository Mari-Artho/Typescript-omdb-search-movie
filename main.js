//import { printStad } from "./stader.mjs";
//import { ReadWikiAPI } from "./PrintCityinfo.mjs";
//import { removeStorage } from "./localStorage.mjs";
// export only top-level function 
function printGalaxy() {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
        .then(function (response) { return response.json(); })
        .then(function (movie) {
        document.getElementById("title").innerText = movie.Title;
        document.getElementById("director").innerText = "Director is " + movie.Director;
    })["catch"](function (error) {
        console.error('Error:', error);
    });
}
printGalaxy();
