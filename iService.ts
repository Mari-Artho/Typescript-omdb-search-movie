export interface iService {
    getData(): any;
}

export class Service implements iService {
    getData(): any { getOMDBData(); }
    constructor() {}
}

function getOMDBData(): any {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
      .then(response => response.json())
      .then(movie => {
        document.getElementById("title").innerText = movie.Title;
        document.getElementById("director").innerText = "Director is " +  movie.Director;
      })
      .catch((error) => {
        console.error('Error:', error);
        return null;
      }
      );
  }