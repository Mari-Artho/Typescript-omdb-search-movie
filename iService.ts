export interface iService {
    getData(): any;
}

export function getOMDBData(): any {
    //Get data from API.
    return fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
      .then((response) => response.json())
      .then((movie) => {
          movie;
      })
      .catch((error) => {
        console.error('Error:', error);
        null;
      }
      );
  }