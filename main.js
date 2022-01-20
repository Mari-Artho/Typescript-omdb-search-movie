"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
var service = new iService_1.Service;
var movie = service.getData();
console.log(movie);
document.getElementById("title").innerText = movie.Title;
document.getElementById("director").innerText = "Director is " + movie.Director;
