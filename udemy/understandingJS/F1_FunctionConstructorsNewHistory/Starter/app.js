//this is a function constructor
function Person(firstname, lastname){
  console.log(this);// by using new operator 'this' returns the object and not the global scope
  this.firstname = firstname;
  this.lastName = lastname;
  console.log('This function is invoked.');
  //return {greeting: 'i got in the way'} //this would get in the way of returning an object
}

var patrick = new Person('Patrick', 'Akpala');
console.log(patrick);

var demee = new Person('Demee', 'Okuette');
console.log(demee);
