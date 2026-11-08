
import VideoCard from "../components/Musicaydanza/VideoCard.jsx";
import { musicVideos } from "../data/musicVideos.js";
import "../Style/MusicPage.css";

function MusicPage() {
  return (
    <main className="music-page">
      <section className="music-page__hero">
        <div className="music-page__container">
          <span className="music-page__eyebrow">
            Aprender jugando
          </span>

          <h1>🎵 Música y danza</h1>

          <p>
            Cantamos, bailamos y exploramos sonidos.
            Descubrí propuestas para estimular el lenguaje,
            el ritmo y la expresión corporal mientras
            compartimos momentos en familia.
          </p>
        </div>
      </section>

      <section
        className="music-page__videos"
        aria-labelledby="music-videos-title"
      >
        <div className="music-page__container">
          <div className="music-page__heading">
            <h2 id="music-videos-title">
              Canciones para jugar y aprender
            </h2>

            <p>
              Elegí una actividad y disfrutala
              sin salir de nuestra página.
            </p>
          </div>

          <div className="music-page__grid">
            {musicVideos.map((video) => (
              <VideoCard
                key={video.id}
                title={video.title}
                description={video.description}
                youtubeId={video.youtubeId}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default MusicPage;
