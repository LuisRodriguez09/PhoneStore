import { phones } from "../../services/phones";
import BestSellers from "../BestSellers/BestSellers";

const Products = () => {
  const curatedCategories = [
    {
      title: "iPhone",
      subtitle: "Nuestros favoritos",
      image: phones[2].mainPhoto,
    },
    {
      title: "Pro",
      subtitle: "Más potencia",
      image: phones[3].mainPhoto,
    },
    {
      title: "Seminuevos",
      subtitle: "Verificados",
      image: phones[0].mainPhoto,
    },
    {
      title: "Entrega",
      subtitle: "Listos para hoy",
      image: phones[4].mainPhoto,
    },
    {
      title: "Ofertas",
      subtitle: "Bien elegidas",
      image: phones[6].mainPhoto,
    },
  ];

  return (
    <section className="pb-16 sm:pb-20">
      <div className="content-wrap">
        <div className="hide-scrollbar overflow-x-auto pb-3">
          <ul className="flex min-w-max gap-3 sm:gap-4">
            {curatedCategories.map((category) => (
              <li key={category.title} className="w-[138px] sm:w-[160px]">
                <a
                  href="#catalogo"
                  className="group block rounded-[28px] bg-white p-3 shadow-sm ring-1 ring-slate-200/70 transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-24 items-center justify-center overflow-hidden rounded-[20px] bg-[#f5f5f7] sm:h-28">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="h-full w-full object-cover transition group-hover:scale-[1.03]"
                    />
                  </div>
                  <p className="mt-3 text-base font-bold text-slate-900">{category.title}</p>
                  <p className="mt-1 text-xs font-semibold text-slate-500">{category.subtitle}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div id="destacados" className="content-wrap mt-12 sm:mt-16">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <span>Lo último.</span>
            <span className="text-slate-500"> Una tienda que ya se siente premium.</span>
          </h2>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <article className="overflow-hidden rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-600">
              Compra inteligente
            </p>
            <h3 className="mt-3 max-w-xl text-2xl font-black leading-tight text-slate-900 sm:text-4xl">
              Equipos revisados, fotos reales y menos fricción al comprar.
            </h3>
            <p className="mt-4 max-w-lg text-sm font-semibold leading-6 text-slate-500 sm:text-base">
              Mejoramos la navegación, el responsive y la forma de presentar tu inventario para que el catálogo se vea claro desde el primer scroll.
            </p>
            <img
              src={phones[2].mainPhoto}
              alt="Equipo destacado"
              className="mt-6 h-64 w-full rounded-[28px] object-cover sm:h-80"
            />
          </article>

          <div className="grid gap-4">
            <article className="rounded-[32px] bg-slate-900 p-6 text-white shadow-sm sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
                Atención real
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                WhatsApp, carrito y checkout ahora conviven mejor.
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-300 sm:text-base">
                Menos bloques rígidos, mejor jerarquía visual y más claridad para convertir visitas en compras.
              </p>
            </article>

            <article className="rounded-[32px] bg-gradient-to-br from-sky-50 to-white p-6 shadow-sm ring-1 ring-slate-200/70 sm:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
                Entrega local
              </p>
              <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900 sm:text-3xl">
                Inventario listo para moverse rápido.
              </h3>
              <p className="mt-4 text-sm font-semibold leading-6 text-slate-500 sm:text-base">
                Presenta disponibilidad, precio y estado del equipo sin saturar la pantalla en móvil.
              </p>
            </article>
          </div>
        </div>
      </div>

      <div id="catalogo" className="mt-12 sm:mt-16">
        <div className="content-wrap mb-6">
          <h2 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
            <span>Favoritos.</span>
            <span className="text-slate-500"> Equipos listos para entrega.</span>
          </h2>
        </div>

        <BestSellers />
      </div>
    </section>
  );
};

export default Products;
