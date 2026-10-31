import { useState } from "react";
import { Bag, List, X } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useProductsStore } from "../../store/products";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartCount = useProductsStore((state) => state.productsSelected.length);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="store-header">
      <div className="announcement-bar">Equipos revisados · Atención personalizada en Chihuahua</div>
      <div className="header-inner">
        <Link className="store-brand" to="/" aria-label="Phone Planet, inicio" onClick={closeMenu}>
          <img className="brand-logo" src="/branding/picture-profile-phone.jpg" alt="" />
          <span>Phone Planet</span>
        </Link>
        <nav className={`header-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegación principal">
          <Link to="/#catalogo" onClick={closeMenu}>Catálogo</Link>
          <Link to="/#beneficios" onClick={closeMenu}>Compra segura</Link>
          <Link to="/#contacto" onClick={closeMenu}>Contacto</Link>
        </nav>
        <div className="header-actions">
          <Link className="cart-link" to="/cart" aria-label={`Carrito, ${cartCount} productos`}>
            <Bag size={19} aria-hidden="true" />
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <List size={20} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
