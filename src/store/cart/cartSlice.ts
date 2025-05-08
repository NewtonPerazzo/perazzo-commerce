import { createSlice } from "@reduxjs/toolkit";
import { setCartAction } from "./actions/set-cart.action";
import { fetchCart } from "./thunks/fetch-cart.thunk";
import { initialState } from "./cartState";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: setCartAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
      });
  },
});

export const {
  setCart
} = cartSlice.actions;

export default cartSlice.reducer;
