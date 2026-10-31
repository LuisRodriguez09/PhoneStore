import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
      <BsCart2 size={88} className="text-slate-700" />
      <h3 className="my-6 max-w-md text-lg font-bold text-slate-800 sm:text-2xl">
        Agrega productos para armar tu carrito
      </h3>
      <button
        className="rounded-xl border border-slate-300 px-5 py-2.5 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
        onClick={() => navigate("/")}
      >
        Continuar comprando
      </button>
    </div>
  );
};

export default EmptyCart;
