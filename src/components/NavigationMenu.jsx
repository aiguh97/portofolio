import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const location = useLocation();

  // Fungsi bantu untuk memeriksa apakah path aktif
  // Fungsi bantu: deteksi aktif dengan pengecualian untuk root "/"
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname.startsWith("/experience");
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-1.5 mt-9 mb-9 max-w-[350px]">
        {/* Experience */}
  <Link
          to="/"
          className={`text-[12px] px-3 py-1 rounded-lg transition-all ${
            isActive("/")
              ? "bg-indigo-100 text-indigo-600 font-medium"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Experience
        </Link>

        {/* Projects */}
   {/* Projects */}
        <Link
          to="/projects"
          className={`text-[12px] px-3 py-1 rounded-lg transition-all ${
            isActive("/projects")
              ? "bg-indigo-100 text-indigo-600 font-medium"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Projects
        </Link>
        {/* Search */}
        <Link
          to="/search"
          className={`text-[12px] px-3 py-1 rounded-lg transition-all ${
            isActive("/search")
              ? "bg-indigo-100 text-indigo-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Search
        </Link>
      </div>

      <Outlet />
    </div>
  );
};

export default NavigationMenu;
