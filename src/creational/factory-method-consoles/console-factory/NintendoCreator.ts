import { NintendoProduct } from "../consoles/NintendoProduct";
import { AbstractCreator } from "./AbstractCreator";
import { IConsole } from "./IConsole";

export class NintendoCreator extends AbstractCreator {
    public factoryMethod(): IConsole {
        return new NintendoProduct();
    }
}
