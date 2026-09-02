import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  ChevronDown,
  CreditCard,
  Cpu,
  Menu,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import Cart from "./layout/Cart";
import Payment from "./layout/Payment";
import ProductDetail from "./layout/Product";
import { useProductsStore } from "./store/products";
import "./App.css";

type ShowcaseProduct = {
  id: string;
  inventoryId: string;
  category: string;
  name: string;
  tagline: string;
  price: string;
  storage: string;
  image: string;
  colors: { name: string; value: string }[];
};

const products: ShowcaseProduct[] = [
  {
    id: "iphone-16-pro",
    inventoryId: "iphone-16-pro",
    category: "iPhone 16 Pro",
    name: "iPhone 16 Pro",
    tagline: "El iPhone más avanzado.",
    price: "Desde $25,999 MXN o $1,083.29 al mes a 24 MSI*",
    storage: "De 128 GB a 1 TB",
    image: "/phones/14problack1/main.jpeg",
    colors: [
      { name: "Titanio natural", value: "#b8b2a8" },
      { name: "Titanio desierto", value: "#b7997c" },
      { name: "Titanio blanco", value: "#e7e6e2" },
      { name: "Titanio negro", value: "#343433" },
    ],
  },
  {
    id: "iphone-16",
    inventoryId: "iphone-16",
    category: "iPhone 16",
    name: "iPhone 16",
    tagline: "Potencia para todo.",
    price: "Desde $19,999 MXN o $833.29 al mes a 24 MSI*",
    storage: "De 128 GB a 512 GB",
    image: "/phones/13promaxpurple1/main.jpg",
    colors: [
      { name: "Ultramarine", value: "#7889d6" },
      { name: "Teal", value: "#9bc7c1" },
      { name: "Pink", value: "#f2c8d1" },
      { name: "Negro", value: "#2d2e30" },
    ],
  },
  {
    id: "iphone-15",
    inventoryId: "iphone-15",
    category: "iPhone 15",
    name: "iPhone 15",
    tagline: "Nueva cámara. Nuevo diseño. Pura emoción.",
    price: "Desde $16,999 MXN o $708.29 al mes a 24 MSI*",
    storage: "De 128 GB a 512 GB",
    image: "/phones/12blue1/main.jpeg",
    colors: [
      { name: "Azul", value: "#b9c8dd" },
      { name: "Verde", value: "#c2d8c3" },
      { name: "Amarillo", value: "#f1d9a8" },
      { name: "Negro", value: "#353535" },
    ],
  },
  {
    id: "iphone-14-refurbished",
    inventoryId: "iphone-14-pro-max-reacondicionado",
    category: "Refurbished",
    name: "iPhone 14 Pro Max",
    tagline: "Pro. Más allá de todo.",
    price: "Desde $12,000 MXN o $500 al mes a 24 MSI*",
    storage: "De 128 GB a 1 TB",
    image: "/phones/14promaxblack1/main.jpg",
    colors: [
      { name: "Morado intenso", value: "#4a425e" },
      { name: "Oro", value: "#d9c9ad" },
      { name: "Plata", value: "#dad9d6" },
      { name: "Negro espacial", value: "#242425" },
    ],
  },
];

const filters = ["Todos los modelos", "iPhone 16 Pro", "iPhone 16", "iPhone 15", "Reacondicionados"];

