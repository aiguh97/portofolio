import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ImgProfile from "../assets/aris.jpeg";
import ContactLinks from "./ContactLinks";
import SkillsGrid from "./Skills";

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
        // setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
<aside
  className="
    w-full md:w-[385px] xl:w-[395px]
    bg-white border-r border-gray-200
    flex flex-col font-[Poppins]
    flex-shrink-0
  "
>

      {/* Bagian isi */}
      <div className="flex-1 p-8 transition-all duration-500 ease-in-out">
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
          {isOpen && (
          <SkillsGrid/>
          )}

          {/* Kontak */}
          {isOpen && (
         <ContactLinks/>
          )}
        </div>
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
