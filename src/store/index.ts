import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";
import orderReducer from "./order/orderSlice";

const rootReducer = {
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
};

export type RootState = {
  products: ReturnType<typeof productReducer>;
  cart: ReturnType<typeof cartReducer>;
  order: ReturnType<typeof orderReducer>;
};

export const makeStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
  });

export const store = makeStore();

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore["dispatch"];
