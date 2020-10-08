import { IGames } from "../IGames";
import { IIterator } from "./IIterator";

export interface IAggregator {
    getNameIterator(): IIterator<IGames>;
    getStudioNameIterator(): IIterator<IGames>;
}