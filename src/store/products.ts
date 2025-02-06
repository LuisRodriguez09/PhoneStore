import { create } from "zustand";
import { Product } from "../types/products";

interface Products {
  productsSelected: Product[];
  setNewProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
}

export const useProductsStore = create<Products>((set) => ({
  productsSelected: JSON.parse(
    localStorage.getItem("productsSelected") || "[]"
  ), // Cargar desde localStorage si existe

  setNewProduct: (product) =>
    set((state) => {
      const updatedProducts = [...state.productsSelected, product];
      localStorage.setItem("productsSelected", JSON.stringify(updatedProducts)); // Guardar en localStorage
      return { productsSelected: updatedProducts };
    }),

  removeProduct: (product) =>
    set((state) => {
      // Filtrar el producto que se desea eliminar
      const updatedProducts = state.productsSelected.filter(
        (productSelected) => productSelected.id !== product.id
      );

      // Actualizar el localStorage con la nueva lista
      localStorage.setItem("productsSelected", JSON.stringify(updatedProducts));

      return { productsSelected: updatedProducts }; // Devolver el nuevo estado
    }),
}));
