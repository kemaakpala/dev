var Student = (function () {
    function Student(firstname, middleInitial, lastname) {
        this.firstname = firstname;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(Person) {
    return "Hello " + Person.firstname + " " + Person.lastname;
}
var user = new Student('Patrick', 'K', 'Akpala');
document.body.innerHTML = greeter(user);
