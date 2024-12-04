import { useState } from "react";
import BestSellers from "../BestSellers/BestSellers";
import TabsMainPage from "../TabsMainPage/TabsMainPage";

const Products = () => {
  const [productsSelected, setProductsSelected] = useState("bestSellers");

  return (
    <section>
      <TabsMainPage
        productsSelected={productsSelected}
        setProductsSelected={setProductsSelected}
      />
      <BestSellers />
    </section>
  );
};

export default Products;
