import { create } from "zustand";
import { Product } from "../types/products";

interface Products {
  productsSelected: Product[];
  setNewProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const useProductsStore = create<Products>((set) => ({
  productsSelected: [],

  setNewProduct: (product) =>
    set((state) => ({
      productsSelected: [...state.productsSelected, product],
    })),
  removeProduct: (product) =>
    set((state) => ({
      productsSelected: state.productsSelected.filter(
        (productSelected) => productSelected.id !== product.id
      ),
    })),
}));
