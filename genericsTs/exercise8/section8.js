"use strict";
var myMap = /** @class */ (function () {
    function myMap() {
        this.thisEmptyObject = {};
    }
    myMap.prototype.setItem = function (key, item) {
        this.thisEmptyObject[key] = item;
    };
    myMap.prototype.getItem = function (key) {
        return this.thisEmptyObject[key];
    };
    myMap.prototype.clear = function () {
    };
    myMap.prototype.printMap = function () {
    };
    return myMap;
}());
