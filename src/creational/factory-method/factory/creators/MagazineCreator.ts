import { AbstractCreator } from "../AbstractCreator";
import { IProduct } from "../IProduct";
import { MagazineProduct } from "../MagazineProduct";

export class MagazineCreator extends AbstractCreator {
    public factoryMethod(): IProduct {
        return new MagazineProduct();
    }
}
