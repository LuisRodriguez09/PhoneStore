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
    .map((product) => `${product.name} - ${product.price}`)
    .join("\n")}
  `;

  const openWhatsAppChat = () => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:w-1/2 lg:p-8">
      <div className="rounded-2xl bg-slate-50 p-4 text-center text-slate-600 sm:p-5">
        <h4 className="text-sm font-semibold sm:text-base">
          Puedes realizar tu pago de forma express por WhatsApp!
        </h4>
        <div className="mt-3 flex justify-center">
          <FaWhatsapp
            color="#25D366"
            className="cursor-pointer"
            size={46}
            onClick={openWhatsAppChat}
          />
        </div>
      </div>
      <div className="mt-5">
        <form action="">
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">Contacto</label>
            <input
              className="rounded-xl border border-slate-300 px-3 py-2.5"
              type="text"
              placeholder="Correo electrónico"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">
              Nombre completo
            </label>
            <input
              className="rounded-xl border border-slate-300 px-3 py-2.5"
              type="text"
              placeholder="Nombre completo"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">Dirección</label>
            <input
              className="rounded-xl border border-slate-300 px-3 py-2.5"
              type="text"
              placeholder="Dirección"
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">Estado</label>
            <select
              name="stateOfMex"
              className="rounded-xl border border-slate-300 px-3 py-2.5"
            >
              {statesOfMexico.map((state) => (
                <option key={state.abbreviation} value={state.abbreviation}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">Teléfono</label>
            <input
              className="rounded-xl border border-slate-300 px-3 py-2.5"
              type="text"
              placeholder="teléfono"
            />
          </div>
          <div className="mb-2 flex flex-col">
            <label className="mb-2 text-base font-bold text-slate-700">Notas</label>
            <textarea
              className="min-h-[120px] rounded-xl border border-slate-300 px-3 py-2.5"
              placeholder="Notas adicionales (ej: notas especiales para la entrega, etc.)"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PaymentForm;
