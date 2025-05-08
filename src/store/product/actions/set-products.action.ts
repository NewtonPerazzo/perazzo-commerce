
import { IProduct } from "@/models/product/product";
import { PayloadAction } from "@reduxjs/toolkit";
import { IProductsState } from "../productState";

export const setProductsAction = (
  state: IProductsState,
  action: PayloadAction<IProduct[]>
) => {
  state.items = action.payload;
};
