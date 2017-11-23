"use strict";
var MyMath;
(function (MyMath) {
    //nested circle namespace
    var Circle;
    (function (Circle) {
        //circle functions
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
        function calculateRadius(diameter) {
            return diameter / 2;
        }
        Circle.calculateRadius = calculateRadius;
        function calculatePI(circumference, diameter) {
            return circumference / diameter;
        }
        Circle.calculatePI = calculatePI;
        function calculateArc(diameter) {
            return PI * diameter / 2;
        }
        Circle.calculateArc = calculateArc;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
