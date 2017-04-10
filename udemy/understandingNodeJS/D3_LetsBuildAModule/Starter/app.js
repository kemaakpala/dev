// Your Javascript Code Goes Here

// Note: The 'starter' folders that appear in this course's downloadable source code is here to give you a starting point to try out coding yourself. The 'finished' folder contains the code as it is when we finish the lecture. You can use the 'finished' folder to compare to your own code, or just examine the finished code.
//require works like include
var greet = require('./greet'); // you do not need to ad .js extension node knows!!

// you cannot access greet() by default you would need to export the function to make it available in app.js
greet();