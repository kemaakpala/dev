"use strict";
//rectangleMath.ts
var MyMath;
(function (MyMath) {
    function calulateRectangle(width, length) {
        return width * length;
    }
    MyMath.calulateRectangle = calulateRectangle;
})(MyMath || (MyMath = {}));
