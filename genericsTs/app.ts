//Simple Generic
function echo(data: any){
    return data;
}
//the problem with this is that typescript does not know what type operations should be attached to data passed.
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age:27}));

// Better Generic
//this allows you to have any type passed into the function and also allow typescript to attach the right type operations to the function.
function betterEcho <T>(data: T){
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27).toString(16));
console.log(betterEcho({ name: "Max", age: 27 }).name);

// Built-in Generics
const testResults: Array<number> = [1.94, 3.65]; //explicit type arrays
testResults.push(-2.99);
console.log(testResults);

// Arrays

function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element))
}
printAll<string>(["Apple", "Banana"]);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho; //<T>(data: T) => T this is a function type

console.log( echo2("Something"));

//Generic Class
class SimpleMath <T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath <string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());