//this is a contract that can be signed or used as a type.
interface NamedPerson {
    firstName: string;
    age?: number; // optional argument
    [propName: string]: any; /* this is not an array. It is a flexible property. 
                                Use this when you do not know the name or type of the property.*/
    greet (lastName: string): void; //method
}

function greet(person: NamedPerson) {
    console.log("Hello, "+ person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna";
}

const person: NamedPerson = {
    firstName: "Max",
    hobbies: ["cooking", "sports"],
    greet(lastName: string){
        console.log("Hi, I am "+ this.firstName + " "+lastName);
    }
};

//greet({firstName: "Max", age: 27});
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
}

const myPerson = new Person();
myPerson.firstName = "Maximilian";
myPerson.lastName = "Okuette";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function Types

interface DoubleValueFunc {
    (number1: number, number2: number) : number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (number1: number, number2: number) {
    return (number1 + number2) * 2;
};

console.log(myDoubleFunction(10,20));

//Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {
    age: 27, //this becomes compulsory as the AgedPerson overwrites the optional age property.
    firstName: "Max",
    greet(lastName: string){
        console.log("Hello!");
    }
}

console.log(oldPerson);