"use strict";
exports.__esModule = true;
exports.Service = void 0;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getData = function (useData) { getOMDBData(useData); };
    return Service;
}());
exports.Service = Service;
function getOMDBData(useData) {
    //Get data from API.
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=453d560a")
        .then(function (response) { return response.json(); })
        .then(function (movieInfo) { return useData(movieInfo); })["catch"](function (error) {
        console.error('Error:', error);
    });
}
