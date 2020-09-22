"use strict";
exports.__esModule = true;
exports.SizeOrderIterator = void 0;
var SizeOrderIterator = /** @class */ (function () {
    function SizeOrderIterator(collection, reverse) {
        if (reverse === void 0) { reverse = false; }
        this.position = 0;
        this.reverse = false;
        this.collection = collection;
        this.reverse = reverse;
        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }
    SizeOrderIterator.prototype.rewind = function () {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    };
    SizeOrderIterator.prototype.current = function () {
        return this.collection.getItems().sort(this.compare)[this.position];
    };
    SizeOrderIterator.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var lengthA = a.length;
        var lengthB = b.length;
        var comparison = 0;
        if (lengthA > lengthB) {
            comparison = 1;
        }
        else if (lengthA < lengthB) {
            comparison = -1;
        }
        return comparison;
    };
    SizeOrderIterator.prototype.key = function () {
        return this.position;
    };
    SizeOrderIterator.prototype.next = function () {
        var item = this.collection.getItems().sort(this.compare)[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    };
    SizeOrderIterator.prototype.valid = function () {
        if (this.reverse) {
            return this.position >= 0;
        }
        return this.position < this.collection.getCount();
    };
    return SizeOrderIterator;
}());
exports.SizeOrderIterator = SizeOrderIterator;
