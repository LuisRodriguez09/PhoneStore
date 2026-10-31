import { Product } from "../../types/products";
import ProductCard from "../ProductCard";

interface BestSellersProps {
  products: Product[];
}

const BestSellers = ({ products }: BestSellersProps) => {
  return (
    <div className="product-grid">
      {products.length > 0 ? (
        products.map((phone) => <ProductCard key={phone.id} {...phone} />)
      ) : (
        <div className="empty-results">
          <strong>No encontramos equipos con esa búsqueda.</strong>
          Prueba con otro modelo o selecciona otra categoría.
        </div>
      )}
    </div>
  );
};

export default BestSellers;
