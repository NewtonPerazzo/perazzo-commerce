"use client";
import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product";

interface ProductHomeProps {
    items: IProduct[];
    loading: boolean;
}

export const ProductHome = ({ items, loading }: ProductHomeProps) => {
    return (
        <>
            {loading && <Text variant="h1" value="Loading..." />}
            {items?.map((item) => (
                <Text key={item.id} variant="h1" value={item.name} />
            ))}
        </>
    )
}