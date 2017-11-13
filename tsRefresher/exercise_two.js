"use strict";
console.log("****** Exercise Two ******");
// Exercise 1 - Maybe use an Arrow Function?
//solution: arrow function
// let double = (value: number):number => {
//     return value * 2;
// };
//solution: short syntax arrow function
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - If only we could provide some default values...
//solution: default parameters
var greeet = function (name) {
    if (name === void 0) { name = "Patrick"; }
    console.log("Hello, " + name);
};
greeet();
greeet("Anna");
// Exercise 3 - Isn't there a shorter way to get all these Values?
//solution : Spred Operator
var numbeers = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbeers));
// Exercise 4 - I have to think about Exercise 3 ...
//solution : Spread Operator
var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbeers);
// console.log(newArray);
newArray.push.apply(newArray, numbeers);
console.log(newArray);
// Exercise 5 - That's a well-constructed array.
//solution: Destructuring Arrays
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - And a well-constructed object!
//solution: Destructuring Objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
