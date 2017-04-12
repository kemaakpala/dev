var person = {
    firstname: '',
    lastname: '',
    greet: function(){
        return this.firstname+ ' '+ this.lastname;
    }
}

var john = Object.create(person);// this is an object constructor. it basically creates an empty john object and then inherits the properties and methods of the person object.
john.firstname = 'john';
john.lastname = 'Doe';

var jane = Object.create(person);
jane.firstname = 'jane';
jane.lastname = 'Doe';

console.log(john.greet());
console.log(jane.greet());