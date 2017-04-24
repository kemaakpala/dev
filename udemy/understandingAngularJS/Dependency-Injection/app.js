var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

/* we pass the argument person into the function to create dependency injection */
function logPerson(person){
   /* 
   this is wrong and causes the logPerson to be dependent on the variable john below.
   var john = new Person('John', 'Doe'); */
    console.log(john);
}

/*this way we can manipulate john in whatever way we want and not be restricted to the logPerson function*/
var john = new Person('john', 'Doe');
logPerson(john);