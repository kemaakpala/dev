"use strict";
var MyMath;
(function (MyMath) {
    function calulateRectangle(width, length) {
        return width * length;
    }
    MyMath.calulateRectangle = calulateRectangle;
})(MyMath || (MyMath = {}));
