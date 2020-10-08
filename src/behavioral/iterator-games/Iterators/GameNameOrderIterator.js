"use strict";
exports.__esModule = true;
exports.GameNameOrderIterator = void 0;
var GameNameOrderIterator = /** @class */ (function () {
    function GameNameOrderIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    GameNameOrderIterator.prototype.rewind = function () {
        this.position = 0;
    };
    GameNameOrderIterator.prototype.current = function () {
        return this.collection.getItems().sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })[this.position];
    };
    GameNameOrderIterator.prototype.key = function () {
        return this.position;
    };
    GameNameOrderIterator.prototype.next = function () {
        var item = this.collection.getItems().sort(function (a, b) {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        })[this.position];
        this.position += 1;
        return item;
    };
    GameNameOrderIterator.prototype.valid = function () {
        return this.position < this.collection.getCount();
    };
    return GameNameOrderIterator;
}());
exports.GameNameOrderIterator = GameNameOrderIterator;
