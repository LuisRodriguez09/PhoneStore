import EmptyCart from "../components/EmptyCart";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeaderCart from "../modules/Cart/components/HeaderCart";
import ProductsCartList from "../modules/Cart/components/ProductsCartList";
import { useProductsStore } from "../store/products";

const Cart = () => {
  const { productsSelected } = useProductsStore();

  const productsFromLocalStorage = JSON.parse(localStorage.getItem("productsSelected") || "[]");


  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 bg-slate-100/70 py-6 sm:py-8 lg:py-10">
        <div className="content-wrap">
        {productsFromLocalStorage.length ? (
          <>
            <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
              <HeaderCart />
              <ProductsCartList productsSelected={productsSelected} />
            </div>
          </>
        ) : (
          <EmptyCart />
        )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Cart;
