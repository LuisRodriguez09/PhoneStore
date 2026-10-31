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
      <div className="mt-6 flex justify-center">
        <button
          className="w-full rounded-xl bg-amber-300 py-3 font-bold text-slate-900 transition hover:bg-amber-200 sm:w-72"
          onClick={() => navigate("/payment")}
        >
          Pagar
        </button>
      </div>
    </section>
  );
};

export default ProductsCartList;
