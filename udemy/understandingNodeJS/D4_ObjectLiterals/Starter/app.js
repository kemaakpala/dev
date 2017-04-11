// Your Javascript Code Goes Here
var person = {
  firstName: 'John',
  lastName: 'Doe',
  greet: function(){
    console.log(this.firstName + ' ' + this.lastName);
  }
};

person.greet();
console.log(person['firstName']);
