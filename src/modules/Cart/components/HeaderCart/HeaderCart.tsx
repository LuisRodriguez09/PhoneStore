import { BsCart2 } from "react-icons/bs";
import { useProductsStore } from "../../../../store/products";

const HeaderCart = () => {
  const { productsSelected } = useProductsStore();

  return (
    <header className="w-full">
      <div className="flex items-center border-b border-slate-200 pb-3">
        <BsCart2 className="mb-0.5" size={18} />
        <h4 className="ml-2 text-base font-bold text-slate-800 sm:text-lg">
          {productsSelected.length} artículo
          {productsSelected.length > 1 ? "s" : ""}
        </h4>
      </div>
    </header>
  );
};

export default HeaderCart;
