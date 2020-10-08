import { IIterator } from "../Agregator/IIterator";
import { Games } from "../Games";
import { IGames } from "../IGames";

export class GameNameOrderIterator implements IIterator<IGames> {
    private collection: Games;
    private position: number = 0;

    constructor(collection: Games) {
        this.collection = collection;
    }

    public rewind() {
        this.position = 0;
    }

    public current(): IGames {
        return this.collection.getItems().sort((a: IGames, b: IGames) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): IGames {
        const item = this.collection.getItems().sort((a: IGames, b: IGames) => {
            if(a.name < b.name) { return -1; }
            if(a.name > b.name) { return 1; }
            return 0;
        })[this.position];
        this.position +=  1;
        return item;
    }

    public valid(): boolean {
        return this.position < this.collection.getCount();
    }
}
