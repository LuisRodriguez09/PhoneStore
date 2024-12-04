import { FC } from "react";
import { Product } from "../../../../types/products";
import ProductCart from "../ProductCart";

interface ProductsCartList {
  productsSelected: Product[];
}

const ProductsCartList: FC<ProductsCartList> = ({ productsSelected }) => {
  return (
    <section>
      {productsSelected.map((product: Product) => (
        <ProductCart key={product.id} {...product} />
      ))}
    </section>
  );
};

export default ProductsCartList;
