
import { useState } from "react";
import "../../Style/VideoCard.css";

function VideoCard({ title, description, youtubeId }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const thumbnailUrl =
    `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;

  const embedUrl =
    `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`;

  return (
    <article className="video-card">
      <div className="video-card__media">
        {isPlaying ? (
          <iframe
            src={embedUrl}
            title={title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-card__preview"
            onClick={() => setIsPlaying(true)}
            aria-label={`Reproducir ${title}`}
          >
            <img
              src={thumbnailUrl}
              alt=""
              loading="lazy"
            />

            <span
              className="video-card__play"
              aria-hidden="true"
            >
              ▶
            </span>
          </button>
        )}
      </div>

      <div className="video-card__content">
        <h3 className="video-card__title">
          {title}
        </h3>

        <p className="video-card__description">
          {description}
        </p>

        {isPlaying && (
          <button
            type="button"
            className="video-card__close"
            onClick={() => setIsPlaying(false)}
          >
            Cerrar reproductor
          </button>
        )}
      </div>
    </article>
  );
}

export default VideoCard;
