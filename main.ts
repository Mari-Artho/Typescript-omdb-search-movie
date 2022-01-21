import { iService, Service } from "./iService";

let service: iService = new Service;

service.getData(useData);

function useData(movieInfo: { Title: string; Director: string; Year: string; }): void{
  document.getElementById("title").innerText = movieInfo.Title;
  document.getElementById("director").innerText = "Director is " +  movieInfo.Director;
  document.getElementById("year").innerText = movieInfo.Year;
}