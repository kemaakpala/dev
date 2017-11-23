System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UTILITIES;
    return {
        setters: [],
        execute: function () {
            UTILITIES = /** @class */ (function () {
                function UTILITIES() {
                }
                //text: string;
                // id: number;
                // constructor(text:string) {
                //     this.text = text;
                //     // this.id =id;
                // }
                UTILITIES.prototype.formatString = function (text) {
                    var value = text.trim();
                    return value;
                };
                UTILITIES.IdToHex = function (id) {
                    var HexString = id.toString(16);
                    if (HexString.length > 6) {
                        HexString = HexString.substr(0, 6);
                    }
                    return "#" + HexString;
                };
                UTILITIES.prototype.discoLights = function (bool, speed) {
                    if (bool === void 0) { bool = true; }
                    if (speed === void 0) { speed = UTILITIES.speed.slow; }
                    if (bool) {
                        var p = setInterval(function () {
                            var randNumber = Math.floor(Math.random() * 10e7);
                            var hexString = UTILITIES.IdToHex(randNumber);
                            console.log(hexString);
                            document.body.style.cssText = "background-color: " + hexString;
                        }, speed);
                    }
                };
                UTILITIES.speed = { slow: 600, fast: 400 };
                return UTILITIES;
            }());
            exports_1("default", UTILITIES);
        }
    };
});
