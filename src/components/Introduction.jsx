
import "../Style/Introduction.css";

function Introduction() {
  return (
    <section
      className="introduction"
      aria-labelledby="introduction-title"
    >
      <div className="introduction__container">
        <div className="introduction__heading">
          <span className="introduction__eyebrow">
            Crecer, descubrir y comunicarnos
          </span>

          <h2
            id="introduction-title"
            className="introduction__title"
          >
            ¿Por qué estimular el
            <span> lenguaje oral?</span>
          </h2>

          <p className="introduction__lead">
            Cada palabra, cada gesto y cada juego
            son oportunidades para aprender.
          </p>
        </div>

        <div className="introduction__content">
          <div className="introduction__decoration" aria-hidden="true">
            <span className="introduction__symbol introduction__symbol--one">
              ✦
            </span>

            <span className="introduction__symbol introduction__symbol--two">
              ✳
            </span>

            <span className="introduction__symbol introduction__symbol--three">
              ✦
            </span>

            <div className="introduction__speech">
              <span>¡Hola!</span>
            </div>
          </div>

          <div className="introduction__text">
            <p>
              El lenguaje es la herramienta que nos permite
              comunicarnos a lo largo de toda la vida.
              Favorece nuestras relaciones, nuestros logros
              y está implicado en cada experiencia que
              nos atraviesa.
            </p>

            <p>
              Es, sin duda, una de las habilidades más
              importantes que desarrollamos. Nos permite
              poner en juego nuestra creatividad e imaginación,
              a la vez que moldea nuestro pensamiento.
            </p>

            <div className="introduction__highlight">
              <span aria-hidden="true">♥</span>

              <p>
                A través del juego, podemos acompañar
                este desarrollo de una manera natural,
                afectiva y divertida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Introduction;
