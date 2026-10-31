import { phones } from "../../services/phones";
import ProductImageZoom from "./components/ProductImageZoom/ProductImageZoom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductsStore } from "../../store/products";
import toast from "../../utils/toast";

const ProductContainer = () => {
  const { productId } = useParams();
  const setNewProduct = useProductsStore((state) => state.setNewProduct);
  const navigate = useNavigate();
  const phone = phones.find((item) => item.id === productId);

  const addToCart = () => {
    if (!phone) return;
    setNewProduct(phone);
    toast("success", "Producto agregado al carrito.");
  };

  const goToPayment = () => {
    if (!phone) return;
    setNewProduct(phone);
    navigate("/payment");
  };

  if (!phone) {
    return (
      <section className="product-not-found">
        <h1>No encontramos este equipo</h1>
        <Link className="product-back-link" to="/#catalogo">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  return (
    <main className="product-detail-page">
      <div className="product-detail">
        <ProductImageZoom
          mainPhoto={phone.mainPhoto}
          secPhoto={phone.secPhoto}
          trdPhoto={phone.trdPhoto}
          productName={phone.name}
        />
        <section className="product-detail-card" aria-labelledby="product-name">
          <Link className="product-back-link" to="/#catalogo">← Volver a equipos</Link>
          <span className="product-detail-eyebrow">Equipo revisado</span>
          <h1 id="product-name">{phone.name}</h1>
          <p className="product-detail-price">${phone.price} <span>MXN</span></p>
          <p className="product-detail-description">{phone.description}</p>
          {phone.info.length > 0 && (
            <ul className="product-detail-features">
              {phone.info.map((item) => <li key={item}>{item}</li>)}
            </ul>
          )}
          <div className="product-detail-actions">
            <button className="product-add-button" type="button" onClick={addToCart}>
              Agregar al carrito
            </button>
            <button className="product-buy-button" type="button" onClick={goToPayment}>
              Comprar ahora
            </button>
          </div>
          <p className="product-detail-assurance">Compra con confianza · Atención personalizada en Chihuahua</p>
        </section>
      </div>
    </main>
  );
};

export default ProductContainer;
