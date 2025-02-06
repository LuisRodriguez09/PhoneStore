import { FC } from "react";
import { Product } from "../../../../types/products";

const PaymentProduct: FC<Product> = ({ mainPhoto, name, description, price }) => {

  const handleRemoveProduct = () => {
    // Lógica para eliminar un producto del carrito
  }

  return (
    <div className="flex flex-col mb-2">
      <div className="flex">
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
        <p>1</p>
      </div>
    </div>
    <div>
      <button onClick={handleRemoveProduct} >Eliminar</button>
    </div>
    </div>
  );
};

export default PaymentProduct;
