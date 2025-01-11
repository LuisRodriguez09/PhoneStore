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
  }

  return (
    <div className="flex mt-4">
      <img className="w-[100px] h-[100px]" src={src} alt="" />
      <div className="ml-4">
        <h5 className="text-sm">{name}</h5>
        <p className="text-xs">{description}</p>
        <p>add more</p>
      </div>
      <div className="w-1/5 flex justify-center flex-col items-center">
        <p>${price}</p>
        <p className="underline cursor-pointer" onClick={handleRemoveProduct} >Eliminar</p>
      </div>
    </div>
  );
};

export default ProductCart;
