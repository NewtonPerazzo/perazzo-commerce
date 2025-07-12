import { IProduct } from "../product/product";


export interface ItemCart {
  count: number;
  total: number;
  item: IProduct;
};
export interface ICart {
    id: string;
    count: number;
    total: number;
    items: ItemCart[];
}