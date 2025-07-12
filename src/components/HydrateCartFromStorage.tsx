"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "@/store/cart/cartSlice";
import { getLocalStorage } from "@/storage/localStorageUtils";
import { ICart } from "@/models/cart/cart";

export function HydrateCartFromStorage() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCart = getLocalStorage("cart");
    if (savedCart) {
      dispatch(setCart(savedCart as ICart));
    }
  }, [dispatch]);

  return null;
}
