import { useProductsStore } from "../../store/products";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";

const PaymentContainer = () => {
  const { productsSelected } = useProductsStore();

  return (
    <div className="lg:flex-row flex flex-col h-full">
      {/* <FlagPayment productsSelected={productsSelected} /> */}
      <PaymentForm productsSelected={productsSelected} />
      <PaymentList productsSelected={productsSelected} />
    </div>
  );
};

export default PaymentContainer;