import Footer from "../components/Footer";
import Header from "../components/Header";
import Products from "../components/Products";
import TitleSection from "../components/TitleSection/TtitleSection";

const Home = () => {
  return (
    <main>
      <Header />
      {/* <MainSlider /> */}
      <TitleSection />
      <Products />
      <Footer /> 
    </main>
  );
};

export default Home;
