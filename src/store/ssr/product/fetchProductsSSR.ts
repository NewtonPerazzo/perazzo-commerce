
import { getAllProducts } from "@/services/product/productService";
import { store } from "@/store";
import { setProducts } from "@/store/product/productSlice";

export const SSRFetchProducts = async () => {
  const response = await getAllProducts();

  store.dispatch(setProducts(response));
  const { items, loading } = store.getState().products;
  return { items, loading };
};
