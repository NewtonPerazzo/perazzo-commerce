"use client";
import { Text } from "@/components/atoms/Text";
import { IProduct } from "@/models/product/product";

interface ProductDetailProps {
    product: IProduct;
    loading: boolean;
}

export const ProductDetail = ({ product, loading }: ProductDetailProps) => {
    return (
        <>
            {loading && <Text variant="h1" value="Loading..." />}
            <Text variant="h1" value={product?.name} />
        </>
    )
}