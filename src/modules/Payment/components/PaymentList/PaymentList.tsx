import { FC } from "react";
import PaymentProduct from "../PaymentProduct";
import { Product } from "../../../../types/products";
import { PHONE_NUMBER } from "../../../../constants";

interface PaymentListProps {
  productsSelected: Product[];
}

const parseMexicanPrice = (price: Product["price"]) =>
  Number(String(price).replace(/[^\d.-]/g, ""));

const PaymentList: FC<PaymentListProps> = ({ productsSelected }) => {
  const subtotal = productsSelected.reduce(
    (sum, product) => sum + parseMexicanPrice(product.price),
    0
  );
  const formattedSubtotal = subtotal.toLocaleString("es-MX");
  const completeOrder = () => {
    const items = productsSelected
      .map((product) => `- ${product.name}: $${product.price}`)
      .join("\n");
    const message = `Hola, quiero realizar mi pedido:\n${items}\n\nTotal: $${formattedSubtotal} MXN`;
    window.open(`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

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
          <p>${formattedSubtotal} MXN</p>
        </div>
        <div className="flex justify-between text-slate-500">
          <p>Envío</p>
          <p>Se calcula al confirmar</p>
        </div>
        <div className="flex justify-between border-t border-slate-200 pt-2 text-lg text-slate-900">
          <p className="font-black">Total</p>
          <p className="font-black">${formattedSubtotal} MXN</p>
        </div>
      </div>
      <div className="mt-4">
        <button className="flex h-[48px] w-full items-center justify-center rounded-xl bg-slate-900 p-3 font-bold text-white transition hover:bg-slate-700" type="button" onClick={completeOrder}>
          Realizar pedido
        </button>
      </div>
    </section>
  );
};

export default PaymentList;
