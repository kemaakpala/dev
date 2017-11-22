System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PI, calculateCircumference;
    return {
        setters: [],
        execute: function () {
            exports_1("PI", PI = 3.14);
            exports_1("calculateCircumference", calculateCircumference = function (diameter) {
                return diameter * PI;
            });
        }
    };
});
