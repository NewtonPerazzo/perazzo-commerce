import { IOrder } from "@/models/order/order";
import { mockCart } from "./cartMock";
import { mockUser } from "./userMock";

export const mockOrder: IOrder[] = [{
    id: "o1",
    cart: mockCart,
    user: mockUser,
    isToDeliver: true,
    date: "2025-05-08",
    observation: "Entregar no período da manhã",
}];