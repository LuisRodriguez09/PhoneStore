import { FC } from "react";
import { Product } from "../../../../types/products";
import ProductCart from "../ProductCart";
import { useNavigate } from "react-router-dom";

interface ProductsCartList {
  productsSelected: Product[];
}

const ProductsCartList: FC<ProductsCartList> = ({ productsSelected }) => {
  const navigate = useNavigate();

  return (
    <section>
      {productsSelected.map((product: Product) => (
        <ProductCart key={product.id} {...product} />
      ))}
      <div className="flex justify-center">
        <button
          className="bg-[#f5e926] w-1/3 rounded-md py-2"
          onClick={() => navigate("/payment")}
        >
          Pagar
        </button>
      </div>
    </section>
  );
};

export default ProductsCartList;
