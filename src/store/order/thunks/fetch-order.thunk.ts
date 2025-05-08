import { getOrder } from "@/services/order/orderService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchOrder = createAsyncThunk(
  "fetchOrder",
  async ({ id }: { id: string }, { }) => {

    const response = await getOrder(id);

    return response;
  }
);