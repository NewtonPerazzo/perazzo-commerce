import { ICart } from "../cart/cart";

export interface ICartStorage {
    key: string;
    cart: ICart;
}