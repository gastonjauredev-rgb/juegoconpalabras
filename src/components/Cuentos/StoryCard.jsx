
import { useState } from "react";
import "../../Style/StoryCard.css";

function StoryCard({ title, description, youtubeId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl =
    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`;

  return (
    <article className="story-card">
      <div className="story-card__media">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={`Cuento: ${title}`}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="story-card__preview"
            onClick={() => setIsPlaying(true)}
            aria-label={`Escuchar ${title}`}
          >
            <img
              src={thumbnailUrl}
              alt=""
              loading="lazy"
            />

            <span className="story-card__play" aria-hidden="true">
              ▶
            </span>
          </button>
        )}
      </div>

      <div className="story-card__content">
        <span className="story-card__category">
          Audiocuento infantil
        </span>

        <h3>{title}</h3>

        <p>{description}</p>

        {isPlaying ? (
          <button
            type="button"
            className="story-card__action"
            onClick={() => setIsPlaying(false)}
          >
            Cerrar reproductor
          </button>
        ) : (
          <button
            type="button"
            className="story-card__action"
            onClick={() => setIsPlaying(true)}
          >
            Escuchar cuento
          </button>
        )}
      </div>
    </article>
  );
}

export default StoryCard;
