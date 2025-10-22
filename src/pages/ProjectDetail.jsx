import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { slug } = useParams();

  // contoh data dummy (nanti bisa ambil dari backend MySQL)
  const projects = {
    "aplikasi-1": {
      title: "Aplikasi Keuangan React",
      image: "https://placehold.co/800x400?text=Aplikasi+Keuangan",
      tech: "React JS · Tailwind CSS",
      description: `
        Aplikasi Keuangan ini dibuat menggunakan React JS dan Tailwind CSS
        untuk membantu pengguna dalam mengelola pemasukan dan pengeluaran secara efisien.
        Fitur-fitur meliputi pencatatan transaksi, visualisasi grafik, dan ekspor laporan.
      `,
      link: "https://github.com/jhonarendra/aplikasi-keuangan-react",
    },
  };

  const project = projects[slug] || {
    title: "Project Tidak Ditemukan",
    image: "https://placehold.co/800x400?text=Not+Found",
    tech: "",
    description: "Maaf, project yang Anda cari tidak ditemukan.",
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 ">
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-gray-100 text-gray-700 mb-5 rounded-lg hover:bg-gray-200 transition-all"
      >
        ← Kembali ke Halaman Utama
      </Link>
      <div className="max-w-3xl  bg-white rounded-2xl shadow-sm p-6">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover rounded-xl mb-6"
        />
        <h1 className="text-3xl font-semibold mb-2">{project.title}</h1>
        <p className="text-gray-500 text-sm mb-4">{project.tech}</p>
        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {project.description}
        </p>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline"
          >
            🔗 Lihat Repository
          </a>
        )}
      </div>
    </div>
  );
}
