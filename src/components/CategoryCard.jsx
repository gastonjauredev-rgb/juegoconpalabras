
import { Link } from "react-router-dom";
import "../Style/CategoryCard.css";

function CategoryCard({
  title,
  description,
  image,
  color,
  path,
  buttonText,
}) {
  return (
    <article className={`category-card category-card--${color}`}>
      <div className="category-card__illustration">
        <img
          src={image}
          alt=""
          className="category-card__image"
        />
      </div>

      <div className="category-card__content">
        <h3 className="category-card__title">{title}</h3>

        <p className="category-card__description">
          {description}
        </p>

        <Link to={path} className="category-card__link">
          {buttonText}
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </article>
  );
}

export default CategoryCard;
