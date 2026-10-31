import { useProductsStore } from "../../store/products";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";

const PaymentContainer = () => {
  const { productsSelected } = useProductsStore();

  return (
    <div className="flex h-full flex-col gap-4 lg:flex-row">
      {/* <FlagPayment productsSelected={productsSelected} /> */}
      <PaymentForm productsSelected={productsSelected} />
      <PaymentList productsSelected={productsSelected} />
    </div>
  );
};

export default PaymentContainer;