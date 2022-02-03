import { Result } from "./request-response-product";

export class ProductModel {
    id: string;
    title: string;
    thumbnail: string;
    percentageDiscount: string;
    price: number;
    priceDiscount: number;

    constructor(
        id: string,
        title: string,
        thumbnail: string,
        percentageDiscount: string,
        price: number,
        priceDiscount: number,
    ) {
        this.id = id;
        this.title = title;
        this.thumbnail = thumbnail;
        this.percentageDiscount = percentageDiscount;
        this.price = price;
        this.priceDiscount = priceDiscount;

    }

    static productFromJson(obj: Result){
        return new ProductModel(
            obj.id,
            obj.title,
            obj.thumbnail,
            '12%',
            obj.price,
            obj.price,
        );
    }
}