
import { PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "@/models/cart/cart";
import { ICartState } from "../cartState";

export const setCartAction = (
  state: ICartState,
  action: PayloadAction<ICart>
) => {
  state.cart = action.payload;
};
