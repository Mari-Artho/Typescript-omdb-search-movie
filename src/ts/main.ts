import { iService, Service } from "./models/iService";

//たけさとがiPadを１人ずつ使いたいから、newを作るみたいな感じだよー。
let service: iService = new Service;

//service.getData(logData);
//service.getData(useData);

function logData(movieInfo: { Title: string; Director: string; Year: string; Poster:string; }): void{
  console.log(`Title: ${movieInfo.Title}, director: ${movieInfo.Director}, year: ${movieInfo.Year}, poster: ${movieInfo.Poster}`);
}

function useData(movieInfo: { Title: string; Director: string; Year: string;Poster:string }): void{
  //show title
  document.getElementById("title").innerText = movieInfo.Title;
  //show director's name
  document.getElementById("director").innerText = "Director is " +  movieInfo.Director;
  //show movie's year
  document.getElementById("year").innerText = movieInfo.Year;
  // //show poster image
  // let imgElement = document.createElement("img");
   let showImg =  movieInfo.Poster;
  // //var url = showImg.createObjectURL(images);
  //  console.log(showImg);
  // imgElement.src = showImg;
  let imgPoster = document.getElementById("imgPoster");
  imgPoster.append = showImg
}


  //from project
  // async function ReadAPI(url): Promise<any> {
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   return data;
  // }

  // async function readMovieAync(movieInfo) {
  //   let imgUrl = movieInfo.Poster;
  //   let m = await ReadAPI(imgUrl);

  //   let poster = document.createElement("img");
  //   let showImg =  movieInfo.Poster;
  //   poster.src=showImg;
  //   const yearNode = document.getElementById("year");
  //   yearNode.appendChild(poster);
}



function search (): void{
  let title = (<HTMLInputElement>document.getElementById("inputTitle")).value;
  service.getMovieData(title, useData);
}

let clickBtn =  document.getElementById("searchBtn").addEventListener("click", search);