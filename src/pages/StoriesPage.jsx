
import StoryCard from "../components/Cuentos/StoryCard.jsx";
import { stories } from "../data/stories.js";
import "../Style/StoriesPage.css";

function StoriesPage() {
  return (
    <main className="stories-page">
      <section className="stories-page__hero">
        <div className="stories-page__container">
          <span className="stories-page__eyebrow">
            Historias para imaginar
          </span>

          <h1>📚 Cuentos</h1>

          <p>
            Cada historia nos invita a descubrir nuevas palabras,
            conocer personajes y dejar volar nuestra imaginación.
            Elegí un cuento y disfrutalo en familia.
          </p>
        </div>
      </section>

      <section
        className="stories-page__library"
        aria-labelledby="stories-library-title"
      >
        <div className="stories-page__container">
          <div className="stories-page__heading">
            <span className="stories-page__eyebrow">
              Nuestra biblioteca
            </span>

            <h2 id="stories-library-title">
              Un mundo de historias para escuchar
            </h2>

            <p>
              Explorá nuestra colección de {stories.length} cuentos
              infantiles. Elegí el que más te guste y comenzá
              a escuchar.
            </p>
          </div>

          <div className="stories-page__grid">
            {stories.map((story) => (
              <StoryCard
                key={story.id}
                title={story.title}
                description={story.description}
                youtubeId={story.youtubeId}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="stories-page__family">
        <div className="stories-page__container">
          <div className="stories-page__family-content">
            <span>💬 Después de escuchar</span>

            <h2>¡Conversemos sobre el cuento!</h2>

            <p>
              Compartir una historia también es una oportunidad
              para conversar. Podemos preguntar qué personaje
              les gustó más, qué ocurrió en la historia o
              imaginar juntos un final diferente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default StoriesPage;
