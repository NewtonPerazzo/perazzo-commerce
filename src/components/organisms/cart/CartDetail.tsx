"use client";
import { Text } from "@/components/atoms/Text";
import { decrement, increment } from "@/store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Colors } from "@/styles/colors";
import { Box, Button } from "@mui/material";
import React from "react";

export const CartDetail = () => {
    const dispatch = useAppDispatch();
    const { items, total, count } = useAppSelector((state) => state.cart);
    const hasCart = items && items.length > 0;

    return (
        <>
            {hasCart && <Text variant="h1" value="Cart" />}

            {hasCart ? items.map(({ item, count, total }) => (
                <Box
                    key={item.id}
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 0",
                        borderBottom: `1px solid ${Colors.pink.bg}`,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <Text variant="h3" value={item.name} />
                        <Text
                            size="14px"
                            value={`Price: R$ ${item.price.toFixed(2)}`}
                            style={{ color: Colors.pink.font }}
                        />
                        <Text size="14px" value={`Code: ${item.code}`} />
                    </Box>

                    <Box sx={{ width: 100, alignItems: "center", gap: 2, display: "flex", flexDirection: "column" }}>
                        <Text variant="h4" value={`R$ ${total.toFixed(2)}`} />
                        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => dispatch(decrement(item))}
                                sx={{
                                    minWidth: 30,
                                    backgroundColor: Colors.pink.font,
                                    color: "#fff",
                                }}
                            >
                                -
                            </Button>

                            <Text variant="h4" value={count} style={{ width: 20, textAlign: "center" }} />
                        
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => dispatch(increment(item))}
                                sx={{
                                    minWidth: 30,
                                    backgroundColor: Colors.pink.font,
                                    color: "#fff",
                                }}
                            >
                                +
                            </Button>
                        </Box>
                    </Box>
                </Box>
            )) : <Text value="Seu carrinho está vazio." style={{ marginTop: 20, textAlign: "center" }} />}
            {hasCart && (
                <Box sx={{ marginTop: 2, textAlign: "right" }}>
                    <Text variant="h2" value={`Total (${count} items): R$ ${total.toFixed(2)}`} />
                </Box>
            )}
        </>
    )
}