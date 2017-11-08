//string
let myName: string = 'Kema';
//myName = 28;

let myAge: number = 27;
//myAge = 'patrick'

//boolean
let hasHobbies: boolean = false;
//hasHobbies = 1;

let myRealAge: number;
myRealAge = 27;
//myRealAge = '27';

//any allows for any type to be added to the array
let hobbies: any[] = ['videogames', 'reading'];
hobbies = [100];

//tuples: arrays with mixed types
let address:[string, number] = ["Superstreet", 90];

//enum: this makes numbers more expressive
//it allows you to create custom types
//enums always increment by 1 1.e if you set Green to 100, Blue will be 101
//it'll always look at the preceding / last item in front of it.
//enums can also be set to string...once set to string it'll loose it's ability to increment the next item.
enum Color {
    Gray, //0
    Green = 100,//1
    Blue //2
}
let myColor: Color = Color.Blue;
console.log(myColor);

let car: any = "BMW";
console.log(car);
car = {brand: "BMW", series: 3};
console.log(car);

// functions
function returnMyName (): string { //function returnMyName ():string => the type here only referes to the value returned by the function and not arguments with in the function
 return myName;
}
console.log(returnMyName());

//void
function sayHello (): void { //void type does not allow a function to return a value. as the function is created not to return anything
    console.log("Hello");
}

//argument types
function multiply(value1: number, value2: number): number {
    return value1 * value2;
}
console.log(multiply(2, 10));

//function types 
let myMultiply: (val1 :number, val2: number) => number;
// myMultiply = sayHello;
// console.log(myMultiply());
myMultiply = multiply;
console.log(myMultiply(5,2));

//objects: name of properties must match
let userData: {name: string, age: number} = {
    name: "Patrick",
    age: 31
}

//complex object
let complex: {data: number[], output: (all: boolean)=> number[]} = {
    data: [100,3.09,10],
    output: function(all: boolean): number[] {
        return this.data;
    }
};
//complex ={};
//alias type
type Complex = {data: number[], output: (all: boolean)=> number[]}; 
let complex2: Complex = {
    data: [100,3.99,10],
    output: function (all: boolean): number[] {
        return this.data;
    }
};

 //union types
 let bool = false;
 let myRealRealAge: number | string = 27;
 //myRealRealAge = "27";
 //myRealRealAge = false;
 console.log(myRealRealAge);

 //check types
 let finalValue = 31;
 if(typeof finalValue == "number"){
    console.log('finalValue is a number'); 
 }

 //never type
 function neverReturns():never {
     throw new Error("An Error");
     //return 'this string'; this will cause an error 
     //error details: Type '"this string"' is not assignable to type 'never'. 
 }

 //Nullable Types
 let canBeNull: number | null = 12;
 console.log('canBeNull: ', canBeNull);
 
 let canAlsoBeNull;// has no type at the point of initial declaration
 canAlsoBeNull = 15;// this is basicaly the same as the above but just on one line.
 console.log('canAlsoBeNull: ', canAlsoBeNull);

 let canThisBeNull = null; // this should be implicitly of type null: further investigation required as to why it is not.
 canThisBeNull = 3;
 console.log(canThisBeNull);