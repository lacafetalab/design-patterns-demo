"use strict";
exports.__esModule = true;
exports.SonyProduct = void 0;
var SonyProduct = /** @class */ (function () {
    function SonyProduct() {
    }
    SonyProduct.prototype.name = function () {
        return 'PS5';
    };
    SonyProduct.prototype.exclusives = function () {
        return 4;
    };
    SonyProduct.prototype.play = function () {
        return console.log('Aun no disponible');
    };
    return SonyProduct;
}());
exports.SonyProduct = SonyProduct;
