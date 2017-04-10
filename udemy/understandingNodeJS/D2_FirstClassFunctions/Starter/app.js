// Your Javascript Code Goes Here

function greet(){
    console.log('hi');
}
greet();

//funcitons are first-class
function logGreeting(fn){
    fn();// invokes function
}
logGreeting(greet);

//function expression
var greetMe = function(){
    console.log('Hi Tony');
}
greetMe();
logGreeting(greetMe);

//use a funcion expression on the fly
logGreeting(function(){
    console.log('Hello Tony');
})