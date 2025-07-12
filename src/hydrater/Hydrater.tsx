"use client";
import { store } from "@/store";
import { setOrder } from "@/store/order/orderSlice";
import { setProductByID, setProducts } from "@/store/product/productSlice";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";
import { useEffect, useState } from "react";


type actionMapTypes = "setProducts" | "setProductByID" | "setOrder"

interface StoreHydraterProps {
  data: unknown;
  action: actionMapTypes;
}

const actionMap: { [key in actionMapTypes]: ActionCreatorWithPayload<any> } = {
    setProductByID: setProductByID,
    setProducts: setProducts,
    setOrder: setOrder
};

const Hydrater = ({ data, action }: StoreHydraterProps) => {
  const [isOnClient, setIsOnClient] = useState(false);

  useEffect(() => {
    setIsOnClient(true);
  }, []);

  useEffect(() => {
    if (isOnClient) {
      store.dispatch(actionMap[action](data))
    };
  }, [isOnClient, action, data]);

  return null;
};

export default Hydrater;
