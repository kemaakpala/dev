interface NamedPerson {
    firstName: string;
    age?: number; // optional argument
}

function greet(person: NamedPerson) {
    console.log("Hello, "+ person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person = {
    firstName: "Max",
};

greet({firstName: "Max", age: 27});
changeName(person);
greet(person);