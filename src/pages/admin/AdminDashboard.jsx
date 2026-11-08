
import { useNavigate } from "react-router-dom";
import { logoutAdmin } from "../../auth/authService.js";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <main>
      <section>
        <h1>Panel de administración</h1>

        <p>
          Bienvenida, Fernanda.
        </p>

        <p>
          Desde este espacio podrás administrar los contenidos
          de Juego con palabras y con mi cuerpo.
        </p>

        <button type="button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </section>
    </main>
  );
}

export default AdminDashboard;
