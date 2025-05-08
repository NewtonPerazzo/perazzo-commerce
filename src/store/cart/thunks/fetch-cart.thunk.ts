import { getCart } from "@/services/cart/cartService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCart = createAsyncThunk(
  "fetchCart",
  async ({ id }: { id: string }, { }) => {

    const response = await getCart(id);

    return response;
  }
);