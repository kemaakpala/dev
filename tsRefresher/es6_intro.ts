console.log(" ****** ES6 INTRO ******")
//let & const
console.log("LET & CONST")
let variable = "Test";
console.log(variable);
variable = "Another value";
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
//maxLevels = 99; // Won't work

//Block Scope
function reset(){
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);
//Arrow functions
console.log("Arrow Functions")
const addNumbers = function(number1: number, number2: number): number {
    return number1 + number2;
};
console.log(addNumbers(30000,32000));
//short syntax
const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;
console.log(multiplyNumbers(30,3));
//normal syntax
const divideNumbers = (number1: number, number2: number): number => {
    return number1/number2;
}
console.log(divideNumbers(30000,32000));

const greet = () => {
    console.log("Hello");
};
greet();
//short syntax only works with 1 argument
const greetFriend = friend => console.log(friend);
greetFriend("Manu");

//Default Parameters
console.log("DEFAULT PARAMETERS");
//order of default parameters is important. you can not call on a parameter if it hs not been defined
const countdown = (start: number = 10, end: number = start - 5):void => {
    while(start > 0){
        start --;
    }
    console.log("DONE!", start);
}

countdown();

//REST & SPREAD(...)
console.log(("REST & SPREAD"));
const numbers = [1,10,99,-5];
console.log(Math.max(33,99,5,-3))

//spread operator
console.log(Math.max(...numbers));

//Rest operator (...)

function makeArray(name: string, ...args: number[]){
    return args;
}
console.log(makeArray("MAX", 1,2,3,4,5));

//Destructuring
console.log("DESTRUCTURING");
const myHobbies = ["COOKING","SPORTS"];
//let hobby1 = myHobbies[0]; //pre es6 syntax
//let hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies; // destructuring an array. makes it easy to get values out of an array
console.log(hobby1, hobby2);

const user = { userName: "Patrick", age: "31"};;
// const userName = user.username;
// const age = user.age;
//destructuring object default
const {userName, age }= user;
console.log(userName, age);
//destructuring object with alias
const { userName: myRName, age: myRAge} = user;
console.log(myRName, myRAge);
//Template Literals
console.log("Template Literals");
const usrName = "Kema";
const greeting = `This is a heading!
I'm ${usrName}.
This is cool.
`;
console.log(greeting);

/* Symbols, Iterators and Generators  FIND OUT MORE!!*/
console.log("FIND OUT MORE ABOUT SYMBOLS, ITERATORS AND GENERATORS");



