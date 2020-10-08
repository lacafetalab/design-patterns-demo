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
exports.NintendoCreator = void 0;
var NintendoProduct_1 = require("../consoles/NintendoProduct");
var AbstractCreator_1 = require("./AbstractCreator");
var NintendoCreator = /** @class */ (function (_super) {
    __extends(NintendoCreator, _super);
    function NintendoCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NintendoCreator.prototype.factoryMethod = function () {
        return new NintendoProduct_1.NintendoProduct();
    };
    return NintendoCreator;
}(AbstractCreator_1.AbstractCreator));
exports.NintendoCreator = NintendoCreator;
