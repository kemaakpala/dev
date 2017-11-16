define("math/circle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PI = 3.14;
    exports.calculateCircumference = function (diameter) {
        return diameter * exports.PI;
    };
});
define("math/rectangle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var calculateRectangle = function (width, length) {
        return width + length;
    };
    exports.calculateRectangle = calculateRectangle;
});
define("app", ["require", "exports", "math/circle", "math/rectangle"], function (require, exports, circle_1, rectangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(circle_1.PI);
    console.log(circle_1.calculateCircumference(10));
    console.log(rectangle_1.calculateRectangle);
});
