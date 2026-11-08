
import Swal from "sweetalert2";
import { loginAdmin } from "./authService.js";

export async function showAdminLogin() {
  const result = await Swal.fire({
    title: "Acceso de administrador",
    html: `
      <input
        id="admin-username"
        class="swal2-input"
        placeholder="Usuario"
        autocomplete="username"
      />
      <input
        id="admin-password"
        type="password"
        class="swal2-input"
        placeholder="Contraseña"
        autocomplete="current-password"
      />
    `,
    confirmButtonText: "Ingresar",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
    confirmButtonColor: "#29dba0",
    showLoaderOnConfirm: true,

    preConfirm: async () => {
      const username = document
        .getElementById("admin-username")
        .value;

      const password = document
        .getElementById("admin-password")
        .value;

      if (!username.trim() || !password) {
        Swal.showValidationMessage(
          "Ingresá tu usuario y contraseña."
        );
        return false;
      }

      try {
        await loginAdmin(username, password);
        return true;
      } catch (error) {
        Swal.showValidationMessage(error.message);
        return false;
      }
    },

    allowOutsideClick: () => !Swal.isLoading(),
  });

  return result.isConfirmed;
}
