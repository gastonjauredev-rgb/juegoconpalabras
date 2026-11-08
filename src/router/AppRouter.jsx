
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "../components/MainLayout.jsx";
import AdminRoute from "../auth/AdminRoute.jsx";

import Home from "../pages/Home.jsx";
import MusicPage from "../pages/MusicPage.jsx";
import StoriesPage from "../pages/StoriesPage.jsx";
import RiddlesPage from "../pages/RiddlesPage.jsx";
import HandGamesPage from "../pages/HandGamesPage.jsx";

import AdminDashboard from "../pages/admin/AdminDashboard.jsx";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/musica" element={<MusicPage />} />
          <Route path="/cuentos" element={<StoriesPage />} />
          <Route path="/adivinanzas" element={<RiddlesPage />} />
          <Route path="/juegos-de-manos" element={<HandGamesPage />} />
        </Route>

        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
