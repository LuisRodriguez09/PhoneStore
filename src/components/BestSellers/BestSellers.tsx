import {  phones } from "../../services/phones";
import { Product } from "../../types/products";
import ProductCard from "../ProductCard";

const BestSellers = () => {
  return (
    <section className="pb-12 sm:pb-16">
      <div className="content-wrap">
        <div className="hide-scrollbar overflow-x-auto pb-3 md:overflow-visible">
          <div className="grid grid-flow-col auto-cols-[82%] gap-4 sm:auto-cols-[320px] md:grid-flow-row md:auto-cols-auto md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {phones.map((phone: Product) => (
              <ProductCard key={phone.id} {...phone} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
