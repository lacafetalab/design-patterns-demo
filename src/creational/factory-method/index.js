"use strict";
exports.__esModule = true;
exports.executeFactoryMethod = void 0;
var MagazineCreator_1 = require("./factory/creators/MagazineCreator");
var BookCreator_1 = require("./factory/creators/BookCreator");
exports.executeFactoryMethod = function () {
    var clientCode = function (creator) {
        // ...
        console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
        console.log(creator.someOperation());
        // ...
    };
    /**
     * The Application picks a creator's type depending on the configuration or
     * environment.
     */
    console.log('App: Launched with the MagazineCreator.');
    clientCode(new MagazineCreator_1.MagazineCreator());
    console.log('');
    console.log('App: Launched with the BookCreator.');
    clientCode(new BookCreator_1.BookCreator());
};
