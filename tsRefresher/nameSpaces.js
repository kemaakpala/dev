"use strict";
/// <reference path="ns_circleMath.ts" />
/// <reference path="ns_rectangleMath.ts" />
var CircleMath = MyMath.Circle;
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
console.log(CircleMath.calculateCircumference(3));
