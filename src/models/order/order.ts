import { ICart } from "../cart/cart";
import { IUser } from "../user/user";

export interface IOrder {
    id: string;
    cart: ICart;
    user: IUser;
    isToDeliver: boolean;
    date: string;
    observation?: string;
}