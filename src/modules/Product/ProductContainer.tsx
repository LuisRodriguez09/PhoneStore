import { useEffect, useState } from "react";
import { phones } from "../../services/phones";
import ProductImageZoom from "./components/ProductImageZoom/ProductImageZoom";
import { Product } from "../../types/products";
import { useParams } from "react-router-dom";

const ProductContainer = () => {
  const { productId } = useParams();

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
    const phone = phones.find((phone) => phone.id === Number(productId));
    if (phone) {
      setPhone(phone);
    }
  }, []);

  return (
    <main className="lg:px-32 py-10 h-auto bg-[#f7f9f9] flex justify-between">
      <ProductImageZoom
        mainPhoto={phone.mainPhoto}
        secPhoto={phone.secPhoto}
        trdPhoto={phone.trdPhoto}
      />
      <div className="border-2 p-3 rounded-xl w-[40%] shadow-sm bg-white">
        <h3>{phone.name}</h3>
        <p className="font-bold">${phone.price}</p>
        <ul className="p-0 text-xs font-semibold">
          {phone.info.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
        <div className="flex">
          <button className="border-2 w-40 p-2 rounded-md">
            Agregar al carrito
          </button>
          <button className="border-2 w-40 p-2 rounded-md">
            Comprar ahora
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductContainer;
