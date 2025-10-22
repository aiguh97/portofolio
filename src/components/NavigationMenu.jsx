import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const NavigationMenu = () => {
  const location = useLocation();

  // Fungsi bantu untuk memeriksa apakah path aktif
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <div className="w-full overflow-y-auto">
      <div className="flex flex-wrap gap-1.5 mt-9 mb-9 max-w-[350px]">
        {/* Experience */}
        <Link
          to="/"
          className={`text-[12px] px-3 py-1 rounded-lg transition-all ${
            isActive("/")
              ? "bg-indigo-100 text-indigo-600"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Experience
        </Link>

        {/* Projects */}
        <Link
          to="/projects"
          className={`text-[12px] px-3 py-1 rounded-lg transition-all ${
            isActive("/projects")
              ? "bg-indigo-100 text-indigo-600"
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
