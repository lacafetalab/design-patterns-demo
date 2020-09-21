import {IProduct} from '../IProduct';
import {AbstractCreator} from '../AbstractCreator';
import { BookProduct } from '../BookProduct';

export class BookCreator extends AbstractCreator {

    public factoryMethod(): IProduct {
        return new BookProduct();
    }
}
