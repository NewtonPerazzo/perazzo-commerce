
import { getOrder } from "@/services/order/orderService";
import { store } from "@/store";
import { setOrder } from "@/store/order/orderSlice";

export const SSRFetchOrder = async (id: string) => {
  const response = await getOrder(id);

  store.dispatch(setOrder(response));
  const { order, loading } = store.getState().order;
  return { order, loading };
};
