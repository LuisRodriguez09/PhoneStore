import { FC } from "react";
import { Product } from "../../../../types/products";

interface ProductCart {
  product: Product;
}

const ProductCart: FC<Product> = (product) => {
  const { id, name, description, price, src } = product;

  return (
    <div className="flex mt-4">
      <img className="w-[100px] h-[100px]" src={src} alt="" />
      <div className="ml-4" >
        <h5 className="text-sm" >{name}</h5>
        <p className="text-xs" >{description}</p>
        <p>add more</p>
      </div>
      <div>${price}</div>
    </div>
  );
};

export default ProductCart;
