import { FC } from "react";
import PaymentProduct from "../PaymentProduct";
import { Product } from "../../../../types/products";

interface PaymentListProps {
  productsSelected: Product[];
}

const PaymentList: FC<PaymentListProps> = ({ productsSelected }) => {
  const subtotal = productsSelected.reduce(
    (sum, product) => sum + Number(product.price),
    0
  );

  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6 lg:w-1/2 lg:p-8">
      <h1 className="text-center text-xl font-black text-slate-900 sm:text-2xl">Tu orden</h1>
      <div className="mb-4 mt-4 rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
        {productsSelected.map((product) => (
          <PaymentProduct key={product.id} {...product} />
        ))}
      </div>
      <div className="space-y-2 text-sm sm:text-base">
        <div className="flex justify-between text-slate-700">
          <p className="font-semibold">Subtotal</p>
          <p>${subtotal}</p>
        </div>
        <div className="flex justify-between text-slate-500">
          <p>Envío</p>
          <p>Se calcula al confirmar</p>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-2 text-lg text-slate-900">
          <p className="font-black">Total</p>
          <p className="font-black">${subtotal}</p>
        </div>
      </div>
      <div className="mt-4">
        <button className="flex h-[48px] w-full items-center justify-center rounded-xl bg-slate-900 p-3 font-bold text-white transition hover:bg-slate-700">
          Realizar pedido
        </button>
      </div>
    </section>
  );
};

export default PaymentList;
