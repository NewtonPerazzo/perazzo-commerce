
import { IProduct } from "@/models/product/product";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "../productState";

export const setProductByIDAction = (
  state: IProductsState,
  action: PayloadAction<IProduct>
) => {
  state.product = action.payload;
};
