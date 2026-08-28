import { FC } from "react";
import { Product } from "../../types/products";
import { useProductsStore } from "../../store/products";
import toast from "../../utils/toast";
import { useNavigate } from "react-router-dom";

const ProductCard: FC<Product> = (product) => {
  const { mainPhoto: src, name, id, price, description } = product;
  const { setNewProduct } = useProductsStore();

  const navigate = useNavigate();

  const handleAddToCart = () => {
    setNewProduct({ ...product });
    toast("success", "Producto agregado al carrito.");
  };

  return (
    <article className="group relative flex h-full w-full flex-col overflow-hidden rounded-[30px] bg-white p-2 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl">
      <div
        className="relative flex h-60 cursor-pointer items-center justify-center overflow-hidden rounded-[24px] bg-[#f5f5f7] sm:h-64"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          src={src}
          alt={`Imagen de ${name}`}
          onClick={() => navigate(`/product/${id}`)}
        />
      </div>
      <div className="flex flex-1 flex-col px-4 pb-4 pt-4 sm:px-5 sm:pb-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-sky-600">
          Seminuevo verificado
        </p>
        <h5
          className="mt-2 cursor-pointer text-xl font-black tracking-tight text-slate-900 sm:text-2xl"
          onClick={() => navigate(`/product/${id}`)}
        >
          {name}
        </h5>
        <p
          className="mt-2 line-clamp-2 cursor-pointer text-sm font-semibold leading-6 text-slate-500"
          onClick={() => navigate(`/product/${id}`)}
        >
          {description}
        </p>
        <div className="mb-4 mt-5 flex items-end justify-between gap-4">
          <p>
            <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
              Desde
            </span>
            <span className="text-2xl font-black text-slate-900 sm:text-3xl">${price}</span>
          </p>

          <button
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-700"
            onClick={handleAddToCart}
          >
            Agregar
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
