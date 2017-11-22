System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var calculateRectangle;
    return {
        setters: [],
        execute: function () {
            calculateRectangle = function (width, length) {
                return width + length;
            };
            exports_1("default", calculateRectangle);
        }
    };
});
