"use strict";
//Simple Generic
function echo(data) {
    return data;
}
//the problem with this is that typescript does not know what type operations should be attached to data passed.
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
// Better Generic
//this allows you to have any type passed into the function and also allow typescript to attach the right type operations to the function.
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27).toString(16));
console.log(betterEcho({ name: "Max", age: 27 }).name);
// Built-in Generics
var testResults = [1.94, 3.65]; //explicit type arrays
testResults.push(-2.99);
console.log(testResults);
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
//Generic Types
var echo2 = betterEcho; //<T>(data: T) => T this is a function type
console.log(echo2("Something"));
//Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
