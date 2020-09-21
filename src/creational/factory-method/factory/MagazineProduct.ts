import { IProduct } from "./IProduct";

export class MagazineProduct implements IProduct {
    public operation(): string {
        return '{Result of the MagazineProduct}';
    }
}