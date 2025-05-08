import { mockProducts } from "@/mocks/productMock";
import { IProduct } from "@/models/product/product";

export const getAllProducts = (): Promise<IProduct[]> =>
    new Promise((resolve) => {
        setTimeout(() => resolve(mockProducts), 500);
    }
);

export const getProductById = (id: string): Promise<IProduct> =>
    new Promise((resolve) => {
        setTimeout(() => {
            const product = mockProducts.find((p) => p.id === id);
            resolve(product || {} as IProduct);
        }, 500);
    }
);
