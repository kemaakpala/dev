// Exercise 1 - ()=>{} arro function
const double = (value: number): number => value * 2;

console.log(double(10));
 
// Exercise 2 - default values
const greet1 = (name: string = "patrick"): void => console.log(`Hello, ${name}`);
greet1();
greet1("Anna");
 
// Exercise 3 -  '...' Spread Operator
const numbers2 = [-3, 33, 38, 5];
console.log(Math.min(...numbers2));
 
// Exercise 4 -  '...' Spread Operator
// const newArray = [55, 20];
// newArray.push(...numbers);
// console.log(newArray);
 
// Exercise 5 - Destructuring Arrays
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);
 
// Exercise 6 - Destructuring Objects
const scientist = {firstName: "Will", experience: 12};
const {firstName, experience} = scientist;
console.log(firstName, experience);