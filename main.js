"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
//たけさとがiPadを１人ずつ使いたいから、newを作るみたいな感じだよーん。
var service = new iService_1.Service;
//service.getData(logData);
//service.getData(useData);
function logData(movieInfo) {
    console.log("Title: ".concat(movieInfo.Title, ", director: ").concat(movieInfo.Director, ", year: ").concat(movieInfo.Year, ", poster: {movieInfo.Poster}"));
}
function useData(movieInfo) {
    document.getElementById("title").innerText = movieInfo.Title;
    document.getElementById("director").innerText = "Director is " + movieInfo.Director;
    document.getElementById("year").innerText = movieInfo.Year;
    document.getElementById("poster").innerText = movieInfo.Poster;
}
function search() {
    var title = document.getElementById("inputTitle").value;
    service.getMovieData(title, useData);
}
var clickBtn = document.getElementById("searchBtn").addEventListener("click", search);
