import { ICart } from "@/models/cart/cart";
import { mockProducts } from "./productMock";


export const mockCart: ICart = {
  id: "cart1",
  items: [
    {
      ...mockProducts[0],
      quantity: 2,
      tottalValue: 2 * (mockProducts[0].promotionalPrice ?? mockProducts[0].price),
    },
    {
      ...mockProducts[1],
      quantity: 1,
      tottalValue: mockProducts[1].price,
    },
    {
      ...mockProducts[2],
      quantity: 3,
      tottalValue: mockProducts[2].price,
    },
  ],
  totalValue: 
    2 * (mockProducts[0].promotionalPrice ?? mockProducts[0].price) +
    mockProducts[1].price +
    mockProducts[2].price
};

export const mockCartList: ICart[] = [{
  id: "cart1",
  items: [
    {
      ...mockProducts[0],
      quantity: 2,
      tottalValue: 2 * (mockProducts[0].promotionalPrice ?? mockProducts[0].price),
    },
    {
      ...mockProducts[1],
      quantity: 1,
      tottalValue: mockProducts[1].price,
    },
    {
      ...mockProducts[2],
      quantity: 3,
      tottalValue: mockProducts[2].price,
    },
  ],
  totalValue: 
    2 * (mockProducts[0].promotionalPrice ?? mockProducts[0].price) +
    mockProducts[1].price +
    mockProducts[2].price
}];
