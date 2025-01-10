import { FaWhatsapp } from "react-icons/fa";
import { statesOfMexico } from "../../../../services/statesOfMexicoList";
import { PHONE_NUMBER } from "../../../../constants";
import { Product } from "../../../../types/products";
import { FC } from "react";

interface PaymentFormProps {
  productsSelected: Product[];
}

const PaymentForm: FC<PaymentFormProps> = ({ productsSelected }) => {
  const message = `Hola, me gustaría realizar el pago de mi pedido. ¿Podrías ayudarme?
  ${productsSelected
    .map((product) => `${product.name} - ${product.price} }`)
    .join("\n")}
  `;

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="py-4 lg:px-20 px-3 lg:w-1/2 w-full  h-screen">
      <div className="flex flex-col items-center text-gray-500">
        <h4 className="text-sm cursor-pointer">
          Puedes realizar tu pago de forma express por WhatsApp!
        </h4>
        <div>
          <FaWhatsapp
            color="#25D366"
            className="cursor-pointer mt-3"
            size={50}
            onClick={openWhatsAppChat}
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
          <div className="flex flex-col mb-2">
            <label className="font-semibold text-lg mb-2">Notas</label>
            <input
              className="border rounded-md px-3 py-2 border-gray-300 h-[100px]"
              type="textarea"
              placeholder="Notas adicionales (ej: notas especiales para la entrega, etc.)"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
