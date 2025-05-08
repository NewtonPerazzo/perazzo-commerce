import { IProductCart } from "../product/product";

export interface ICart {
    id: string;
    items: IProductCart[];
    totalValue: number;
}