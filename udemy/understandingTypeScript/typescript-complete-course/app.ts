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
let myRealAge: number; //by default this is type any. i.e value coercion is active here
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
