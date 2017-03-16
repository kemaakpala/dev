//polyfill for Object.create()
if(!Object.create){
  Object.create = function (o){
    if(arguments.length > 1){
      throw new Error('Object.create implementation' + ' only accepts the first parameter.')
    }
    function F(){}
    F.prototype = o;
    return new F();
  };
}

var person = {
  firstname : 'Default',
  lastname : 'Default',
  greet: function(){
    return 'Hi '+ this.firstname;
  }
}

var patrick = Object.create(person);
patrick.firstname = 'patrick';
patrick.lastname = 'Akpala';
console.log(patrick);


class Person {
  constructor(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet(){
    return 'Hi '+ firstname;
  }
}

class InformalPerson extends Person{
  constructor(firstname, lastname){
    super(firstname, lastname);
  }
  greet(){
    return 'Yo '+ firstname;
  }
}

var john = new Person('John', 'Doe');
var jane = new InformalPerson('Jane', 'Doe');

console.log(john);
console.log(jane);
