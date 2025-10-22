import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Project</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xl:max-w-[80%]">
        {[1, 2, 3,4,5,6,7,8].map((i) => (
          <div
            key={i}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200"
          >
            <img
              src={`https://placehold.co/600x400?text=Project+${i}`}
              alt={`Project ${i}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="font-semibold text-lg mb-1">Aplikasi {i}</h3>
              <p className="text-sm text-gray-500 mb-2">
                React JS · Tailwind CSS
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Deskripsi singkat proyek {i}.{" "}
                <Link
                  to={`/project/aplikasi-${i}`}
                  className="text-indigo-500 hover:underline"
                >
                  Selengkapnya
                </Link>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
