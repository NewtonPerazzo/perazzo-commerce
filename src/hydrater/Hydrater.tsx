"use client";
import { store } from "@/store";
import { setCart } from "@/store/cart/cartSlice";
import { setOrder } from "@/store/order/orderSlice";
import { setProductByID, setProducts } from "@/store/product/productSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


type actionMapTypes = "setProducts" | "setProductByID" | "setCart" | "setOrder"

interface StoreHydraterProps {
  data: any;
  action: actionMapTypes;
}

const actionMap: { [key in actionMapTypes]: ActionCreatorWithPayload<any> } = {
    setProductByID: setProductByID,
    setProducts: setProducts,
    setCart: setCart,
    setOrder: setOrder
};

const Hydrater = ({ data, action }: StoreHydraterProps) => {
  const [isOnClient, setIsOnClient] = useState(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  useEffect(() => {
    if (isOnClient) store.dispatch(actionMap[action](data));
  }, [isOnClient, action, data]);

  return null;
};

export default Hydrater;
