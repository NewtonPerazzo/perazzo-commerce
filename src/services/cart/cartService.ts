import { mockCartList } from "@/mocks/cartMock";
import { ICart } from "@/models/cart/cart";

export const getCart = (id: string): Promise<ICart> =>
    new Promise((resolve) => {
      setTimeout(() => resolve(mockCartList.find((c) => c.id === id) || {} as ICart), 500);
    })
;