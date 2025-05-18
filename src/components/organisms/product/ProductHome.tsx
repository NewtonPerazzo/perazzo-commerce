"use client";
import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product";

interface ProductHomeProps {
    items: IProduct[];
}

export const ProductHome = ({ items }: ProductHomeProps) => {
    return (
        <>
            {items?.map((item) => (
                <Text key={item.id} variant="h1" value={item.name} />
            ))}
        </>
    )
}