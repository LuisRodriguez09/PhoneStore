import { FC } from "react";
import PaymentProduct from "../PaymentProduct";
import { Product } from "../../../../types/products";

interface PaymentListProps {
  productsSelected: Product[];
}

const PaymentList: FC<PaymentListProps> = ({ productsSelected }) => {
  return (
    <section className="py-4 lg:px-20 px-3  lg:w-1/2 w-full bg-[#f7f9f9] h-screen">
      <h1 className="text-center fontArial">Tu orden</h1>
      <div className="bg-white p-3 shadow-md mb-3">
        {productsSelected.map((product) => (
          <PaymentProduct key={product.id} {...product} />
        ))}
      </div>
      <div>
        <div className="flex justify-between">
          <p className="font-semibold">Subtotal</p>
          <p>$XXXX</p>
        </div>
        <div className="flex justify-between">
          <p>Envío</p>
          <p>Introducir la dirección de envío</p>
        </div>
        <div className="flex justify-between">
          <p className="font-bold">Total</p>
          <p className="font-bold">$XXXX</p>
        </div>
      </div>
      <div>
        <button className="w-full bg-blue-600 text-white p-3 h-[45px] flex items-center justify-center" >Realizar pedido</button>
      </div>
    </section>
  );
};

export default PaymentList;
