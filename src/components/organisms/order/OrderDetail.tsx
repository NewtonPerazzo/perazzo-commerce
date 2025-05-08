"use client";
import { Text } from "@/components/atoms/Text";
import { IOrder } from "@/models/order/order";

interface OrderDetailProps {
    order: IOrder;
    loading: boolean;
}

export const OrderDetail = ({ order, loading }: OrderDetailProps) => {
    return (
        <>
            {loading && <Text variant="h1" value="Loading..." />}
            {
                order?.cart?.items?.map((c) => (
                    <Text key={c.id} variant="h1" value={c.name} />
                ))
            }
            <Text variant="p" size="20px" value={order?.isToDeliver ? 'Entregar' : 'Retirada'} />
            <Text variant="p" size="20px" value={order?.observation} />      
        </>
    )
}