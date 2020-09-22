"use strict";
exports.__esModule = true;
exports.WordsCollection = void 0;
var AlphabeticalOrderIterator_1 = require("./Iterators/AlphabeticalOrderIterator");
var SizeOrderIterator_1 = require("./Iterators/SizeOrderIterator");
var WordsCollection = /** @class */ (function () {
    function WordsCollection() {
        this.items = [];
    }
    WordsCollection.prototype.getItems = function () {
        return this.items;
    };
    WordsCollection.prototype.getCount = function () {
        return this.items.length;
    };
    WordsCollection.prototype.addItem = function (item) {
        this.items.push(item);
    };
    WordsCollection.prototype.getIterator = function () {
        return new AlphabeticalOrderIterator_1.AlphabeticalOrderIterator(this);
    };
    WordsCollection.prototype.getReverseIterator = function () {
        return new SizeOrderIterator_1.SizeOrderIterator(this, true);
    };
    return WordsCollection;
}());
exports.WordsCollection = WordsCollection;
