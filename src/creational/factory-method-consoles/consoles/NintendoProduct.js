"use strict";
exports.__esModule = true;
exports.NintendoProduct = void 0;
var NintendoProduct = /** @class */ (function () {
    function NintendoProduct() {
    }
    NintendoProduct.prototype.name = function () {
        return 'Nintendo';
    };
    NintendoProduct.prototype.exclusives = function () {
        return 25;
    };
    NintendoProduct.prototype.play = function () {
        return console.log('Nintendero jugando');
    };
    return NintendoProduct;
}());
exports.NintendoProduct = NintendoProduct;