function Storefront() {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState("Todos los modelos");
  const [selectedColors, setSelectedColors] = useState<Record<string, number>>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [comparisonProductId, setComparisonProductId] = useState<string | null>(null);
  const { productsSelected } = useProductsStore();

  const visibleProducts = activeFilter === "Todos los modelos"
    ? products
    : products.filter((product) => product.category === activeFilter);

  const goToProduct = (productId: string) => navigate(`/product/${productId}`);

  useEffect(() => {
    const hash = window.location.hash;
    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ block: "start" });
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-[#fbfbfd] text-[#1d1d1f]">
      <div className="announcement-bar px-4 py-2 text-center text-xs text-[#6e6e73] sm:text-sm">
        Recibe hasta $10,000 MXN al entregar tu iPhone actual. Consulta términos y condiciones.
        <a className="ml-1 inline-flex items-center font-medium text-[#0066cc]" href="#trade-in">
          Comprar iPhone <ChevronDown className="ml-0.5 h-3 w-3 -rotate-90" aria-hidden="true" />
        </a>
      </div>

      <header className="sticky top-0 z-30 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
        <nav className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-5" aria-label="Navegación principal">
          <a href="#top" className="brand-mark" aria-label="Inicio de Aurelium">A</a>
          <div className="hidden items-center gap-8 text-xs font-medium text-[#424245] md:flex">
            {['iPhone', 'Mac', 'Watch', 'Accesorios', 'Soporte'].map((item) => (
              <a className="nav-link" href="#catalog" key={item}>{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-1">
            <button className="icon-button hidden sm:inline-flex" aria-label="Buscar productos"><Search size={18} strokeWidth={1.8} /></button>
            <button className="icon-button relative" aria-label={`Bolsa de compras con ${productsSelected.length} productos`} onClick={() => navigate("/cart")}>
              <ShoppingBag size={18} strokeWidth={1.8} />
              <span className="bag-count">{productsSelected.length}</span>
            </button>
            <button className="icon-button md:hidden" aria-expanded={menuOpen} aria-label="Abrir navegación" onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <div className="border-t border-gray-100 bg-white px-5 py-4 md:hidden">
            <div className="grid grid-cols-2 gap-y-4 text-sm font-medium text-[#424245]">
              {['iPhone', 'Mac', 'Watch', 'Accesorios', 'Soporte'].map((item) => <a href="#catalog" key={item} onClick={() => setMenuOpen(false)}>{item}</a>)}
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero-grid px-5 pb-14 pt-16 sm:pt-20 lg:pb-24" aria-labelledby="hero-heading">
          <div className="mx-auto grid max-w-[1120px] items-center gap-11 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
            <div className="max-w-xl">
              <p className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0071e3]"><Sparkles size={15} /> Nuevo lanzamiento</p>
              <h1 id="hero-heading" className="max-w-2xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">iPhone 16 Pro.<br />Titanio. Muy Pro.</h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-[#6e6e73]">Nuestro iPhone más avanzado, con mayor control de cámara, rendimiento extraordinario y batería para todo el día.</p>
              <div className="mt-8 flex items-center gap-5">
                <button className="primary-button" onClick={() => goToProduct(products[0].inventoryId)}>Comprar</button>
                <a className="text-link" href="#catalog">Más información <ArrowRight size={16} /></a>
              </div>
              <p className="mt-9 text-xs text-[#86868b]">Desde $25,999 MXN o $1,083.29 al mes a 24 MSI*</p>
            </div>
            <div className="hero-device-stage" aria-label="Imagen del producto iPhone 16 Pro">
              <div className="hero-halo" />
              <span className="feature-pill camera-pill"><Camera size={15} /> Cámara Fusion de 48 MP</span>
              <span className="feature-pill chip-pill"><Cpu size={15} /> Chip A18 Pro</span>
              <div className="hero-phone" role="img" aria-label="iPhone 16 Pro de titanio">
                <div className="hero-phone-screen"><div className="hero-island" /></div>
                <div className="hero-camera-cluster"><i /><i /><i /><b /></div>
              </div>
              <div className="device-shine" />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1120px] px-5 py-14 lg:py-20" aria-labelledby="highlights-heading">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div><p className="section-kicker">Capacidad extraordinaria</p><h2 id="highlights-heading" className="section-title">Diseñado para hacer más.</h2></div>
            <a className="text-link hidden sm:flex" href="#catalog">Conoce los detalles <ArrowRight size={15} /></a>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <FeatureCard icon={<Camera />} title="Control de la cámara" text="Accede más rápido a las herramientas de cámara y captura el momento perfecto." tone="camera" />
            <FeatureCard icon={<Cpu />} title="Chip A18 Pro" text="Un gran avance en desempeño gráfico para apps y juegos exigentes." tone="chip" />
            <FeatureCard icon={<BatteryCharging />} title="Batería para todo el día" text="Hasta 33 horas de reproducción de video para hacer más durante el día." tone="battery" />
            <FeatureCard icon={<CreditCard />} title="Hazlo tuyo" text="Obtén una estimación de tu iPhone actual y paga a tu ritmo." tone="trade" />
          </div>
        </section>

        <section id="catalog" className="border-y border-[#e5e5e7] bg-white px-5 py-16 lg:py-20" aria-labelledby="catalog-heading">
          <div className="mx-auto max-w-[1120px]">
            <div className="max-w-2xl"><p className="section-kicker">Encuentra tu iPhone</p><h2 id="catalog-heading" className="section-title">¿Qué iPhone es ideal para ti?</h2><p className="mt-3 text-base text-[#6e6e73]">Compara los últimos modelos y elige el iPhone que se adapta a tu vida.</p></div>
            <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filtrar modelos de iPhone">
              {filters.map((filter) => <button className={`filter-tab ${activeFilter === filter ? 'active' : ''}`} key={filter} role="tab" aria-selected={activeFilter === filter} onClick={() => setActiveFilter(filter)}>{filter}</button>)}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {visibleProducts.map((product) => {
                const selectedColor = selectedColors[product.id] ?? 0;
                return <article className="product-card" key={product.id}>
                  <span className="storage-badge">{product.storage}</span>
                  <button className="product-render" type="button" onClick={() => goToProduct(product.inventoryId)} aria-label={`Ver detalle de ${product.name}`}><img src={product.image} alt={`${product.name} en ${product.colors[selectedColor].name}`} /></button>
                  <div className="px-6 pb-6 pt-4">
                    <button className="product-title" type="button" onClick={() => goToProduct(product.inventoryId)}>{product.name}</button>
                    <p className="mt-1 min-h-10 text-sm text-[#6e6e73]">{product.tagline}</p>
                    <fieldset className="mt-5"><legend className="sr-only">Elige un acabado para {product.name}</legend><div className="flex gap-2">{product.colors.map((color, index) => <button className={`color-swatch ${selectedColor === index ? 'selected' : ''}`} style={{ backgroundColor: color.value }} type="button" aria-label={color.name} aria-pressed={selectedColor === index} key={color.name} onClick={() => setSelectedColors((colors) => ({ ...colors, [product.id]: index }))} />)}</div></fieldset>
                    <p className="mt-5 text-sm font-medium leading-5 text-[#424245]">{product.price}</p>
                    <div className="mt-6 flex items-center gap-4"><button className="primary-button small" onClick={() => goToProduct(product.inventoryId)}>Comprar</button><button className="compare-button" type="button" aria-pressed={comparisonProductId === product.id} onClick={() => setComparisonProductId((selected) => selected === product.id ? null : product.id)}>{comparisonProductId === product.id ? "Comparando" : "Comparar"}</button></div>
                  </div>
                </article>;
              })}
            </div>
            {comparisonProductId && (() => {
              const product = products.find((item) => item.id === comparisonProductId);
              return product ? <aside className="comparison-banner" aria-live="polite"><div><p className="section-kicker">Modelo seleccionado para comparar</p><p className="font-semibold text-[#1d1d1f]">{product.name} · {product.storage}</p></div><div className="flex items-center gap-4"><button className="compare-button" onClick={() => setComparisonProductId(null)}>Quitar</button><button className="text-link" onClick={() => goToProduct(product.inventoryId)}>Ver detalle <ArrowRight size={15} /></button></div></aside> : null;
            })()}
          </div>
        </section>

        <section id="trade-in" className="mx-auto max-w-[1120px] px-5 py-16 lg:py-20" aria-labelledby="value-heading">
          <div className="value-banner">
            <div className="value-banner-copy"><p className="section-kicker">Una mejor forma de comprar</p><h2 id="value-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">Todo lo que necesitas.<br />Nada que no.</h2><a className="text-link mt-5" href="#catalog">Conoce todas las opciones <ArrowRight size={15} /></a></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-[#e5e5e7] bg-[#e5e5e7] sm:grid-cols-4">
              <ValueItem icon={<Truck />} title="Envío gratis" text="Entrega express sin costo." />
              <ValueItem icon={<ShieldCheck />} title="Garantía oficial" text="Un año de cobertura incluido." />
              <ValueItem icon={<CreditCard />} title="Hasta 24 MSI" text="Pagos mensuales flexibles." />
              <ValueItem icon={<PackageCheck />} title="Trade In inmediato" text="Recibe crédito por tu equipo." />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d2d2d7] bg-[#f5f5f7] px-5 py-10 text-xs text-[#6e6e73]">
        <div className="mx-auto max-w-[1120px]"><p className="border-b border-[#d2d2d7] pb-5 leading-5">* Precios en pesos mexicanos (MXN), IVA incluido. Las mensualidades aplican con tarjetas participantes y están sujetas a aprobación. El valor de Trade In depende del modelo, estado y elegibilidad del equipo. Distribuidor autorizado. Las imágenes son ilustrativas.</p>
          <div className="grid grid-cols-2 gap-8 py-8 sm:grid-cols-4">
            <FooterGroup title="Compra y conoce" items={['iPhone', 'Mac', 'Watch', 'Accesorios']} /><FooterGroup title="Servicios" items={['Financiamiento', 'Trade In', 'Envíos', 'Soporte']} /><FooterGroup title="Para empresas" items={['Tienda para empresas', 'Educación', 'Gobierno']} /><FooterGroup title="Aurelium" items={['Nuestras tiendas', 'Noticias', 'Contáctanos']} />
          </div>
          <div className="flex flex-col gap-3 border-t border-[#d2d2d7] pt-5 sm:flex-row sm:justify-between"><span>Copyright 2026 Aurelium. Todos los derechos reservados.</span><span>Aviso de privacidad &nbsp; Términos de uso &nbsp; Ventas y reembolsos</span></div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, text, tone }: { icon: React.ReactNode; title: string; text: string; tone: string }) {
  return <article className={`feature-card feature-${tone}`}><div className="feature-icon">{icon}</div><h3 className="mt-12 text-xl font-semibold tracking-tight">{title}</h3><p className="mt-2 text-sm leading-6 text-[#6e6e73]">{text}</p><ArrowRight className="mt-7 text-[#0071e3]" size={18} /></article>;
}

function ValueItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return <div className="bg-white px-5 py-6"><div className="mb-5 text-[#0071e3]">{icon}</div><h3 className="text-sm font-semibold">{title}</h3><p className="mt-1 text-xs leading-5 text-[#6e6e73]">{text}</p></div>;
}

function FooterGroup({ title, items }: { title: string; items: string[] }) {
  return <div><h3 className="mb-3 font-semibold text-[#424245]">{title}</h3><ul className="space-y-2">{items.map((item) => <li key={item}><a className="hover:underline" href="#top">{item}</a></li>)}</ul></div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Storefront />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<Storefront />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
