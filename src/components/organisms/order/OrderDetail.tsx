"use client";
import { Text } from "@/components/atoms/Text";
import { IOrder } from "@/models/order/order";

interface OrderDetailProps {
    order: IOrder;
}

export const OrderDetail = ({ order }: OrderDetailProps) => {
    return (
        <>
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