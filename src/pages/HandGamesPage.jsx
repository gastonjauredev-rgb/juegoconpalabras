
import HandGameCard from "../components/JuegosDeManos/HandGameCard.jsx";
import { handGames } from "../data/handGames.js";
import "../Style/HandGamesPage.css";

function HandGamesPage() {
  return (
    <main className="hand-games-page">
      <section className="hand-games-page__hero">
        <div className="hand-games-page__container">
          <span className="hand-games-page__eyebrow">
            Aprendemos con el movimiento
          </span>

          <h1>🙌 Juegos de manos</h1>

          <p>
            Nuestras manos también pueden contar historias,
            acompañar canciones y crear juegos. Descubrí
            actividades para compartir momentos de
            movimiento, palabras y diversión.
          </p>
        </div>
      </section>

      <section
        className="hand-games-page__activities"
        aria-labelledby="hand-games-title"
      >
        <div className="hand-games-page__container">
          <div className="hand-games-page__heading">
            <span className="hand-games-page__eyebrow">
              ¡Manos a la obra!
            </span>

            <h2 id="hand-games-title">
              Pequeños movimientos, grandes aprendizajes
            </h2>

            <p>
              Explorá nuestras {handGames.length} propuestas.
              Elegí una actividad y descubrí cómo realizarla
              paso a paso.
            </p>
          </div>

          <div className="hand-games-page__grid">
            {handGames.map((game) => (
              <HandGameCard
                key={game.id}
                title={game.title}
                emoji={game.emoji}
                age={game.age}
                description={game.description}
                steps={game.steps}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="hand-games-page__family">
        <div className="hand-games-page__container">
          <div className="hand-games-page__family-content">
            <span>💬 Para compartir en familia</span>

            <h2>¡Cada movimiento es una oportunidad para comunicarnos!</h2>

            <p>
              Realizá las actividades sin apuro, respetando
              los tiempos de cada niño. Acompañá los gestos
              con palabras, repetí las secuencias y celebrá
              sus intentos. Lo importante es disfrutar
              del juego compartido.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HandGamesPage;
