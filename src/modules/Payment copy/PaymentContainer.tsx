import { useProductsStore } from "../../store/products";
import PaymentForm from "./components/PaymentForm";
import PaymentList from "./components/PaymentList";

const PaymentContainer = () => {
  const { productsSelected } = useProductsStore();

    console.log(productsSelected)

  return (
    <div className=" flex h-full">
      <PaymentForm />
      <PaymentList productsSelected={productsSelected} />
    </div>
  );
};

export default PaymentContainer;
