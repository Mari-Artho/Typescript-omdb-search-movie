import { userInfo } from "os";

export interface iService {
    getData(useData: (movieInfo: any) => void): void;
    getMovieData(title: string, useData: (movieInfo: any) => void): void;
}　//The name of getData () can be anything. Same as naming the Variable as I like.


export class Service implements iService {
    getData(useData: (movieInfo: any) => void): void { getOMDBData(useData); }
    // parameter useData: function that shows how to use the data;
    // the function itself takes one parameter (movieInfo) and returns void
    getMovieData(title: string, useData: (movieInfo: any) => void): void { getMovieDataFromOMDB(title, useData); }
    constructor() {}
}
// any means that you return either nothing (void) or anything,
// void means that no value is returned.
function getOMDBData(useData): void {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
      .then(response => response.json())
      //⇩これがmap()関数だよー。
      .then(movieInfo => useData(movieInfo))
      .catch((error) => {
        console.error('Error:', error);
      }
      );
  }

  function getMovieDataFromOMDB(title, useData): void {
    //Get data from API.
    fetch("http://www.omdbapi.com/?t=" + encodeURIComponent(title) + "&apikey=453d560a")
      .then(response => response.json())
      //⇩これがmap()関数だよー。
      .then(movieInfo => useData(movieInfo))
      .catch((error) => {
        console.error('Error:', error);
      }
      );
  }