import { FC } from "react";
import PaymentProduct from "../PaymentProduct";
import { Product } from "../../../../types/products";

interface PaymentListProps {
  productsSelected: Product[];
}

const PaymentList: FC<PaymentListProps> = ({ productsSelected }) => {
  return (
    <section className="py-4 px-20  w-1/2 bg-[#f7f9f9] h-screen">
      {productsSelected.map((product) => (
        <PaymentProduct key={product.id} {...product} />
      ))}
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
    </section>
  );
};

export default PaymentList;
