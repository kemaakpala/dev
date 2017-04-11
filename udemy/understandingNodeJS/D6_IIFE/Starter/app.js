// Your Javascript Code Goes Here
//set in global scope.
var firstname = 'Jane';

(function(lastname){
    //set in function scope // local scope
    var firstname = 'John';
    console.log(firstname); //result John, this is due to scope the firstname is with in the IIFE and thus it is in a different scope, which allows it to be separated from the firstname that is created in the global scope.
    console.log(lastname);
}('Doe'));

console.log(firstname);// reuslt jane