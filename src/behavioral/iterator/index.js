"use strict";
exports.__esModule = true;
exports.executeIterator = void 0;
var WordsCollection_1 = require("./WordsCollection");
exports.executeIterator = function () {
    var collection = new WordsCollection_1.WordsCollection();
    collection.addItem('First');
    collection.addItem('Second');
    collection.addItem('Third');
    var iterator = collection.getIterator();
    console.log('Straight traversal:');
    while (iterator.valid()) {
        console.log(iterator.next());
    }
    console.log('');
    console.log('Reverse traversal:');
    var reverseIterator = collection.getReverseIterator();
    while (reverseIterator.valid()) {
        console.log(reverseIterator.next());
    }
};
