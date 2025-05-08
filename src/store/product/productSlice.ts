import { createSlice } from "@reduxjs/toolkit";
import { setProductsAction } from "./actions/set-products.action";
import { setProductByIDAction } from "./actions/set-product-by-id.action";
import { initialState } from "./productState";
import { fetchProductByID, fetchProducts } from "./thunks/fetch-products.thunk";

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: setProductsAction,
    setProductByID: setProductByIDAction
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(fetchProductByID.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductByID.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductByID.rejected, (state) => {
        state.loading = false;
      })
      ;
  },
});

export const {
  setProducts,
  setProductByID
} = productsSlice.actions;

export default productsSlice.reducer;
