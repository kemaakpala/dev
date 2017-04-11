// Your Javascript Code Goes Here

function Person(firstname, lastname){

    this.firstname = firstname;
    this.lastname = lastname

}

// the prototype is not the prototype of person but the prototype of any object created from it. e.g john, jane.
Person.prototype.greet = function(){
    console.log('Hello '+ this.firstname+' '+ this.lastname)
}
var john = new Person('john', 'Doe');
console.log(john.firstname);
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);