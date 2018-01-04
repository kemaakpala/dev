/* decorators are functions we can add to classes */
function logged(constructorFn: Function) {
    console.log(constructorFn);

}

@logged
class Person {
    constructor() {
        console.log('hi');
    }
}


// Factory
function logging(value: boolean) {
    return value ? logged : null;
}
//Adavanced 
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);

    }
}

@printable
@logging(true);
class Plant {
    name = "Green Plant";
}

const plant = new Plant();
(<any> plant).print();

// Method Decorator
function editable(value:boolean){
    return function(target: any, propName: string, descriptor: PropertyDescriptor){
        descriptor.writable = value;   
    }
}

class Project {
    projectName: string;
    constructor(name: string){
        this.projectName= name;
    }
    @editable(false)
    calcBudget () {
        console.log(1000);
    }
}

const project = new Project("super Project");
project.calcBudget();
project.calcBudget = function (){
    console.log(2000);
};
project.calcBudget();