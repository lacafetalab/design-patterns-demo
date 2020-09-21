"use strict";
exports.__esModule = true;
exports.AbstractCreator = void 0;
var AbstractCreator = /** @class */ (function () {
    function AbstractCreator() {
    }
    AbstractCreator.prototype.someOperation = function () {
        var product = this.factoryMethod();
        return "Creator: The same creator's code has just worked with " + product.operation();
    };
    return AbstractCreator;
}());
exports.AbstractCreator = AbstractCreator;
