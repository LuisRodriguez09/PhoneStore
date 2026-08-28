const TitleSection = () => {
  return (
    <section className="content-wrap py-10 sm:py-14 lg:py-20">
      <div className="max-w-4xl text-left">
        <h1 className="text-4xl font-black  tracking-tight text-slate-900 sm:text-5xl lg:text-7xl">
          <span>Tienda.</span>
          <span className="block text-slate-500 sm:inline"> Compra mejor, más rápido y sin ruido.</span>
        </h1>

        <div className="mt-8 flex flex-col gap-3 text-lg font-semibold text-sky-600 sm:flex-row sm:gap-8">
          <a href="#catalogo" className="transition hover:text-sky-700 no-underline">
            Ver catálogo ↗
          </a>
          <a href="#destacados" className="transition hover:text-sky-700 no-underline">
            Ver destacados ↗
          </a>
        </div>
      </div>
    </section>
  );
};

export default TitleSection;
