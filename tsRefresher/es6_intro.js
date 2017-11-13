"use strict";
console.log(" ****** ES6 INTRO ******");
//let & const
console.log("LET & CONST");
var variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // Won't work
//Block Scope
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow functions
console.log("Arrow Functions");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(30000, 32000));
//short syntax
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(30, 3));
//normal syntax
var divideNumbers = function (number1, number2) {
    return number1 / number2;
};
console.log(divideNumbers(30000, 32000));
var greet = function () {
    console.log("Hello");
};
greet();
//short syntax only works with 1 argument
var greetFriend = function (friend) { return console.log(friend); };
greetFriend("Manu");
//Default Parameters
console.log("DEFAULT PARAMETERS");
//order of default parameters is important. you can not call on a parameter if it hs not been defined
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    while (start > 0) {
        start--;
    }
    console.log("DONE!", start);
};
countdown();
//REST & SPREAD(...)
console.log(("REST & SPREAD"));
var numbers = [1, 10, 99, -5];
console.log(Math.max(33, 99, 5, -3));
//spread operator
console.log(Math.max.apply(Math, numbers));
//Rest operator (...)
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("MAX", 1, 2, 3, 4, 5));
//Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["COOKING", "SPORTS"];
//let hobby1 = myHobbies[0]; //pre es6 syntax
//let hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1]; // destructuring an array. makes it easy to get values out of an array
console.log(hobby1, hobby2);
var user = { userName: "Patrick", age: "31" };
;
// const userName = user.username;
// const age = user.age;
//destructuring object default
var userName = user.userName, age = user.age;
console.log(userName, age);
//destructuring object with alias
var myRName = user.userName, myRAge = user.age;
console.log(myRName, myRAge);
//Template Literals
console.log("Template Literals");
var usrName = "Kema";
var greeting = "This is a heading!\nI'm " + usrName + ".\nThis is cool.\n";
console.log(greeting);
/* Symbols, Iterators and Generators  FIND OUT MORE!!*/
console.log("FIND OUT MORE ABOUT SYMBOLS, ITERATORS AND GENERATORS");
