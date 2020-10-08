"use strict";
exports.__esModule = true;
exports.executeFactoryMethod = void 0;
var NintendoCreator_1 = require("./console-factory/NintendoCreator");
var SonyCreator_1 = require("./console-factory/SonyCreator");
exports.executeFactoryMethod = function () {
    var clientCode = function (creator) {
        // ...
        console.log('No se que consola sea solo quiero jugar');
        console.log(creator.getExclusives());
        creator.playWithConsole();
        console.log('Estuvo divertido');
        // ...
    };
    /**
     * The Application picks a creator's type depending on the configuration or
     * environment.
     */
    console.log('Juguemos con Nintendo.');
    clientCode(new NintendoCreator_1.NintendoCreator());
    console.log('');
    console.log('Juguemos con Sony.');
    clientCode(new SonyCreator_1.SonyCreator());
};
