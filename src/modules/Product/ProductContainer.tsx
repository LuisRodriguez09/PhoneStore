import { useEffect, useState } from "react";
import { phones } from "../../services/phones";
import ProductImageZoom from "./components/ProductImageZoom/ProductImageZoom";
import { Product } from "../../types/products";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsStore } from "../../store/products";
import toast from "../../utils/toast";

const ProductContainer = () => {
  const { productId } = useParams();
  const { setNewProduct } = useProductsStore();
  const navigate = useNavigate();

  const [phone, setPhone] = useState<Product>({
    id: 0,
    categories: [],
    description: "",
    info: [],
    isAddedToWishlist: false,
    mainPhoto: "",
    maxQuantity: 0,
    name: "",
    price: 0,
    secPhoto: "",
    trdPhoto: "",
  });

  useEffect(() => {
    const phone = phones.find((phone) => phone.id === productId);
    if (phone) {
      setPhone(phone);
    }
  }, []);

  const addToCart = () => {
    setNewProduct({ ...phone });
    toast("success", "Producto agregado al carrito.");
  };

  const goToPayment = () => {
    setNewProduct({ ...phone });
    navigate("/payment");
  };

  return (
    <main className="flex-1 bg-slate-100/70 py-6 sm:py-8 lg:py-10">
      <section className="content-wrap grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
          <ProductImageZoom
            mainPhoto={phone.mainPhoto}
            secPhoto={phone.secPhoto}
            trdPhoto={phone.trdPhoto}
          />
        </div>
        <div className="h-fit rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
          <h3 className="text-2xl font-black text-slate-900 sm:text-3xl">{phone.name}</h3>
          <p className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl">${phone.price}</p>
          <ul className="mt-4 space-y-2 pl-4 text-sm font-semibold text-slate-700 sm:text-base">
          {phone.info.map((item, index) => (
            <li key={index} className="list-disc">
              {item}
            </li>
          ))}
          </ul>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              className="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              onClick={addToCart}
            >
              Agregar al carrito
            </button>
            <button
              className="rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700"
              onClick={goToPayment}
            >
              Comprar ahora
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductContainer;
