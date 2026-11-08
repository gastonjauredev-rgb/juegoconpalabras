
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <NavLink
          to="/"
          className="header__brand"
          onClick={closeMenu}
        >
          <span className="header__brand-icon" aria-hidden="true">
            ✨
          </span>

          <span className="header__brand-text">
            Juego con palabras
            <small>y con mi cuerpo</small>
          </span>
        </NavLink>

        <button
          className="header__toggle"
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="header-navigation"
          className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Inicio
          </NavLink>

          <NavLink to="/musica" onClick={closeMenu}>
            Música y danza
          </NavLink>

          <NavLink to="/cuentos" onClick={closeMenu}>
            Cuentos
          </NavLink>

          <NavLink to="/adivinanzas" onClick={closeMenu}>
            Adivinanzas
          </NavLink>

          <NavLink to="/juegos-de-manos" onClick={closeMenu}>
            Juegos de manos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
