console.log( "****** Exercise Two ******" );
// Exercise 1 - Maybe use an Arrow Function?
//solution: arrow function
// let double = (value: number):number => {
//     return value * 2;
// };
//solution: short syntax arrow function
let double = (value: number):number => value * 2;
console.log(double(10));
 
// Exercise 2 - If only we could provide some default values...
//solution: default parameters
let greeet = (name:string ="Patrick"):void => {
    console.log("Hello, " + name);
};
greeet();
greeet("Anna");
 
// Exercise 3 - Isn't there a shorter way to get all these Values?
//solution : Spred Operator
var numbeers:number[] = [-3, 33, 38, 5];
console.log(Math.min(...numbeers));
 
// Exercise 4 - I have to think about Exercise 3 ...
//solution : Spread Operator
var newArray = [55, 20];
// Array.prototype.push.apply(newArray, numbeers);
// console.log(newArray);
newArray.push(...numbeers);
console.log(newArray);
 

// Exercise 5 - That's a well-constructed array.
//solution: Destructuring Arrays
var testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - And a well-constructed object!
//solution: Destructuring Objects
var scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);