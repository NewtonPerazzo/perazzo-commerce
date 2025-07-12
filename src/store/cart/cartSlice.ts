import { ICart } from './../../models/cart/cart';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/models/product/product";
import { removeLocalStorage, setLocalStorage } from "@/storage/localStorageUtils";

const initialState: ICart = {
  count: 0,
  total: 0,
  items: [],
  id: ""
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProduct>) => {
      const index = state.items.findIndex(item => item.item.id === action.payload.id);

      if (index >= 0) {
        state.items[index].count += 1;
        state.items[index].total += action.payload.price;
      } else {
        state.items.push({
          count: 1,
          total: action.payload.price,
          item: action.payload,
        });
      }

      state.count += 1;
      state.total += action.payload.price;
      setLocalStorage("cart", state);
    },
    decrement: (state, action: PayloadAction<IProduct>) => {
      const index = state.items.findIndex(item => item.item.id === action.payload.id);

      if (index >= 0) {
        if (state.items[index].count > 1) {
          state.items[index].count -= 1;
          state.items[index].total -= action.payload.price;
        } else {
          state.items.splice(index, 1);
        }

        state.count -= 1;
        state.total -= action.payload.price;
        if(state.count === 0){
          removeLocalStorage("cart");
        } else {
          setLocalStorage("cart", state);
        }
      }
    },
    setCart: (state, action: PayloadAction<ICart>) => {
      state.count = action.payload.count;
      state.items = action.payload.items;
      state.id = action.payload.id;
      state.total = action.payload.total;
    },
  },
});

export const { increment, decrement, setCart } = cartSlice.actions;
export default cartSlice.reducer;
