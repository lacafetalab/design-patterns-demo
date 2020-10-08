"use strict";
exports.__esModule = true;
exports.Games = void 0;
var GameNameOrderIterator_1 = require("./Iterators/GameNameOrderIterator");
var StudioNameOrderIterator_1 = require("./Iterators/StudioNameOrderIterator");
var Games = /** @class */ (function () {
    function Games() {
        this.items = [];
    }
    Games.prototype.getItems = function () {
        return this.items;
    };
    Games.prototype.getCount = function () {
        return this.items.length;
    };
    Games.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Games.prototype.getNameIterator = function () {
        return new GameNameOrderIterator_1.GameNameOrderIterator(this);
    };
    Games.prototype.getStudioNameIterator = function () {
        return new StudioNameOrderIterator_1.StudioNameOrderIterator(this);
    };
    return Games;
}());
exports.Games = Games;
