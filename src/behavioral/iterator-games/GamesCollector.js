"use strict";
exports.__esModule = true;
exports.GamesCollector = void 0;
var GameNameOrderIterator_1 = require("./Iterators/GameNameOrderIterator");
var StudioNameOrderIterator_1 = require("./Iterators/StudioNameOrderIterator");
var GamesCollector = /** @class */ (function () {
    function GamesCollector() {
        this.items = [];
    }
    GamesCollector.prototype.getItems = function () {
        return this.items;
    };
    GamesCollector.prototype.getCount = function () {
        return this.items.length;
    };
    GamesCollector.prototype.addItem = function (item) {
        this.items.push(item);
    };
    GamesCollector.prototype.getNameIterator = function () {
        return new GameNameOrderIterator_1.GameNameOrderIterator(this);
    };
    GamesCollector.prototype.getStudioNameIterator = function () {
        return new StudioNameOrderIterator_1.StudioNameOrderIterator(this);
    };
    return GamesCollector;
}());
exports.GamesCollector = GamesCollector;
