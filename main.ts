import { iService, getOMDBData } from "./iService";

let service: iService;

service.getData = getOMDBData;

let movie = service.getData();

document.getElementById("title").innerText = movie.Title;
document.getElementById("director").innerText = "Director is " +  movie.Director;

