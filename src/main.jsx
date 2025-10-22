import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import MainLayout from "./MainLayout.jsx";
import ExperiencePage from "./pages/ExperiencePage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NavigationMenu from "./components/NavigationMenu.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route element={<NavigationMenu />}>
            <Route path="/" element={<App />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<HomePage />} />
          </Route>
          <Route path="/project/:slug" element={<ProjectDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
