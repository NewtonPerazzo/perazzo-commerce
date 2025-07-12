import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "../store/cart/cartSlice";

export function useLoadCartFromStorage() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        dispatch(setCart(JSON.parse(savedCart)));
      }
    }
  }, [dispatch]);
}
