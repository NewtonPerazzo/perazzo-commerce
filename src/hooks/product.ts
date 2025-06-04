import { ICategory } from "@/models/category/category";
import { IProduct, IProductByCategory } from "@/models/product/product";

interface UseProductProps {
  products: IProduct[];
}

interface UseProductReturnProps {
  productsByCategory: IProductByCategory[];
}


export const useProduct = ({ products }: UseProductProps): UseProductReturnProps => {
  const grouped: { [key: string]: { category: ICategory; items: IProduct[] } } = {};

  products?.forEach((product) => {
    const category = product?.category;
    const categoryId = category?.id || "outros";
    const categoryName = category?.name || "Outros";

    if (!grouped[categoryId]) {
      grouped[categoryId] = {
        category: { id: categoryId, name: categoryName },
        items: [],
      };
    }

    grouped[categoryId].items.push(product);
  });

  const productsByCategory: IProductByCategory[] = Object.values(grouped);

  return { productsByCategory };
};
