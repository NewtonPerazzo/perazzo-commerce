
import { PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "@/models/order/order";
import { IOrderState } from "../orderState";

export const setOrderAction = (
  state: IOrderState,
  action: PayloadAction<IOrder>
) => {
  state.order = action.payload;
};
