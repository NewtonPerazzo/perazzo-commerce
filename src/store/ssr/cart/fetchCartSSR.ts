
import { getCart } from "@/services/cart/cartService";
import { store } from "@/store";
import { setCart } from "@/store/cart/cartSlice";

export const SSRFetchCart = async (id: string) => {
  const response = await getCart(id);

  store.dispatch(setCart(response));
  const { cart, loading } = store.getState().cart;
  return { cart, loading };
};
