//the revealing module pattern
/* This is when we expose only the properties and methods you want via a returned Object. 
it is a way to make the module useful while protecting it's contents */
var greeting = "Hello World !!!!";

function greet(){
    console.log(greeting);
}

module.exports = {
    greet: greet
}