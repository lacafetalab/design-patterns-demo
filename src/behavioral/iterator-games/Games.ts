

import { IAggregator } from "./Agregator/IAgregator";
import { IIterator } from "./Agregator/IIterator";
import { IGames } from "./IGames";
import { GameNameOrderIterator } from "./Iterators/GameNameOrderIterator";
import { StudioNameOrderIterator } from "./Iterators/StudioNameOrderIterator";

export class Games implements IAggregator {
    private items: IGames[] = [];

    public getItems(): IGames[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: IGames): void {
        this.items.push(item);
    }

    public getNameIterator(): IIterator<IGames> {
        return new GameNameOrderIterator(this);
    }

    public getStudioNameIterator(): IIterator<IGames> {
        return new StudioNameOrderIterator(this);
    }
}