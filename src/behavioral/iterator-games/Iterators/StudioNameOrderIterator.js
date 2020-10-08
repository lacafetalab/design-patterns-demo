"use strict";
exports.__esModule = true;
exports.StudioNameOrderIterator = void 0;
var StudioNameOrderIterator = /** @class */ (function () {
    function StudioNameOrderIterator(collection) {
        this.position = 0;
        this.collection = collection;
    }
    StudioNameOrderIterator.prototype.rewind = function () {
        this.position = 0;
    };
    StudioNameOrderIterator.prototype.current = function () {
        return this.collection.getItems().sort(function (a, b) {
            if (a.studio.name < b.studio.name) {
                return -1;
            }
            if (a.studio.name > b.studio.name) {
                return 1;
            }
            return 0;
        })[this.position];
    };
    StudioNameOrderIterator.prototype.key = function () {
        return this.position;
    };
    StudioNameOrderIterator.prototype.next = function () {
        var item = this.collection.getItems().sort(function (a, b) {
            if (a.studio.name < b.studio.name) {
                return -1;
            }
            if (a.studio.name > b.studio.name) {
                return 1;
            }
            return 0;
        })[this.position];
        this.position += 1;
        return item;
    };
    StudioNameOrderIterator.prototype.valid = function () {
        return this.position < this.collection.getCount();
    };
    return StudioNameOrderIterator;
}());
exports.StudioNameOrderIterator = StudioNameOrderIterator;
