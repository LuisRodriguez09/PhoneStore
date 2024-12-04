import { FaWhatsapp } from "react-icons/fa";

const PaymentForm = () => {
  return (
    <section className="py-4 px-20 w-1/2  h-screen">
      <div className="flex flex-col items-center text-gray-500">
        <h4 className="text-sm cursor-pointer">Pago exprés por WhatsApp</h4>
        <div>
          <FaWhatsapp
            color="#25D366"
            className="cursor-pointer mt-3"
            size={50}
          />
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <span className="w-full h-[1px] bg-gray-500" />
      </div>
      <div className="mt-3">
        <form action="">
          <div className="flex flex-col">
            <label className="font-semibold text-lg mb-2" >Contacto</label>
            <input className="border rounded-md px-3 py-2 border-gray-300" type="text" placeholder="Correo electrónico" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
