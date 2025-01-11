import Header from "../components/Header";
import "react-medium-image-zoom/dist/styles.css";
import ProductContainer from "../modules/Product/ProductContainer";
import Footer from "../components/Footer";

const Product = () => {
  return (
    <main>
      <Header />
      <ProductContainer />
      <Footer />
    </main>
  );
};

export default Product;
