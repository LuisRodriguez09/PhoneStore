import { FC } from "react";

interface TabsMainPageProps {
  productsSelected: string;
  setProductsSelected: (value: string) => void;
}

const TabsMainPage: FC<TabsMainPageProps> = ({
  productsSelected,
  setProductsSelected,
}) => {
  const categories = ["Todos", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11"];

  return (
    <div className="category-tabs" role="group" aria-label="Filtrar por modelo">
      {categories.map((category) => (
        <button
          key={category}
          className="category-tab"
          type="button"
          aria-pressed={productsSelected === category}
          onClick={() => setProductsSelected(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default TabsMainPage;
