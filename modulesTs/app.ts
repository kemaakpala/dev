//import { PI, calculateCircumference } from "./math/circle";
//import { calculateRectangle } from "./math/rectangle";
import * as Circle from "./math/circle";
import calcRect from "./math/rectangle"; //syntax for default import

// console.log(PI);
// console.log(calculateCircumference(10));
console.log(Circle.PI);
console.log(Circle.calculateCircumference(10));
console.log('calculateArc: ',Circle.calculateArc(20));
//console.log(calculateRectangle(4,3));
console.log(calcRect(4,3));
