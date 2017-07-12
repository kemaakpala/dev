"use strict";
// implicitly implied types || do not assign types
//string
var myName = 'Patrick';
//myName = 28;
//number
var myAge = 31;
//myAge= 'Max';
//boolean
var hasHobbies = false;
//hasHobbies = 1;
//array
var hobbies = ["Cooking", "Sports"];
//console.log(typeof hobbies);
hobbies = ['100'];
var hobby = ["games", "photography"];
hobby = [100]; // this will transpile because it's an array and hobby is a type of any[]
/*******************************************
    this throws an error: Type '100' is not
    assignable to type 'any[]'. it will not transpile
    hobby = 100;
*******************************************/
//Explicitly implied types || assign types 
//let myRealAge; //by default this is type any. i.e value coercion is active here
var myRealAge; //by default this is type any. i.e value coercion is active here
myRealAge = 27;
var myLastName = 'Akpala';
var mySisters = 4;
var myFavourites = true;
//tuples
var address = ["Superstreet", 99]; // the order matters. it has to be string and number.
//Enums - makes numbers more expressive
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; //2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var Colors;
(function (Colors) {
    Colors[Colors["Gray"] = 0] = "Gray";
    Colors[Colors["Green"] = 100] = "Green";
    Colors[Colors["Blue"] = 101] = "Blue"; //101 continues incrementing from previous number
})(Colors || (Colors = {}));
var myColors = Colors.Blue;
console.log(myColors);
//any -  this is the most flexible of all types in typescript it returns javascripts coercion
var car = "BMW";
console.log(car);
car = { brand: "BMW", series: 3 };
console.log(car);
// function types , arguments types
function returnMyName() {
    return myName;
}
console.log(returnMyName());
//void
function sayHello() {
    console.log("Hello!");
}
function multiply(value1, value2) {
    return value1 * value2;
}
//console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));
//functions are types on their own
//function type
var myMultiply; // order is important in function but not in objects. 
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(1, 5));
//objects
var userData = {
    name: "Max",
    age: 27 // properties and values 
};
// userData = { 
//     a: "Hello",
//     b: 22,
// };
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var coomplex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
//union types
var myRealRealAge = 27; // can be number or string 
myRealRealAge = "27";
//myRealRealAge = true; // cannot be boolean
//check types
var finalValue = "A string";
if (typeof finalValue == "number") {
    console.log("Final value is a number");
}
//never type
function neverReturns() {
    throw new Error('An error');
}
//Nullable types
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeNull = null; // this is implicitly of type null
canThisBeNull = 3;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(3000);
console.log(myself);
