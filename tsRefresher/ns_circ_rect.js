var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
/// <reference path="ns_circleMath.ts" />
/// <reference path="ns_rectangleMath.ts" />
console.log("****** NAMESPACE ******");
//basic way of creating name spaces
/*
    we split this namespace out into 2 different files called ns_circleMath.ts and ns_rectangleMath.ts
*/
// namespace MyMath {
//     const PI = 3.14;
//     export function calculateCircumference(diameter: number) {
//         return diameter * PI;
//     }
//     export function calculateRectangle(width: number, length: number) {
//         return width * length;
//     }
// }
// const PI = 2.99;
// console.log(PI);
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(3));
