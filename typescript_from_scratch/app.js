"use strict";
define("math/circleMath", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //circleMath.ts
    exports.PI = 3.14;
    function calculateCircumference(diameter) {
        return diameter * exports.PI;
    }
    exports.calculateCircumference = calculateCircumference;
});
define("math/rectangleMath", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //rectangleMath.ts
    function calculateRectangle(width, length) {
        return width * length;
    }
    exports.calculateRectangle = calculateRectangle;
});
define("app", ["require", "exports", "math/circleMath", "math/rectangleMath"], function (require, exports, circleMath_1, rectangleMath_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // var PI = 2.99;
    console.log('myMath.Circle.calculateCircumferece: ' + circleMath_1.calculateCircumference(10));
    console.log('myMath.calulateRectangle: ' + rectangleMath_1.calculateRectangle(10, 20));
    console.log("PI: " + circleMath_1.PI);
});
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
//namespace.ts
//var CircleMath = MyMath.Circle; 
