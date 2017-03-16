var person = {
  firstname: 'Default',
  lastname: 'Default',
  getFullName: function(){
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: 'Doe'
}

//Never do this on a production environment!!
//this will cause performace issues. it'll slow down your application tremendously
john.__proto__= person;
console.log(john.getFullName());
console.log(john.firstname);


var demee = {
  firstname: 'Demee'
}

demee.__proto__ = person;
console.log(demee.getFullName());


//Everything is an object except primitives
var a = {};
var b = function() {};
var c = [];
