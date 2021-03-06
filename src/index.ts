import { Singleton } from "./creational/singleton";
import { executeFactoryMethod } from "./creational/factory-method-consoles";
import { executeIterator } from "./behavioral/iterator-games";
import executeStrategy from "./behavioral/strategy";

const singletonCode = () => {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

// singletonCode();
// executeFactoryMethod();
// executeIterator();
executeStrategy();