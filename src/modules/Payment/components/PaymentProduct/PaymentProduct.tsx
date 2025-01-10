import { FC } from "react";
import { Product } from "../../../../types/products";

const PaymentProduct: FC<Product> = ({ mainPhoto, name, description, price }) => {
  return (
    <div className="flex mb-2">
      <img
        src={mainPhoto}
        className="w-[80px] h-[80px] mr-2"
        alt="Imagen de producto a pagar"
      />
      <div className="mx-1">
        <p>{name}</p>
        <p>{description}</p>
      </div>
      <div>
        <p>${price}</p>
        <p>Quantity</p>
      </div>
    </div>
  );
};

export default PaymentProduct;
