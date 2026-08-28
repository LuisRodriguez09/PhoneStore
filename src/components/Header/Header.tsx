import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categories = [
    { label: "Destacados", href: "#destacados" },
    { label: "Catálogo", href: "#catalogo" },
    { label: "Seminuevos", href: "#catalogo" },
    { label: "Entrega", href: "#destacados" },
    { label: "Soporte", href: "#catalogo" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const iconButtonClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:bg-slate-100 hover:text-slate-900";

  return (
    <header className="border-b border-slate-200/80 bg-[#fbfbfd] text-slate-900">
      <div className="content-wrap py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:min-w-[180px]">
            <button
              className="flex items-center gap-3 text-left"
              onClick={() => {
                closeMobileMenu();
                navigate("/");
              }}
            >
              <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-900 text-[11px] font-black tracking-[0.18em] text-white">
                PP
              </span>
              <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:inline md:text-base">
                Phone Planet
              </span>
            </button>
          </div>

          <nav className="hidden min-w-0 flex-1 justify-center md:flex">
            <ul className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-600 lg:gap-6">
              {categories.map((category) => (
                <li key={category.label}>
                  <a
                    href={category.href}
                    className="transition hover:text-slate-900"
                  >
                    {category.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-0.5 sm:gap-1 md:min-w-[180px] md:justify-end">
            <a href="#catalogo" className={iconButtonClass} aria-label="Explorar catálogo">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
                <path d="M16 16L20 20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </a>

            <button
              onClick={() => {
                closeMobileMenu();
                navigate("/cart");
              }}
              className={iconButtonClass}
              aria-label="Ir al carrito"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M6 7.5h12l-1 11H7l-1-11Zm3-2.5a3 3 0 0 1 6 0"
                />
              </svg>
            </button>

            <button
              className={`${iconButtonClass} md:hidden`}
              onClick={() => setIsMobileMenuOpen((current) => !current)}
              aria-label="Abrir menú"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 7H20M4 12H20M4 17H20"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-3 rounded-[24px] bg-white p-3 shadow-sm ring-1 ring-slate-200 md:hidden">
            <nav>
              <ul className="grid grid-cols-2 gap-2">
                {categories.map((category) => (
                  <li key={category.label}>
                    <a
                      href={category.href}
                      className="flex min-h-11 items-center rounded-2xl bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
                      onClick={closeMobileMenu}
                    >
                      {category.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      <div className="border-t border-slate-200/80 bg-white/70">
        <div className="content-wrap py-3 text-center text-sm text-slate-600">
          Equipos seminuevos verificados y atención real por WhatsApp.
          <a href="#catalogo" className="ml-2 font-semibold text-sky-600 transition hover:text-sky-700">
            Explorar catálogo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
