
import { supabase } from "../services/supabaseClient.js";

const ADMIN_USERNAME = "fernanda";
const ADMIN_EMAIL = "gastonjaure.dev@gmail.com";

export async function loginAdmin(username, password) {
  if (username.trim().toLowerCase() !== ADMIN_USERNAME) {
    throw new Error("Usuario o contraseña incorrectos.");
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email: ADMIN_EMAIL,
    password,
  });

  if (error || !data.user) {
    throw new Error("Usuario o contraseña incorrectos.");
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc(
    "is_admin"
  );

  if (adminError || isAdmin !== true) {
    await supabase.auth.signOut();
    throw new Error("Esta cuenta no tiene permisos de administrador.");
  }

  return data.user;
}

export async function logoutAdmin() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}

export async function getAdminSession() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    return null;
  }

  const { data: isAdmin, error: adminError } = await supabase.rpc(
    "is_admin"
  );

  if (adminError || isAdmin !== true) {
    return null;
  }

  return user;
}
