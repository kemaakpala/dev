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
