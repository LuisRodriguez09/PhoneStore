import { FC } from "react";
import { Product } from "../../../../types/products";
import { useProductsStore } from "../../../../store/products";

interface ProductCart {
  product: Product;
}

const ProductCart: FC<Product> = (product) => {
  const { name, description, price, mainPhoto: src } = product;

  const { removeProduct } = useProductsStore();

  const handleRemoveProduct = () => {
    removeProduct({ ...product });
  };

  return (
    <div className="mt-4 flex flex-col gap-3 rounded-xl border border-slate-100 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <img className="h-24 w-24 rounded-xl object-cover" src={src} alt={name} />
        <div>
          <h5 className="text-sm font-semibold text-slate-900 sm:text-base">{name}</h5>
          <p className="text-xs text-slate-500 sm:text-sm">{description}</p>
        </div>
      </div>

      <div className="flex items-center justify-between sm:flex-col sm:items-end sm:justify-center sm:gap-2">
        <p className="text-lg font-black text-slate-900">${price}</p>
        <button
          className="cursor-pointer text-sm font-semibold text-rose-600 underline-offset-2 hover:underline"
          onClick={handleRemoveProduct}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
