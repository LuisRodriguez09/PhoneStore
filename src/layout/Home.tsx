import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import TitleSection from "../components/TitleSection/TtitleSection";

const Home = () => {
  return (
    <main className="storefront flex min-h-screen flex-col">
      <Header />
      <TitleSection />
      <Products />
      <Footer /> 
    </main>
  );
};

export default Home;
