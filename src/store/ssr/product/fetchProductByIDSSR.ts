
import { getProductById } from "@/services/product/productService";
import { store } from "@/store";
import { setProductByID } from "@/store/product/productSlice";

export const SSRFetchProductByID = async (id: string) => {
    const response = await getProductById(id);
  
    store.dispatch(setProductByID(response));
    const { product, loading } = store.getState().products;
    return { product, loading };
};
