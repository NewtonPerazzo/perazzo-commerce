import React from "react";
import { CartDetail } from "@/components/organisms/cart/CartDetail";
import { Box } from "@mui/material";

export default function Cart() {
  return (
    <Box sx={{ padding: 2 }}>
      <CartDetail />
    </Box>
  );
}
