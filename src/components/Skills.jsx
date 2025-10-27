import React, { useState } from "react";
const skills = [
  "icon-react.png",
  "icon-vue.png",
  "icon-tailwindcss.png",
  "icon-mongodb.png",
  "icon-mysql.png",
  "icon-mongodb.png",
  "icon-react.png",
  "icon-vue.png",
  "icon-tailwindcss.png",
  "nextjs-logo.png",
  "icon-mysql.png",
  "icon-mongodb.png",
];
const skillsData = [
  {
    icon: "icon-mongodb.png",
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat struktur halaman web.",
  },
  {
    icon: "expressjs.svg",
    title: "HTML",
    description:
      "HTML (HyperText Markup Language) adalah bahasa standar untuk membuat struktur halaman web.",
  },
  {
    icon: "icon-react.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "node.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "icon-next.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "icon-tailwindcss.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
    {
    icon: "prisma.svg",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
      {
    icon: "stack-auth.jpeg",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
        {
    icon: "postgre.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
        {
    icon: "neon.jpeg",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "flutter.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "firebase.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
  {
    icon: "laravel.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },
    {
    icon: "icon-mysql.png",
    title: "React JS",
    description:
      "PHP: Hypertext Preprocessor atau hanya PHP saja, adalah bahasa skrip dengan fungsi umum yang terutama digunakan untuk pengembangan web.",
  },

  // tambahkan skill lainnya di sini
];

export default function SkillsGrid() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <>
      {/* GRID SKILL */}
      <div className="gap-2 grid grid-cols-5 mt-2">
        {skillsData.map((skill) => (
          <button
            key={skill.title}
            type="button"
            onClick={() => setSelectedSkill(skill)}
            title={skill.title}
            className="
              flex items-center justify-center 
              rounded-lg border border-gray-200 p-2 shadow-sm 
              cursor-pointer transition ease-in-out
              hover:-translate-y-1 hover:scale-110
              dark:border-gray-700 dark:bg-gray-800
            "
          >
            <div className="relative w-8 h-8">
              <img
                src={`/icons/${skill.icon}`}
                alt={skill.title}
                className="w-full h-full object-contain"
                loading="lazy"
                onError={(e) => (e.currentTarget.src = "/icons/default.png")}
              />
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
      {selectedSkill && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl shadow-xl w-full max-w-lg text-center p-8 pt-16">
            {/* ICON MELAYANG */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-3">
                <img
                  src={`/icons/${selectedSkill.icon}`}
                  alt={selectedSkill.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>

            {/* TEKS */}
            <p className="text-gray-700 dark:text-gray-200 mt-4 mb-6 leading-relaxed">
              {selectedSkill.description}
            </p>

            {/* TOMBOL */}
            <button
              onClick={() => setSelectedSkill(null)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg font-medium transition"
            >
              Mengerti
            </button>
          </div>
        </div>
      )}
    </>
  );
}
