System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function calculateCircumference(diameter) {
        return diameter * PI;
    }
    exports_1("calculateCircumference", calculateCircumference);
    function calculateRadius(diameter) {
        return diameter / 2;
    }
    exports_1("calculateRadius", calculateRadius);
    function calculatePI(circumference, diameter) {
        return circumference / diameter;
    }
    exports_1("calculatePI", calculatePI);
    function calculateArc(diameter) {
        return PI * diameter / 2;
    }
    exports_1("calculateArc", calculateArc);
    var PI;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
        }
    };
});
