import { FaWhatsapp } from "react-icons/fa";
import { statesOfMexico } from "../../../../services/statesOfMexicoList";

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
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">Contacto</label>
            <input
              className="border rounded-md px-3 py-2 border-gray-300"
              type="text"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">
              Nombre completo
            </label>
            <input
              className="border rounded-md px-3 py-2 border-gray-300"
              type="text"
              placeholder="Nombre completo"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">Dirección</label>
            <input
              className="border rounded-md px-3 py-2 border-gray-300"
              type="text"
              placeholder="Dirección"
            />
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">Estado</label>
            <select
              name="stateOfMex"
              className="border rounded-md px-3 py-2 border-gray-300"
            >
              {statesOfMexico.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">Teléfono</label>
            <input
              className="border rounded-md px-3 py-2 border-gray-300"
              type="text"
              placeholder="teléfono"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
