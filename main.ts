import { domainToUnicode } from "url";
import { iService, Service } from "./iService";

//たけさとがiPadを１人ずつ使いたいから、newを作るみたいな感じだよーん。
let service: iService = new Service;

//service.getData(logData);
//service.getData(useData);

function logData(movieInfo: { Title: string; Director: string; Year: string; }): void{
  console.log(`Title: ${movieInfo.Title}, director: ${movieInfo.Director}, year: ${movieInfo.Year}`);
}

function useData(movieInfo: { Title: string; Director: string; Year: string; }): void{
  document.getElementById("title").innerText = movieInfo.Title;
  document.getElementById("director").innerText = "Director is " +  movieInfo.Director;
  document.getElementById("year").innerText = movieInfo.Year;
}

function search (){
  let title = (<HTMLInputElement>document.getElementById("inputTitle")).value;
  service.getMovieData(title, useData);
}

let clickBtn =  document.getElementById("searchBtn").addEventListener("click", search);