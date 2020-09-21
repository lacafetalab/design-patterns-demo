"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.BookCreator = void 0;
var AbstractCreator_1 = require("../AbstractCreator");
var BookProduct_1 = require("../BookProduct");
var BookCreator = /** @class */ (function (_super) {
    __extends(BookCreator, _super);
    function BookCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BookCreator.prototype.factoryMethod = function () {
        return new BookProduct_1.BookProduct();
    };
    return BookCreator;
}(AbstractCreator_1.AbstractCreator));
exports.BookCreator = BookCreator;
