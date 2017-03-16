function Person(firstname, lastname, street, postcode, country) {

    console.log(this);
    this.firstname = firstname;
    this.lastname = lastname;
    this.street = street;
    this.postcode = postcode;
    this.country = country;
    console.log('This function is invoked.');

}

Person.prototype.getFullName = function (){
  return this.firstname + ' '+ this.lastname;
}

var john = new Person("John", "Doe", "neal's yard");
console.log(john);

var jane = new Person('Jane', 'Doe');
console.log(jane);

var patrick = new Person('Patrick', 'Akpala', '105 manor way', 'HA4 8HW', 'United Kingdom')

Person.prototype.getFormalFullName = function (){
  return this.lastname + ', '+ this.firstname;
}
console.log(john.getFormalFullName());

Person.prototype.getAddress = function (){
  var street = this.street || '',
      postcode = this.postcode || '',
      country = this.country || '',
      address = street + ', '+ postcode + ', '+ country;

  return (address.length > 4)? address : 'N/A';

}

console.log(patrick);

var demee = Person('Demee', 'Okuette');
console.log(demee);
console.log(demee.getFullName());
