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
exports.MagazineCreator = void 0;
var AbstractCreator_1 = require("../AbstractCreator");
var MagazineProduct_1 = require("../MagazineProduct");
var MagazineCreator = /** @class */ (function (_super) {
    __extends(MagazineCreator, _super);
    function MagazineCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MagazineCreator.prototype.factoryMethod = function () {
        return new MagazineProduct_1.MagazineProduct();
    };
    return MagazineCreator;
}(AbstractCreator_1.AbstractCreator));
exports.MagazineCreator = MagazineCreator;
