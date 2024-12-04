import { FC } from "react";

interface TabsMainPageProps {
  productsSelected: string;
  setProductsSelected: (value: string) => void;
}

const TabsMainPage: FC<TabsMainPageProps> = ({
  productsSelected,
  setProductsSelected,
}) => {
  return (
    <ul className="flex mx-24">
      <li
        className={`px-4 py-2 cursor-pointer border-b-4 ${
          productsSelected === "bestSellers" &&
          "border-x-4 border-t-4 border-slate-900"
        }`}
        onClick={() => setProductsSelected("bestSellers")}
      >
        Más Vendidos
      </li>
      <li
        className={`px-4 py-2 cursor-pointer border-b-4 ${
          productsSelected === "newer" &&
          "border-x-4 border-t-4 border-slate-900"
        } `}
        onClick={() => setProductsSelected("newer")}
      >
        Lo más nuevo
      </li>
      <li
        className={`px-4 py-2 cursor-pointer border-b-4 ${
          productsSelected === "offers" &&
          "border-x-4 border-t-4 border-slate-900"
        }  `}
        onClick={() => setProductsSelected("offers")}
      >
        Ofertas
      </li>
    </ul>
  );
};

export default TabsMainPage;
