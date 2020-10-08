"use strict";
exports.__esModule = true;
exports.AbstractCreator = void 0;
var AbstractCreator = /** @class */ (function () {
    function AbstractCreator() {
    }
    AbstractCreator.prototype.getExclusives = function () {
        var console = this.factoryMethod();
        return "La consola " + console.name() + " tiene " + console.exclusives() + " juegos exclusivos";
    };
    AbstractCreator.prototype.playWithConsole = function () {
        this.factoryMethod().play();
        ;
    };
    return AbstractCreator;
}());
exports.AbstractCreator = AbstractCreator;
