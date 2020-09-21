import { IProduct } from "./IProduct";

export class BookProduct implements IProduct {
    public operation(): string {
        return '{Result of the BookProduct}';
    }
}