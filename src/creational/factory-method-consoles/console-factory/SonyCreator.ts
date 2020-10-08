import { SonyProduct } from "../consoles/SonyProduct";
import { AbstractCreator } from "./AbstractCreator";
import { IConsole } from "./IConsole";

export class SonyCreator extends AbstractCreator {
    public factoryMethod(): IConsole {
        return new SonyProduct();
    }
}
