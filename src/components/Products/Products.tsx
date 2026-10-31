import { useMemo, useState } from "react";
import BestSellers from "../BestSellers/BestSellers";
import TabsMainPage from "../TabsMainPage/TabsMainPage";
import { phones } from "../../services/phones";
import { Product } from "../../types/products";

const Products = () => {
  const [productsSelected, setProductsSelected] = useState("Todos");
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => {
    const normalizedSearch = search.trim().toLocaleLowerCase("es");

    return phones.filter((phone: Product) => {
      const matchesCategory =
        productsSelected === "Todos" || phone.name.includes(productsSelected);
      const matchesSearch =
        normalizedSearch.length === 0 ||
        phone.name.toLocaleLowerCase("es").includes(normalizedSearch);

      return matchesCategory && matchesSearch;
    });
  }, [productsSelected, search]);

  return (
    <section className="catalog-section" id="catalogo">
      <div className="catalog-heading">
        <div>
          <span className="eyebrow">Encuentra el tuyo</span>
          <h2>Equipos disponibles</h2>
          <p>Explora nuestra selección de iPhone revisados.</p>
        </div>
        <label className="catalog-search">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Buscar un modelo"
            aria-label="Buscar un modelo"
          />
        </label>
      </div>
      <TabsMainPage
        productsSelected={productsSelected}
        setProductsSelected={setProductsSelected}
      />
      <BestSellers products={filteredProducts} />
    </section>
  );
};

export default Products;
