System.register(["./utils/utilities"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var utilities_1, utils;
    return {
        setters: [
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }
        ],
        execute: function () {
            utils = new utilities_1.default();
            console.log(utils.formatString(" this is a test "));
            console.log(utilities_1.default.IdToHex(123456789));
            utils.discoLights(false, utilities_1.default.speed.fast);
        }
    };
});
