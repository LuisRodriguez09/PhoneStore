import { PHONE_NUMBER } from "../../constants";

function Footer() {
  return (
    <footer className="store-footer" id="contacto">
      <div className="footer-inner">
        <div className="footer-brand">
          <a className="store-brand" href="/" aria-label="Phone Planet, inicio">
            <img className="brand-logo" src="/branding/picture-profile-phone.jpg" alt="" />
            <span>Phone Planet</span>
          </a>
          <p>Tu tienda local de tecnología. Encuentra tu próximo iPhone con atención honesta y personalizada.</p>
        </div>
        <div>
          <h2>Explora</h2>
          <nav className="footer-links" aria-label="Enlaces de tienda">
            <a href="/#catalogo">Ver equipos</a>
            <a href="/#beneficios">Compra segura</a>
            <a href="/cart">Mi carrito</a>
          </nav>
        </div>
        <div>
          <h2>¿Te ayudamos?</h2>
          <div className="footer-links">
            <a href={`https://wa.me/${PHONE_NUMBER}`} target="_blank" rel="noreferrer">Escríbenos por WhatsApp</a>
            <a href="mailto:phoneplanet323@gmail.com">phoneplanet323@gmail.com</a>
            <span>C. Libertad 514, Zona Centro, Chihuahua</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} Phone Planet · Chihuahua, México</div>
    </footer>
  );
}

export default Footer;
