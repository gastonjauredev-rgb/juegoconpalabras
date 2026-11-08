
import { useState } from "react";
import "../../Style/HandGameCard.css";

function HandGameCard({ title, emoji, age, description, steps }) {
  const [showSteps, setShowSteps] = useState(false);

  return (
    <article className="hand-game-card">
      <div className="hand-game-card__top">
        <span className="hand-game-card__age">{age}</span>
        <span className="hand-game-card__emoji" aria-hidden="true">
          {emoji}
        </span>
      </div>

      <div className="hand-game-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      {showSteps && (
        <div className="hand-game-card__instructions">
          <h4>¿Cómo jugamos?</h4>

          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}

      <button
        type="button"
        className="hand-game-card__button"
        onClick={() => setShowSteps(!showSteps)}
        aria-expanded={showSteps}
      >
        {showSteps ? "Ocultar instrucciones" : "Ver cómo jugar"}
      </button>
    </article>
  );
}

export default HandGameCard;
