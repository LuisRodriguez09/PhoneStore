import Header from "../components/Header";
import "react-medium-image-zoom/dist/styles.css";
import ProductImageZoom from "../modules/Product/components/ProductImageZoom/ProductImageZoom";

const Product = () => {
  return (
    <main>
      <Header />
      <div className="lg:px-32 py-10 h-auto bg-[#f7f9f9] flex justify-between">
        <ProductImageZoom />
        <div className="border-2 p-3 rounded-md w-[50%] shadow-sm bg-white">
          <h3>iPhone 13 usado excelentes condiciones</h3>
          <p>$1500</p>
          <ul className="p-0">
            <li>Usado</li>
            <li>95% batería</li>
            <li>Con caja</li>
            <li>1 sim físico y eSim</li>
          </ul>
          <div>
            <button>Agregar al carrito</button>
            <button>Comprar ahora</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Product;
