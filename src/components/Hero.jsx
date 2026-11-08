
import "../Style/Hero.css";

function Hero() {
  const scrollToActivities = () => {
    document.getElementById("actividades")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__eyebrow">
            ✨ Aprender jugando
          </span>

          <h1 id="hero-title" className="hero__title">
            Juego con <span>palabras</span>
            <br />
            y con mi <span>cuerpo</span>
          </h1>

          <p className="hero__subtitle">
            Estimulación del lenguaje
          </p>

          <p className="hero__description">
            Un espacio para descubrir, imaginar, cantar y jugar
            en familia, acompañando el desarrollo del lenguaje
            y el movimiento.
          </p>

          <button
            type="button"
            className="hero__button"
            onClick={scrollToActivities}
          >
            Explorar actividades
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="hero__illustration">
            <span className="hero__illustration-main">🎨</span>
            <span className="hero__illustration-book">📖</span>
            <span className="hero__illustration-music">🎵</span>
            <span className="hero__illustration-star">⭐</span>
            <span className="hero__illustration-hands">🙌</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
