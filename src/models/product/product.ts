import { ICategory } from "../category/category";

export interface IProduct {
    id: string;
    name: string;
    price: number;
    code: string;
    promotionalPrice?: number;
    description?: string;
    image?: string;
    category?: ICategory;
}

export interface IProductByCategory {
    category: ICategory
    items: IProduct[]
}