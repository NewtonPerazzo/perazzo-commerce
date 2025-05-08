import { IOrder } from "@/models/order/order";

export interface IOrderState {
  order: IOrder;
  loading: boolean;
}

export const initialState: IOrderState = {
  order: {} as IOrder,
  loading: false
};
