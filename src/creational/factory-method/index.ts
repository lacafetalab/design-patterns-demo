import { AbstractCreator } from "./factory/abstractCreator";
import { MagazineCreator } from "./factory/creators/MagazineCreator";
import { BookCreator } from "./factory/creators/BookCreator";

export const executeFactoryMethod = () => {
    const clientCode = (creator: AbstractCreator) => {
        // ...
        console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
        console.log(creator.someOperation());
        // ...
    }
    
    /**
     * The Application picks a creator's type depending on the configuration or
     * environment.
     */
    console.log('App: Launched with the MagazineCreator.');
    clientCode(new MagazineCreator());
    console.log('');
    
    console.log('App: Launched with the BookCreator.');
    clientCode(new BookCreator());
}