import { Product } from "../types/products";

export const filterProductById = (products: Product[], id: string) => {
  return products.filter((product) => product.id === Number(id));
};
