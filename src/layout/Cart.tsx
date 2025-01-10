import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderCart from "../modules/Cart/components/HeaderCart";
import ProductsCartList from "../modules/Cart/components/ProductsCartList";
import { useProductsStore } from "../store/products";

const Cart = () => {
  const { productsSelected } = useProductsStore();

  return (
    <main>
      <Header />
      <div className="lg:px-32 py-10 h-auto bg-[#f7f9f9]">
        {productsSelected.length ? (
          <>
            <div className="w-full bg-white rounded-md border p-4">
              <HeaderCart />
              <ProductsCartList productsSelected={productsSelected} />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
