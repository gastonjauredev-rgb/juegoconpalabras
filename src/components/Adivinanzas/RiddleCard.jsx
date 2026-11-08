
import { useState } from "react";
import "../../Style/RiddleCard.css";

function RiddleCard({ question, answer, emoji, category }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <article className="riddle-card">
      <div className="riddle-card__top">
        <span className="riddle-card__category">{category}</span>
        <span className="riddle-card__symbol" aria-hidden="true">
          ?
        </span>
      </div>

      <div className="riddle-card__body">
        <h3>¿Adivinás qué soy?</h3>
        <p className="riddle-card__question">{question}</p>
      </div>

      {showAnswer && (
        <div className="riddle-card__answer" aria-live="polite">
          <span className="riddle-card__emoji" aria-hidden="true">
            {emoji}
          </span>
          <p>
            <span>¡La respuesta es!</span>
            <strong>{answer}</strong>
          </p>
        </div>
      )}

      <button
        type="button"
        className="riddle-card__button"
        onClick={() => setShowAnswer(!showAnswer)}
        aria-expanded={showAnswer}
      >
        {showAnswer ? "Ocultar respuesta" : "Descubrir respuesta"}
      </button>
    </article>
  );
}

export default RiddleCard;
