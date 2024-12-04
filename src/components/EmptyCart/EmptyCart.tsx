import { BsCart2 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col bg-white p-10 items-center justify-center">
      <BsCart2 size={100} />
      <h3 className="my-10">Agrega productos para armar tu carrito</h3>
      <button
        className="border px-4 py-2 rounded-md"
        onClick={() => navigate("/")}
      >
        Continuar comprando
      </button>
    </div>
  );
};

export default EmptyCart;
