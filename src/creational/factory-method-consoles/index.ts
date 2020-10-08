import { AbstractCreator } from "./console-factory/AbstractCreator";
import { NintendoCreator } from "./console-factory/NintendoCreator";
import { SonyCreator } from "./console-factory/SonyCreator";

export const executeFactoryMethod = () => {
    const clientCode = (creator: AbstractCreator) => {
        // ...
        console.log('No se que consola sea solo quiero jugar');
        console.log(creator.getExclusives());
        creator.playWithConsole();
        console.log('Estuvo divertido');
        // ...
    }
    
    /**
     * The Application picks a creator's type depending on the configuration or
     * environment.
     */
    console.log('Juguemos con Nintendo.');
    clientCode(new NintendoCreator());
    console.log('');
    
    console.log('Juguemos con Sony.');
    clientCode(new SonyCreator());
}