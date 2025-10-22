import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Asidebar from "./components/Asidebar";

export default function MainLayout() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 824);

  // Deteksi ukuran layar (lg ke atas dianggap besar)
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 824);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`
        flex flex-col lg:flex-row
        bg-gray-50 text-gray-900 font-[Poppins]
        ${isLargeScreen ? "h-screen overflow-hidden" : "h-auto overflow-visible"}
      `}
    >
      {/* Sidebar */}
      <Asidebar isLargeScreen={isLargeScreen} />

      {/* Main content */}
      <main
        className={`flex-1 p-6 md:p-8 ${
          isLargeScreen ? "overflow-y-auto" : "overflow-visible"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
}
