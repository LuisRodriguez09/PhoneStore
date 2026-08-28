import { FC } from "react";

interface TabsMainPageProps {
  productsSelected: string;
  setProductsSelected: (value: string) => void;
}

const TabsMainPage: FC<TabsMainPageProps> = ({
  productsSelected,
  setProductsSelected,
}) => {
  const tabBaseClass =
    "whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition";

  return (
    <ul className="content-wrap flex gap-2 overflow-x-auto pb-2">
      <li
        className={`${tabBaseClass} cursor-pointer ${
          productsSelected === "bestSellers" &&
          "border-slate-900 bg-slate-900 text-white"
        } ${
          productsSelected !== "bestSellers" &&
          "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
        }`}
        onClick={() => setProductsSelected("bestSellers")}
      >
        Más Vendidos
      </li>
      <li
        className={`${tabBaseClass} cursor-pointer ${
          productsSelected === "newer" &&
          "border-slate-900 bg-slate-900 text-white"
        } ${
          productsSelected !== "newer" &&
          "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
        }`}
        onClick={() => setProductsSelected("newer")}
      >
        Lo más nuevo
      </li>
      <li
        className={`${tabBaseClass} cursor-pointer ${
          productsSelected === "offers" &&
          "border-slate-900 bg-slate-900 text-white"
        } ${
          productsSelected !== "offers" &&
          "border-slate-300 bg-white text-slate-700 hover:border-slate-400"
        }`}
        onClick={() => setProductsSelected("offers")}
      >
        Ofertas
      </li>
    </ul>
  );
};

export default TabsMainPage;
