const TitleSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow">Tecnología para todos los días</span>
            <h1>Tu próximo iPhone, <span>está aquí.</span></h1>
            <p>Equipos seleccionados, revisados y listos para acompañarte. Encuentra el tuyo con atención cercana y sin complicaciones.</p>
            <div className="hero-actions">
              <a className="primary-link" href="#catalogo">Explorar equipos <span aria-hidden="true">→</span></a>
              <span className="hero-note">Compra con confianza en Phone Planet</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="iPhone 14 Pro Max destacado">
            <div className="hero-image-orbit" aria-hidden="true" />
            <img
              className="hero-product-image"
              src="/phones/14promaxblack1/main.jpg"
              alt="iPhone 14 Pro Max color negro"
            />
            <span className="hero-product-label">iPhone 14 Pro Max · 256GB</span>
          </div>
        </div>
      </section>
      <section className="benefits-strip" id="beneficios" aria-label="Beneficios de compra">
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">✓</span>
          <span><strong>Equipos revisados</strong>Listos para usar</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">♡</span>
          <span><strong>Atención cercana</strong>Te ayudamos a elegir</span>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon" aria-hidden="true">⌖</span>
          <span><strong>Estamos en Chihuahua</strong>Compra local y segura</span>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
