'use strict';
class Person {
    // this will get added to each object created.
    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    //methods in class get added to the prototype
    greet(){
        console.log('Hello, '+ this.firstname + ' '+ this.lastname);
    }
}


var john = new Person('John', 'Doe');
john.greet();

var jane = new Person('Jane', 'Doe');
jane.greet();

console.log(john.__proto__());
console.log(jane.__proto__());
console.log(jane.__proto__());