import { createSlice } from "@reduxjs/toolkit";
import { setOrderAction } from "./actions/set-order.action";
import { fetchOrder } from "./thunks/fetch-order.thunk";
import { initialState } from "./orderState";

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setOrder: setOrderAction,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      });
  },
});

export const {
  setOrder
} = orderSlice.actions;

export default orderSlice.reducer;
