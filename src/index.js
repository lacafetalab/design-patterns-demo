"use strict";
exports.__esModule = true;
var singleton_1 = require("./creational/singleton");
var iterator_games_1 = require("./behavioral/iterator-games");
var singletonCode = function () {
    var s1 = singleton_1.Singleton.getInstance();
    var s2 = singleton_1.Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
};
// singletonCode();
// executeFactoryMethod();
iterator_games_1.executeIterator();
