"use strict";
// Exercise 1 - ()=>{} arro function
var double = function (value) { return value * 2; };
console.log(double(10));
// Exercise 2 - default values
var greet1 = function (name) {
    if (name === void 0) { name = "patrick"; }
    return console.log("Hello, " + name);
};
greet1();
greet1("Anna");
// Exercise 3 -  '...' Spread Operator
var numbers2 = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers2));
// Exercise 4 -  '...' Spread Operator
var newArray = [55, 20];
newArray.push.apply(newArray, numbers);
console.log(newArray);
// Exercise 5 - Destructuring Arrays
var testResults = [3.89, 2.99, 1.38];
var result1 = testResults[0], result2 = testResults[1], result3 = testResults[2];
console.log(result1, result2, result3);
// Exercise 6 - Destructuring Objects
var scientist = { firstName: "Will", experience: 12 };
var firstName = scientist.firstName, experience = scientist.experience;
console.log(firstName, experience);
