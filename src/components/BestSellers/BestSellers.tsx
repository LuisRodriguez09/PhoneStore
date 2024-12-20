import {  phones } from "../../services/phones";
import { Product } from "../../types/products";
import ProductCard from "../ProductCard";

const BestSellers = () => {
  return (
    <section className="flex flex-col">
      <div className="container flex justify-center">
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-y-6 gap-x-6">
          {phones.map((phone: Product) => (
            <ProductCard key={phone.id} {...phone} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
