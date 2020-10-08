"use strict";
exports.__esModule = true;
var singleton_1 = require("./creational/singleton");
var factory_method_consoles_1 = require("./creational/factory-method-consoles");
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
factory_method_consoles_1.executeFactoryMethod();
// executeIterator();
