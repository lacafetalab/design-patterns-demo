"use strict";
exports.__esModule = true;
exports.executeIterator = void 0;
var GamesCollector_1 = require("./GamesCollector");
exports.executeIterator = function () {
    var collection = new GamesCollector_1.GamesCollector();
    collection.addItem({
        id: 1,
        name: "Among Us",
        studio: {
            name: 'Innersloth',
            games: 3
        }
    });
    collection.addItem({
        id: 2,
        name: "The Last of Us",
        studio: {
            name: 'Naughty Dog',
            games: 5
        }
    });
    collection.addItem({
        id: 3,
        name: "Tetris",
        studio: {
            name: 'Un ruso',
            games: 1
        }
    });
    collection.addItem({
        id: 4,
        name: "Injustice: Gods Among Us",
        studio: {
            name: 'Warner Bros',
            games: 10
        }
    });
    collection.addItem({
        id: 5,
        name: "Star Craft",
        studio: {
            name: 'Blizzard',
            games: 15
        }
    });
    var iterator = collection.getStudioNameIterator();
    console.log('Orden por estudio:');
    while (iterator.valid()) {
        console.log(iterator.next().studio.name);
    }
    console.log('');
    console.log('Orden por nomnbre de juego:');
    var reverseIterator = collection.getNameIterator();
    while (reverseIterator.valid()) {
        console.log(reverseIterator.next().name);
    }
};
