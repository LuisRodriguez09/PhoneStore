import { FC } from "react";
import { phones } from "../../services/phones";

interface TabsMainPageProps {
  productsSelected: string;
  setProductsSelected: (value: string) => void;
}

const TabsMainPage: FC<TabsMainPageProps> = ({
  productsSelected,
  setProductsSelected,
}) => {
  const models = [...new Set(phones.flatMap((phone) => {
    const model = phone.name.match(/^iPhone \d+/)?.[0];
    return model ? [model] : [];
  }))].sort((a, b) => b.localeCompare(a, "es", { numeric: true }));
  const categories = ["Todos", ...models];

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
