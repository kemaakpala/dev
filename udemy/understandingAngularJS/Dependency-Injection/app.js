var Person = function(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
};

/* we pass the argument person into the function to create dependency injection */
function logPerson(){
   /*this is wrong and causes the logPerson to be dependent on the variable john below. 
   if we had to make any changes we would have to do it in here*/
   var john = new Person('John', 'Doe'); 
    console.log(john);
}


function logPerson2(person){
    console.log(person);
}

/*this way we can manipulate john in whatever way we want and not be restricted to the logPerson function*/
var john = new Person('john', 'Doe');
logPerson2(john);

var john2 = {firstname: 'john', lastname: 'Doe'};
logPerson2(john2);