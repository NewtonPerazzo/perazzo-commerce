import { getAllProducts, getProductById } from "@/services/product/productService";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async ({}, { }) => {

    const response = await getAllProducts();

    return response;
  }
);

export const fetchProductByID = createAsyncThunk(
  "fetchProductByID",
  async ({ id }: { id: string }, { }) => {

    const response = await getProductById(id);

    return response;
  }
);