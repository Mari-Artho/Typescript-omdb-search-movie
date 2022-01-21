"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
var service = new iService_1.Service;
service.getData(useData);
function useData(movieInfo) {
    document.getElementById("title").innerText = movieInfo.Title;
    document.getElementById("director").innerText = "Director is " + movieInfo.Director;
    document.getElementById("year").innerText = movieInfo.Year;
}
