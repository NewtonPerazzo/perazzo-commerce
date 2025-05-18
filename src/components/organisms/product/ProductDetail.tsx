"use client";
import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product";

interface ProductDetailProps {
    product: IProduct;
}

export const ProductDetail = ({ product }: ProductDetailProps) => {
    return (
        <>
            <Text variant="h1" value={product?.name} />
        </>
    )
}