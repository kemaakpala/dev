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
System.register("math/circle", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    exports_1("calculateCircumference", calculateCircumference);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
System.register("app", ["math/circle"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    // functions
    function returnMyName() {
        return myName;
    }
    //void
    function sayHello() {
        console.log("Hello");
    }
    //argument types
    function multiply(value1, value2) {
        return value1 * value2;
    }
    //never type
    function neverReturns() {
        throw new Error("An Error");
        //return 'this string'; this will cause an error 
        //error details: Type '"this string"' is not assignable to type 'never'. 
    }
    function controlMe(isTrue, somethingElse) {
        var result;
        if (isTrue) {
            result = 12;
        }
        result = 33;
        return result;
    }
    var myName, myAge, hasHobbies, myRealAge, hobbies, address, Color, myColor, car, myMultiply, userData, complex, complex2, bool, myRealRealAge, finalValue, canBeNull, canAlsoBeNull, canThisBeNull, circle_1;
    return {
        setters: [
            function (circle_1_1) {
                circle_1 = circle_1_1;
            }
        ],
        execute: function () {
            //string
            myName = 'Kema';
            //myName = 28;
            myAge = 27;
            //myAge = 'patrick'
            //boolean
            hasHobbies = false;
            myRealAge = 27;
            //myRealAge = '27';
            //any allows for any type to be added to the array
            hobbies = ['videogames', 'reading'];
            hobbies = [100];
            //tuples: arrays with mixed types
            address = ["Superstreet", 90];
            //enum: this makes numbers more expressive
            //it allows you to create custom types
            //enums always increment by 1 1.e if you set Green to 100, Blue will be 101
            //it'll always look at the preceding / last item in front of it.
            //enums can also be set to string...once set to string it'll loose it's ability to increment the next item.
            (function (Color) {
                Color[Color["Gray"] = 0] = "Gray";
                Color[Color["Green"] = 100] = "Green";
                Color[Color["Blue"] = 101] = "Blue"; //2
            })(Color || (Color = {}));
            myColor = Color.Blue;
            console.log(myColor);
            car = "BMW";
            console.log(car);
            car = { brand: "BMW", series: 3 };
            console.log(car);
            console.log(returnMyName());
            console.log(multiply(2, 10));
            // myMultiply = sayHello;
            // console.log(myMultiply());
            myMultiply = multiply;
            console.log(myMultiply(5, 2));
            //objects: name of properties must match
            userData = {
                name: "Patrick",
                age: 31
            };
            //complex object
            complex = {
                data: [100, 3.09, 10],
                output: function (all) {
                    return this.data;
                }
            };
            complex2 = {
                data: [100, 3.99, 10],
                output: function (all) {
                    return this.data;
                }
            };
            //union types
            bool = false;
            myRealRealAge = 27;
            myRealRealAge = "27";
            //myRealRealAge = false;
            console.log(myRealRealAge);
            //check types
            finalValue = 31;
            if (typeof finalValue == "number") {
                console.log('finalValue is a number');
            }
            //Nullable Types
            canBeNull = 12;
            console.log('canBeNull: ', canBeNull);
            canAlsoBeNull = null; // this is basicaly the same as the above but just on one line.
            console.log('canAlsoBeNull: ', canAlsoBeNull);
            canThisBeNull = null; // this should be implicitly of type null: further investigation required as to why it is not.
            canThisBeNull = 3;
            console.log(canThisBeNull);
            //this function will not error with the default tsconfig. u need to turn on "noUnusedParameters" to prevent this type of error
            console.log("****** modules ******");
            console.log(circle_1.PI);
            console.log(circle_1.calculateCircumference);
        }
    };
});
var Person = /** @class */ (function () {
    //this refers to the class
    function Person(name, username) {
        this.username = username;
        this.age = 31; //this property is only accessible from objects that are created based on this Person class and any other objects that inherit this object.
        this.name = name;
    }
    //methods that can be accessed from outside
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("Old Guy");
    };
    //methods that can't be accessed from outside
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
;
var person = new Person("Patrick", "patrick");
console.log(person.name, person.username);
person.printAge();
//person.setType("cool guy"); //Won't work with private method
//Inheritance
console.log("****** INHERITANCE ******");
//Inherits everything from the base class
var Patrick = /** @class */ (function (_super) {
    __extends(Patrick, _super);
    //name = "Patrick";// name will overwrite name from Person Class
    function Patrick(username) {
        var _this = _super.call(this, "Pat", username) || this;
        _this.age = 31;
        return _this;
    }
    return Patrick;
}(Person));
var patrick = new Patrick("MrPat");
console.log(patrick);
//Getters & Setters
console.log("****** GETTERS & SETTERS ******");
var Plant = /** @class */ (function () {
    function Plant() {
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
    ;
    return Plant;
}());
var plant = new Plant();
console.log(plant.species);
plant.species = "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);
//Static Properties & Methods
console.log("****** STATIC PROPERTIES & METHODS");
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
//Abstract Classes
console.log("****** ABSTRACT CLASSES ******");
/*
    this cannot be instantiated directly.
    It provides a base class | Object.
    They are just meant to be inherited from.
*/
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = "Default";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
//extends abstract class: Project
var ITProject = /** @class */ (function (_super) {
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
//Private Constructors
console.log("****** PRIVATE CONSTRUCTORS ******");
/* this is used to create a forced singleton, i.e it makes sure that only one instance of a class exists */
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    //short syntax readonly property
    //private constructor(public readonly name: string){}
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    };
    return OnlyOne;
}());
//let wrong = new OnlyOne('The Only One');
var right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else'; 
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
console.log("****** Exercise One ******");
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
console.log('****** Exercise 3 ******');
// Exercise 1 - How was your TypeScript Class?
//solution: Basic Class
var Car = /** @class */ (function () {
    function Car(name) {
        this.acceleration = 0;
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Toooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var newCar = new Car("BMW");
newCar.honk();
console.log(newCar.acceleration);
newCar.accelerate(10);
console.log(newCar.acceleration);
// Exercise 2 - Two objects, based on each other ...
//solution: Inheritance
var baseObject = /** @class */ (function () {
    function baseObject() {
        this.width = 0;
        this.length = 0;
    }
    return baseObject;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function () {
        return this.width * this.length;
    };
    return Rectangle;
}(baseObject));
var rectangle = new Rectangle();
rectangle.width = 5;
rectangle.length = 10;
console.log(rectangle.calcSize());
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
//Getters & Setters
var Person = /** @class */ (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
console.log(person.firstName);
person.firstName = "pat";
console.log(person.firstName);
person.firstName = "Patrick";
console.log(person.firstName);
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName); 
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
function calculateRectangle(width, length) {
    return width * length;
}
