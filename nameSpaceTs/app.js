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
var MyMath;
(function (MyMath) {
    var PI = 3.14;
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/*
run this command in terminal to bundle the math files into one app.js file. this is a solutino but not the preferred solution.
tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts*/
// Solution: namespace imports
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var circleMath = MyMath.Circle;
//remember to compile with the --outFile command
var PI = 3.14;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(20));
console.log(circleMath.calculatePI(31.400000000000002, 10));
console.log(PI);
