(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
exports.__esModule = true;
exports.Service = void 0;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getData = function (useData) { getOMDBData(useData); };
    // parameter useData: function that shows how to use the data;
    // the function itself takes one parameter (movieInfo) and returns void
    Service.prototype.getMovieData = function (title, useData) { getMovieDataFromOMDB(title, useData); };
    return Service;
}());
exports.Service = Service;
// any means that you return either nothing (void) or anything,
// void means that no value is returned.
function getOMDBData(useData) {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
        .then(function (response) { return response.json(); })
        //⇩これがmap()関数だよー。
        .then(function (movieInfo) { return useData(movieInfo); })["catch"](function (error) {
        console.error('Error:', error);
    });
}
function getMovieDataFromOMDB(title, useData) {
    //Get data from API.
    fetch("http://www.omdbapi.com/?t=" + encodeURIComponent(title) + "&apikey=453d560a")
        .then(function (response) { return response.json(); })
        //⇩これがmap()関数だよー。
        .then(function (movieInfo) { return useData(movieInfo); })["catch"](function (error) {
        console.error('Error:', error);
    });
}

},{}],2:[function(require,module,exports){
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

},{"./iService":1}]},{},[2,1]);
