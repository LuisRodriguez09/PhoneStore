import { BsCart2 } from "react-icons/bs";
import { useProductsStore } from "../../../../store/products";

const HeaderCart = () => {
  const { productsSelected } = useProductsStore();

  return (
    <header className="w-full">
      <div className="flex items-center ">
        <BsCart2 className="mb-1" size={18} />
        <h4 className="ml-2 font-semibold">
          {productsSelected.length} artículo
          {productsSelected.length > 1 ? "s" : ""}
        </h4>
      </div>
    </header>
  );
};

export default HeaderCart;
