import Footer from "../components/Footer";
import Header from "../components/Header";
import PaymentContainer from "../modules/Payment/PaymentContainer";

const Payment = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1 bg-slate-100/70 py-6 sm:py-8">
        <div className="content-wrap">
          <PaymentContainer />
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Payment;
