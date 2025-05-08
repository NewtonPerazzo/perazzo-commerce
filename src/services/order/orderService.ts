import { mockOrder } from "@/mocks/orderMock";
import { IOrder } from "@/models/order/order";

export const getOrder = (id: string): Promise<IOrder> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(mockOrder.find((c) => c.id === id) || {} as IOrder), 500);
  }
);