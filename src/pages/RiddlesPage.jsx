
import RiddleCard from "../components/Adivinanzas/RiddleCard.jsx";
import { riddles } from "../data/riddles.js";
import "../Style/RiddlesPage.css";

function RiddlesPage() {
  return (
    <main className="riddles-page">
      <section className="riddles-page__hero">
        <div className="riddles-page__container">
          <span className="riddles-page__eyebrow">
            Jugamos con las palabras
          </span>

          <h1>💡 Adivinanzas</h1>

          <p>
            Escuchamos pistas, pensamos posibilidades y
            descubrimos respuestas. Una manera divertida
            de estimular el lenguaje, la comprensión y
            la imaginación.
          </p>
        </div>
      </section>

      <section
        className="riddles-page__activities"
        aria-labelledby="riddles-title"
      >
        <div className="riddles-page__container">
          <div className="riddles-page__heading">
            <span className="riddles-page__eyebrow">
              ¡A pensar y descubrir!
            </span>

            <h2 id="riddles-title">
              ¿Podés resolver estas adivinanzas?
            </h2>

            <p>
              Tenemos {riddles.length} adivinanzas para jugar.
              Escuchá cada pista, intentá responder y después
              descubrí si acertaste.
            </p>
          </div>

          <div className="riddles-page__grid">
            {riddles.map((riddle) => (
              <RiddleCard
                key={riddle.id}
                question={riddle.question}
                answer={riddle.answer}
                emoji={riddle.emoji}
                category={riddle.category}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="riddles-page__family">
        <div className="riddles-page__container">
          <div className="riddles-page__family-content">
            <span>💬 Para jugar en familia</span>

            <h2>¡Las pistas también nos ayudan a aprender!</h2>

            <p>
              Leé cada adivinanza en voz alta y dale tiempo
              al niño para pensar y responder. Si necesita
              ayuda, podés repetir las pistas, hacer preguntas
              o conversar sobre las características de
              cada objeto, animal o elemento de la naturaleza.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default RiddlesPage;
