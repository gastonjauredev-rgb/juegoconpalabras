
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getAdminSession } from "./authService.js";

function AdminRoute() {
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let active = true;

    async function checkSession() {
      try {
        const admin = await getAdminSession();

        if (active) {
          setStatus(admin ? "authorized" : "unauthorized");
        }
      } catch {
        if (active) {
          setStatus("unauthorized");
        }
      }
    }

    checkSession();

    return () => {
      active = false;
    };
  }, []);

  if (status === "loading") {
    return <p>Verificando acceso administrativo...</p>;
  }

  if (status === "unauthorized") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default AdminRoute;
