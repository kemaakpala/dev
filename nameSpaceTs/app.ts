/* Namespaces should be used for smaller applications or very few functions. */
/*
run this command in terminal to bundle the math files into one app.js file. this is a solutino but not the preferred solution.
tsc --outFile app.js circleMath.ts rectangleMath.ts app.ts*/
// Solution: namespace imports
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
// namespace alias example 
import circleMath = MyMath.Circle;
//remember to compile with the --outFile command

const PI = 3.14;

console.log(MyMath.calculateRectangle(10,20));
console.log(MyMath.Circle.calculateCircumference(20));
console.log(circleMath.calculatePI(31.400000000000002,10));
console.log(PI);