
import Hero from "../components/Hero.jsx";
import Introduction from "../components/Introduction.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import ClassroomExperiences from "../components/ClassroomExperiences.jsx";

import { categories } from "../data/categories.js";

import "../Style/Home.css";

function Home() {
  return (
    <main className="home">
      <Hero />

      <Introduction />

      <section
        id="actividades"
        className="home__activities"
        aria-labelledby="activities-title"
      >
        <div className="home__activities-container">
          <div className="home__activities-heading">
            <span className="home__activities-eyebrow">
              Aprendemos mientras jugamos
            </span>

            <h2 id="activities-title">
              Un mundo de actividades
              <span> para descubrir</span>
            </h2>

            <p>
              Cada propuesta es una oportunidad para compartir,
              expresarnos y desarrollar nuevas habilidades en familia.
            </p>
          </div>

          <div className="home__activities-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                image={category.image}
                color={category.color}
                path={category.path}
                buttonText={category.buttonText}
              />
            ))}
          </div>
        </div>
      </section>

      <ClassroomExperiences />
    </main>
  );
}

export default Home;
