import { FC } from "react";
import { Product } from "../../types/products";
import { useProductsStore } from "../../store/products";
import toast from "../../utils/toast";
import { Link } from "react-router-dom";
import { BagPlus } from "react-bootstrap-icons";

const ProductCard: FC<Product> = (product) => {
  const { mainPhoto: src, name, id, price } = product;
  const { setNewProduct } = useProductsStore();

  const handleAddToCart = () => {
    setNewProduct({ ...product });
    toast("success", "Producto agregado al carrito.");
  };

  return (
    <article className="store-product-card">
      <Link className="product-image-link" to={`/product/${id}`} aria-label={`Ver ${name}`}>
        <img src={src} alt={name} loading="lazy" decoding="async" />
      </Link>
      <div className="product-card-copy">
        <h3><Link to={`/product/${id}`}>{name}</Link></h3>
        <p className="product-price">${String(price).replace(/\s*MXN$/i, "")} MXN</p>
        <button className="add-to-cart-button" type="button" onClick={handleAddToCart}>
          <BagPlus size={16} aria-hidden="true" />
          Agregar al carrito
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
