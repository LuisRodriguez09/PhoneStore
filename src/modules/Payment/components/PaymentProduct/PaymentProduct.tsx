import { FC } from "react";
import { Product } from "../../../../types/products";

const PaymentProduct: FC<Product> = ({ mainPhoto, name, description, price }) => {
  const handleRemoveProduct = () => {
  };

  return (
    <div className="mb-3 rounded-xl border border-slate-100 bg-white p-3">
      <div className="flex items-start gap-3">
        <img
          src={mainPhoto}
          className="h-20 w-20 rounded-lg object-cover"
          alt="Imagen de producto a pagar"
        />
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-900 sm:text-base">{name}</p>
          <p className="line-clamp-2 text-xs text-slate-500 sm:text-sm">{description}</p>
        </div>
        <div className="text-right">
          <p className="text-base font-black text-slate-900">${price}</p>
          <p className="text-xs text-slate-500">x1</p>
        </div>
      </div>
      <div className="mt-2">
        <button
          className="text-xs font-semibold text-rose-600 underline-offset-2 hover:underline"
          onClick={handleRemoveProduct}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default PaymentProduct;
