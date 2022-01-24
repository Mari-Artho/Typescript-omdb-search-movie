"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
//たけさとがiPadを１人ずつ使いたいから、newを作るみたいな感じだよー。
var service = new iService_1.Service;
//service.getData(logData);
//service.getData(useData);
function logData(movieInfo) {
    console.log("Title: ".concat(movieInfo.Title, ", director: ").concat(movieInfo.Director, ", year: ").concat(movieInfo.Year, ", poster: ").concat(movieInfo.Poster));
}
function useData(movieInfo) {
    //show title
    document.getElementById("title").innerText = movieInfo.Title;
    //show director's name
    document.getElementById("director").innerText = "Director is " + movieInfo.Director;
    //show movie's year
    document.getElementById("year").innerText = movieInfo.Year;
    //show poster image
    var imgElement = document.createElement("img");
    var showImg = movieInfo.Poster;
    //var url = showImg.createObjectURL(images);
    console.log(showImg);
    // imgElement.src =  showImg;
}
function search() {
    var title = document.getElementById("inputTitle").value;
    service.getMovieData(title, useData);
}
var clickBtn = document.getElementById("searchBtn").addEventListener("click", search);
