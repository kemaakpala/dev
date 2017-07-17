

import {} from "/math/circle";
console.log(PI);
console.log(calculateCircumference(10));



/* 
///<reference path="circleMath.ts"/>
///<reference path="rectangleMath.ts"/>
///<reference path="namespace.ts"/>
// implicitly implied types || do not assign types
//string
let myName = 'Patrick';
//myName = 28;

//number
let myAge = 31;
//myAge= 'Max';

//boolean
let hasHobbies = false;
//hasHobbies = 1;

//array
let hobbies = ["Cooking", "Sports"];
//console.log(typeof hobbies);
hobbies = ['100'];

let hobby: any[] = ["games", "photography"];
hobby = [100]; // this will transpile because it's an array and hobby is a type of any[]
/*******************************************
    this throws an error: Type '100' is not 
    assignable to type 'any[]'. it will not transpile
    hobby = 100; 
*******************************************/
//Explicitly implied types || assign types 
//let myRealAge; //by default this is type any. i.e value coercion is active here
/* let myRealAge: number; //by default this is type any. i.e value coercion is active here
myRealAge = 27;

let myLastName: string = 'Akpala';
let mySisters: number = 4;
let myFavourites: boolean = true;

//tuples
let address:[string, number] = ["Superstreet", 99]; // the order matters. it has to be string and number.

//Enums - makes numbers more expressive
enum Color {
    Gray, //0
    Green, //1
    Blue //2
}

let myColor: Color = Color.Green;
console.log(myColor);

enum Colors {
    Gray, //0
    Green = 100, //1
    Blue //101 continues incrementing from previous number
}

let myColors: Colors = Colors.Blue;
console.log(myColors);

//any -  this is the most flexible of all types in typescript it returns javascripts coercion
let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);


// function types , arguments types

function returnMyName(): string{
    return myName;
}
console.log(returnMyName());

//void
function sayHello(): void{
    console.log("Hello!");
}

function multiply(value1: number, value2: number): number{
    return value1 * value2;
}

//console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));

//functions are types on their own
//function type
let myMultiply: (val1: number, val2: number) => number;// order is important in function but not in objects. 
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log (myMultiply(1,5));

//objects
let userData: {name: string, age: number} = { //properties and types of properties
    name: "Max", //in objects the key is important 
    age: 27 // properties and values 
};
// userData = { 
//     a: "Hello",
//     b: 22,
// };

let complex: { data: number[], output: (all: boolean) => number[] } = {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};
//type alias
type Complex = { data: number[], output: (all: boolean) => number[] };

let coomplex2: Complex= {
    data: [100, 3.99, 10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

//union types
let myRealRealAge: number | string = 27; // can be number or string 
myRealRealAge = "27";
//myRealRealAge = true; // cannot be boolean

//check types
let finalValue = "A string";
if(typeof finalValue == "number"){
    console.log("Final value is a number");
}

//never type
function neverReturns(): never {
    throw new Error('An error');
}

//Nullable types
let canBeNull: number | null = 12; 
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;
let canThisBeNull = null; // this is implicitly of type null
canThisBeNull = 3;

//Excercise 1
type BankAccount = { money: number, deposit: (value: number) => void } ;

let bankAccount: BankAccount= {
    money: 2000,
    deposit: function(value: number): void {
        this.money += value;
    }
};
 
let myself: { name: string, bankAccount: BankAccount , hobbies: string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
 
myself.bankAccount.deposit(3000);
 
console.log(myself);

//let & const
console.log("Let & Console");

let variable = "Test"; //block scope variable
console.log(variable);

variable = "Another value";
console.log(variable);
const maxlevels = 100;
console.log(maxlevels);
//maxlevels = 99;

function reset(){
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);


//Arrow Functions
console.log("ARROW FUNCTIONS");
const addNumbers = function(number1: number, number2: number): number{
    return number1 + number2;
};
console.log(addNumbers(1 ,2));
const multiplyNumbers = (number1: number, number2: number) =>  number1 * number2;
console.log(multiplyNumbers(10,3));

const greet = () => {
    console.log("Hello!");
    
};
greet();

// const greetFriend = friend => console.log(friend);
// greetFriend('nuno');

// Default Parameters
console.log("DEFAULT PARAMETERS");
const countdown = (start: number = 10, end: number = start - 5): void => {
    while(start > end){
        start --;
    }
    console.log("Done", start);
    
};
countdown(10);

//REST & SPREAD Operators
console.log("REST & SPREAD: they allow you to work with arrays and list of values");

const numbers = [1,10,99,-5];
console.log('max List of numbers: ', Math.max(33,99,10,-3));
console.log('max array using Spread operator: ', Math.max(...numbers));// spread operator converst array to list of values

function makeArray(name: string, ...args: number[]){ // we accept a list of values and convert them into an array
    return args;// we return an array
}
console.log(makeArray("patrick",1,2,6));

//Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["cooking", "sports"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const[hobby1, hobby2] = myHobbies;
console.log(hobby1, hobby2);

const userData1 = { userName: "Patrick", age: 31 };
const { userName:myName1, age:myAge1} = userData1;
console.log(myName1, myAge1);

//Template Literals
console.log("TEMPLATE LITERALS");
const userName2 = "Patrick";
const greeting1 = `<strong>This is a heading!</strong>
I'm ${userName2}.
This is cool!`;
console.log(greeting1);

//OTHER ES6 FEATURES : SYMBOLS, ITERATORS AND GENERATORS

//CLASS
class Person {
    name: string;
    private type: string; // only accessible from this object
    protected age:number = 27; // accessible from this class and inherited from this class. they can be initialised here not necessary to do it from  constructor

    constructor(name:string, public username: string) {
        this.name = name;
    }

    //CLASS METHODS
    PrintAge() {
        console.log(this.age);
        this.setType("Old Guy"); //you have to use this when accessing methods or properties when inside the class
    }

   private setType(type: string){
        this.type = type;
        console.log(this.type);
        
    }
}

const person = new Person("Patrick", "patrick");
console.log(person.name, person.username);

person.PrintAge();
// person.setType("Cool guy"); won't work with private method


//Inheritance


class Patrick extends Person {
    //name: "Patrick";
    constructor(username: string){
        super("Patrick", username);
        this.age = 32; // this is available in the child class because it is protected
        //this.type this is private and only accessible from Person Class
    }
}

const patrick = new Patrick("patrick_1");
console.log(patrick);

//Getters & Setters
class Plant {
    private _species: string = "Default";
    get species() {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3){
            this._species = value;
        }else{
            this._species = "Default";
        }
    }
}

let plant = new Plant();
console.log("result:", plant.species);
plant.species = "AB";
console.log("result2:", plant.species);
plant.species = "Green Plant"
console.log("result3:", plant.species);

//Static Properties & Methods
class Helpers {
    static PI: number = 3.14; // this means you can instantiate this property without calling the class
    static calcCircumference (diameter: number):number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log('circumference:',Helpers.calcCircumference(8));

//Abstract Classes: they cannot be instantiated, they are created to be inherited from
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    abstract changeName(name: string): void; //means we need to create the logic for this changeName method in the childClass

    calcBudget(){
        return this.budget * 2;
    }
}

class ITProject extends Project {
    changeName(name: string) : void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//constructors & singletons
//private constructors
class OnlyOne {
    private static instance: OnlyOne;
    private constructor (public readonly name: string) {}

    static getInstance() {
        if( !OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}

//let wrong = new OnlyOne('the Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else';

console.log('-------------END of app.ts----------');
 */