
import { Link, useNavigate } from "react-router-dom";
import { showAdminLogin } from "../auth/adminLoginAlert.js";
import "../Style/Footer.css";

function Footer() {
  const navigate = useNavigate();

  const handleAdminAccess = async () => {
    const authenticated = await showAdminLogin();

    if (authenticated) {
      navigate("/admin");
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          <div className="footer__identity">
            <Link to="/" className="footer__brand">
              <span aria-hidden="true">✦</span>
              Juego con palabras y con mi cuerpo
            </Link>

            <p>
              Un espacio para acompañar el desarrollo
              del lenguaje y la motricidad a través del juego,
              la imaginación y el movimiento.
            </p>
          </div>

          <nav
            className="footer__navigation"
            aria-label="Navegación del pie de página"
          >
            <h2>Explorá</h2>

            <Link to="/">Inicio</Link>
            <Link to="/musica">Música y danza</Link>
            <Link to="/cuentos">Cuentos</Link>
            <Link to="/adivinanzas">Adivinanzas</Link>
            <Link to="/juegos-de-manos">Juegos de manos</Link>
          </nav>
        </div>

        <div className="footer__bottom">
          <p>Docente: Maestra Fernanda Acosta</p>

          <p>
            Glosario de actividades para el desarrollo
            del habla y la motricidad.
          </p>

          <button
            type="button"
            className="footer__admin-button"
            onClick={handleAdminAccess}
            aria-label="Acceso de administrador"
            title="Administración"
          >
            ⚙
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
