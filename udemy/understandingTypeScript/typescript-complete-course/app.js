"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
//let & const
console.log("Let & Console");
var variable = "Test"; //block scope variable
console.log(variable);
variable = "Another value";
console.log(variable);
var maxlevels = 100;
console.log(maxlevels);
//maxlevels = 99;
function reset() {
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow Functions
console.log("ARROW FUNCTIONS");
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(1, 2));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log("Hello!");
};
greet();
// const greetFriend = friend => console.log(friend);
// greetFriend('nuno');
// Default Parameters
console.log("DEFAULT PARAMETERS");
var countdown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    while (start > end) {
        start--;
    }
    console.log("Done", start);
};
countdown(10);
//REST & SPREAD Operators
console.log("REST & SPREAD: they allow you to work with arrays and list of values");
var numbers = [1, 10, 99, -5];
console.log('max List of numbers: ', Math.max(33, 99, 10, -3));
console.log('max array using Spread operator: ', Math.max.apply(Math, numbers)); // spread operator converst array to list of values
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args; // we return an array
}
console.log(makeArray("patrick", 1, 2, 6));
//Destructuring
console.log("DESTRUCTURING");
var myHobbies = ["cooking", "sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
var hobby1 = myHobbies[0], hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var userData1 = { userName: "Patrick", age: 31 };
var myName1 = userData1.userName, myAge1 = userData1.age;
console.log(myName1, myAge1);
//Template Literals
console.log("TEMPLATE LITERALS");
var userName2 = "Patrick";
var greeting1 = "<strong>This is a heading!</strong>\nI'm " + userName2 + ".\nThis is cool!";
console.log(greeting1);
//OTHER ES6 FEATURES : SYMBOLS, ITERATORS AND GENERATORS
//CLASS
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 27; // accessible from this class and inherited from this class. they can be initialised here not necessary to do it from  constructor
        this.name = name;
    }
    //CLASS METHODS
    Person.prototype.PrintAge = function () {
        console.log(this.age);
        this.setType("Old Guy"); //you have to use this when accessing methods or properties when inside the class
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Patrick", "patrick");
console.log(person.name, person.username);
person.PrintAge();
// person.setType("Cool guy"); won't work with private method
//Inheritance
var Patrick = (function (_super) {
    __extends(Patrick, _super);
    //name: "Patrick";
    function Patrick(username) {
        var _this = _super.call(this, "Patrick", username) || this;
        _this.age = 32; // this is available in the child class because it is protected
        return _this;
        //this.type this is private and only accessible from Person Class
    }
    return Patrick;
}(Person));
var patrick = new Patrick("patrick_1");
console.log(patrick);
//Getters & Setters
var Plant = (function () {
    function Plant() {
        this._species = "Default";
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            else {
                this._species = "Default";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log("result:", plant.species);
plant.species = "AB";
console.log("result2:", plant.species);
plant.species = "Green Plant";
console.log("result3:", plant.species);
//Static Properties & Methods
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14; // this means you can instantiate this property without calling the class
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log('circumference:', Helpers.calcCircumference(8));
//Abstract Classes: they cannot be instantiated, they are created to be inherited from
var Project = (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);
//constructors & singletons
//private constructors
var OnlyOne = (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('the Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else';
console.log('-------------END of app.ts----------');
