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
