class Person {
    name: string; //this property will be public. it'll be accessible from outside.
    private type: string; // this property is only accesible from the objects that are created based on this Person class.
    protected age: number = 31; //this property is only accessible from objects that are created based on this Person class and any other objects that inherit this object.
    
    //this refers to the class
    constructor (name: string, public username: string){
        this.name = name;
    }
    //methods that can be accessed from outside
    printAge() {
        console.log(this.age);
        this.setType("Old Guy")
    }
    //methods that can't be accessed from outside
    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
};

const person = new Person("Patrick", "patrick");
console.log(person.name, person.username);
person.printAge();
//person.setType("cool guy"); //Won't work with private method

//Inheritance
console.log("****** INHERITANCE ******");
//Inherits everything from the base class
class Patrick extends Person {
    //name = "Patrick";// name will overwrite name from Person Class
    
    constructor (username: string) {
        super("Pat", username);
        this.age = 31;
    }
}
const patrick = new Patrick( "MrPat");
console.log(patrick);

//Getters & Setters
console.log("****** GETTERS & SETTERS ******");

class Plant {
    private _species: string;

    get species () {
        return this._species;
    }

    set species(value: string) {
        if(value.length > 3){
            this._species = value;
        }else {
            this._species = "Default";
        }
    };
}

let plant = new Plant();
console.log(plant.species);
plant.species= "AB";
console.log(plant.species);
plant.species = "Green Plant";
console.log(plant.species);

//Static Properties & Methods
console.log("****** STATIC PROPERTIES & METHODS");
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number{
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));


//Abstract Classes
console.log("****** ABSTRACT CLASSES ******");

/* 
    this cannot be instantiated directly. 
    It provides a base class | Object.
    They are just meant to be inherited from.
*/
abstract class Project {
    projectName: string = "Default";
    budget: number = 1000;

    //abstract methods: you do not define any logic just the description of how that method will be executed.
    //define parameters   || define function type  
    abstract changeName(name: string): void;
    calcBudget(){
        return this.budget * 2;
    }
}
//extends abstract class: Project
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ITProject();
console.log(newProject);
newProject.changeName("Super IT Project");
console.log(newProject);

//Private Constructors
console.log("****** PRIVATE CONSTRUCTORS ******");
/* this is used to create a forced singleton, i.e it makes sure that only one instance of a class exists */
class OnlyOne {
    //define properties
    private static instance: OnlyOne;
    public readonly name: string;
    
    private constructor (name: string){
        this.name = name;
    }
    //short syntax readonly property
    //private constructor(public readonly name: string){}

    static getInstance() {
        if(!OnlyOne.instance) {
            OnlyOne.instance = new OnlyOne('The Only One');
        }
        return OnlyOne.instance;
    }
}
//let wrong = new OnlyOne('The Only One');
let right = OnlyOne.getInstance();
console.log(right.name);
//right.name = 'Something else';