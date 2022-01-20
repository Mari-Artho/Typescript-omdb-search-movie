"use strict";
exports.__esModule = true;
exports.Service = void 0;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getData = function () { getOMDBData(); };
    return Service;
}());
exports.Service = Service;
function getOMDBData() {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
        .then(function (response) { return response.json(); })
        .then(function (movie) {
        document.getElementById("title").innerText = movie.Title;
        document.getElementById("director").innerText = "Director is " + movie.Director;
    })["catch"](function (error) {
        console.error('Error:', error);
        return null;
    });
}
