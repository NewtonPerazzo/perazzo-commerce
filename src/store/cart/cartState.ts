import { ICart } from "@/models/cart/cart";

export interface ICartState {
  cart: ICart;
  loading: boolean;
}

export const initialState: ICartState = {
  cart: {} as ICart,
  loading: false
};
