(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
    });
}

},{}],2:[function(require,module,exports){
"use strict";
exports.__esModule = true;
var iService_1 = require("./iService");
var service = new iService_1.Service;
service.getData();

},{"./iService":1}]},{},[2,1]);
