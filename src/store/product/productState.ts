import { IProduct } from "@/models/product/product";

export interface IProductsState {
  items: IProduct[];
  product: IProduct;
  loading: boolean;
}

export const initialState: IProductsState = {
  items: [],
  product: {} as IProduct,
  loading: false
};
