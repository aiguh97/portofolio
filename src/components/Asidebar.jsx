import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ImgProfile from "../assets/aris.jpeg";

export default function Asidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  // Deteksi ukuran layar (otomatis buka di layar besar)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 824) {
        setIsOpen(true);
        setIsLargeScreen(true);
      } else {
        setIsLargeScreen(false);
        setIsOpen(false); // ⛔ Tutup otomatis kalau layar kecil
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`
        w-full md:w-1/3 xl:w-1/4
        bg-white border-r border-gray-200
        flex flex-col
        font-[Poppins]
  
      `}
    >
      {/* Bagian isi (scrollable hanya ketika terbuka) */}
      <div
        className={`
          flex-1 p-8 transition-all duration-500 ease-in-out
          ${isOpen ? "overflow-y-auto max-h-[2000px] opacity-100" : "overflow-hidden max-h-0 opacity-0"}
        `}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img
            src={ImgProfile}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover mb-5 shadow-md border border-gray-100"
          />
          <h1 className="text-2xl font-semibold text-gray-900 text-center">
            Putu Jhonarendra
          </h1>
          <p className="text-gray-500 text-center mt-1 leading-tight">
            Programmer, Front End Developer, <br /> Back End Developer
          </p>
        </div>

        {/* Detail Section */}
        {isOpen && (
          <div className="mt-8 animate-fadeIn">
            {/* Tentang Saya */}
            <div>
              <h2 className="font-semibold text-gray-900 mb-2 text-[15px]">
                Tentang Saya
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed text-justify">
                Seorang Programmer dari Bali, Indonesia yang memiliki pengalaman
                lebih dari 3 tahun mengembangkan aplikasi web. Aplikasi yang
                dibuat telah dipakai di lembaga pendidikan dan instansi
                pemerintahan.
              </p>
            </div>

            {/* Keahlian */}
            <div className="mt-8">
              <h2 className="font-semibold text-gray-900 mb-3 text-[15px]">
                Keahlian
              </h2>
              <div className="grid grid-cols-4 gap-3">
                {[
                  "html5",
                  "css3",
                  "js",
                  "php",
                  "vue",
                  "react",
                  "mysql",
                  "nodejs",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="border rounded-xl flex justify-center items-center p-3 shadow-sm bg-gray-50 hover:shadow-md hover:bg-white transition-all duration-200"
                  >
                    <img
                      src={`/icons/${skill}.svg`}
                      alt={skill}
                      className="w-6 h-6 opacity-90"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Kontak */}
            <div className="mt-8 text-sm">
              <h2 className="font-semibold text-gray-900 mb-3 text-[15px]">
                Kontak
              </h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-3">
                  <i className="ri-mail-line text-lg text-gray-500"></i>
                  <span>putu@jhonarendra.com</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-github-line text-lg text-gray-500"></i>
                  <span>github.com/jhonarendra</span>
                </li>
                <li className="flex items-center gap-3">
                  <i className="ri-linkedin-line text-lg text-gray-500"></i>
                  <span>Putu Jhonarendra</span>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Tombol toggle (muncul hanya di layar kecil) */}
      {!isLargeScreen && (
        <div className="flex items-center justify-center p-3 border-t border-gray-200">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center text-gray-500 hover:text-gray-700 transition"
          >
            {isOpen ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>
      )}
    </aside>
  );
}
