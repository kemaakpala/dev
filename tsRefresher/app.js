"use strict";
//string
var myName = 'Kema';
//myName = 28;
var myAge = 27;
//myAge = 'patrick'
//boolean
var hasHobbies = false;
//hasHobbies = 1;
var myRealAge;
myRealAge = 27;
//myRealAge = '27';
//any allows for any type to be added to the array
var hobbies = ['videogames', 'reading'];
hobbies = [100];
//tuples: arrays with mixed types
var address = ["Superstreet", 90];
//enum: this makes numbers more expressive
//it allows you to create custom types
//enums always increment by 1 1.e if you set Green to 100, Blue will be 101
//it'll always look at the preceding / last item in front of it.
//enums can also be set to string...once set to string it'll loose it's ability to increment the next item.
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 100] = "Green";
    Color[Color["Blue"] = 101] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Blue;
console.log(myColor);
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello");
}
//argument types
function multiply(value1, value2) {
    return value1 * value2;
}
console.log(multiply(2, 10));
//function types 
var myMultiply;
// myMultiply = sayHello;
// console.log(myMultiply());
myMultiply = multiply;
console.log(myMultiply(5, 2));
//objects: name of properties must match
var userData = {
    name: "Patrick",
    age: 31
};
//complex object
var complex = {
    data: [100, 3.09, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var bool = false;
var myRealRealAge = 27;
myRealRealAge = "27";
//myRealRealAge = false;
console.log(myRealRealAge);
//check types
var finalValue = 31;
if (typeof finalValue == "number") {
    console.log('finalValue is a number');
}
//never type
function neverReturns() {
    throw new Error("An Error");
    //return 'this string'; this will cause an error 
    //error details: Type '"this string"' is not assignable to type 'never'. 
}
//Nullable Types
var canBeNull = 12;
console.log('canBeNull: ', canBeNull);
var canAlsoBeNull; // has an implicit type of any
canAlsoBeNull = null; // this is basicaly the same as the above but just on one line.
console.log('canAlsoBeNull: ', canAlsoBeNull);
var canThisBeNull = null; // this should be implicitly of type null: further investigation required as to why it is not.
canThisBeNull = 3;
console.log(canThisBeNull);
function controlMe(isTrue, somethingElse) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 33;
    return result;
}
