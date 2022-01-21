import { userInfo } from "os";

export interface iService {
    getData(useData: (movieInfo: any) => void): void;
}　//The name of getData () can be anything. Same as naming the Variable as I like.

export class Service implements iService {
    getData(useData: (movieInfo: any) => void): void { getOMDBData(useData); }
    constructor() {}
}

function getOMDBData(useData): void {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
      .then(response => response.json())
      .then(movieInfo => useData(movieInfo))
      .catch((error) => {
        console.error('Error:', error);
      }
      );
  }