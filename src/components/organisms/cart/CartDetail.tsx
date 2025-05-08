"use client";
import { Text } from "@/components/atoms/Text";
import { ICart } from "@/models/cart/cart";

interface CartDetailProps {
    cart: ICart;
    loading: boolean;
}

export const CartDetail = ({ cart, loading }: CartDetailProps) => {
    return (
        <>
            {loading && <Text variant="h1" value="Loading..." />}
            <Text variant="h1" value={cart.id} />
            {cart.items?.map((item) => (
                <Text key={item.id} variant="h1" value={item.name} />
            ))}
            <Text variant="p" size="20px" value={`Total: ${cart.totalValue}`} />
        </>
    )
}