"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
var service;
service.getData = iService_1.getOMDBData;
var movie = service.getData();
document.getElementById("title").innerText = movie.Title;
document.getElementById("director").innerText = "Director is " + movie.Director;
