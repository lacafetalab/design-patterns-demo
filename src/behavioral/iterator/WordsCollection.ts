import { AlphabeticalOrderIterator } from "./Iterators/AlphabeticalOrderIterator";
import {IAggregator} from "./Agregator/IAgregator";
import { IIterator } from "./Agregator/IIterator";
import { SizeOrderIterator } from "./Iterators/SizeOrderIterator";

export class WordsCollection implements IAggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): IIterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): IIterator<string> {
        return new SizeOrderIterator(this, true);
    }
}