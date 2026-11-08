
import "../../src/Style/ClassroomVideoCard.css";

function ClassroomVideoCard({ title, description, videoSrc }) {
  return (
    <article className="classroom-video-card">
      <div className="classroom-video-card__media">
        <video
          controls
          preload="metadata"
          playsInline
          aria-label={title}
        >
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no admite la reproducción de videos.
        </video>
      </div>

      <div className="classroom-video-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export default ClassroomVideoCard;
