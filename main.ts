import { iService, Service } from "./iService";

let service: iService = new Service;

let movie = service.getData();
console.log(movie);

document.getElementById("title").innerText = movie.Title;
document.getElementById("director").innerText = "Director is " +  movie.Director;

