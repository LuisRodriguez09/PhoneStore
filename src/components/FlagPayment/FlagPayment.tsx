import { FC } from "react";
import { Product } from "../../types/products";

interface FlagPaymentProps {
  productsSelected: Product[];
}

const FlagPayment: FC<FlagPaymentProps> = ({ productsSelected }) => {
  return (
    <div className="py-4 lg:px-20 px-3 w-ful text-white">
      <div className=" bg-green-500 p-1 rounded-lg">
        <p className="underline" >Continuar comprando</p>
        {productsSelected.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </div>
    </div>
  );
};

export default FlagPayment;
