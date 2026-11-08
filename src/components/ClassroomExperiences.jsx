
import ClassroomVideoCard from "./ClassroomVideoCard.jsx";
import "../Style/ClassroomExperiences.css";

const classroomVideos = [
  {
    id: 1,
    title: "Aprendemos con el movimiento",
    description:
      "A través de los movimientos y la participación grupal, los niños exploran nuevas formas de expresarse y comunicarse.",
    videoSrc: "/video1.mp4",
  },
  {
    id: 2,
    title: "Jugamos y compartimos",
    description:
      "Las experiencias compartidas permiten desarrollar habilidades de comunicación, coordinación y expresión corporal.",
    videoSrc: "/video2.mp4",
  },
];

function ClassroomExperiences() {
  return (
    <section
      className="classroom-experiences"
      aria-labelledby="classroom-experiences-title"
    >
      <div className="classroom-experiences__container">
        <div className="classroom-experiences__heading">
          <span className="classroom-experiences__eyebrow">
            Experiencias reales
          </span>

          <h2 id="classroom-experiences-title">
            Así aprendemos <span>jugando</span>
          </h2>

          <p>
            El juego, el movimiento y las palabras se encuentran
            en cada experiencia. Compartimos algunos momentos
            de actividades en el aula, donde aprender también
            significa disfrutar, explorar y participar.
          </p>
        </div>

        <div className="classroom-experiences__grid">
          {classroomVideos.map((video) => (
            <ClassroomVideoCard
              key={video.id}
              title={video.title}
              description={video.description}
              videoSrc={video.videoSrc}
            />
          ))}
        </div>

        <p className="classroom-experiences__footer">
          Cada experiencia es una oportunidad para crecer,
          expresarnos y aprender juntos.
        </p>
      </div>
    </section>
  );
}

export default ClassroomExperiences;
