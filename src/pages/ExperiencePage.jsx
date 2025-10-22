export default function ExperiencePage() {
  const experiences = [
    {
      logo: "/logos/laksita.png",
      title: "Programmer",
      company: "PT. Laksita Emi Saguna",
      period: "Sep 2019 - Sekarang",
      desc: "Di Laksita, saya menempati posisi sebagai Programmer yang bertugas merancang, men-develop, testing dan maintenance aplikasi web.",
      link: "#",
    },
    {
      logo: "/logos/bbmkg.png",
      title: "Internship Programmer",
      company: "BBMKG Wilayah III",
      period: "May 2019 - Sekarang",
      desc: "Kerja praktek di BBMKG Wilayah III, saya mengerjakan aplikasi surat keluar.",
      link: "#",
    },
  ];

  const educations = [
    {
      logo: "/logos/unud.png",
      title: "Sarjana Komputer (S.Kom)",
      institution: "Universitas Udayana",
      period: "Jul 2016 - Sekarang",
      desc: "Memperoleh gelar Sarjana Komputer (S.Kom) di Universitas Udayana, tepatnya program studi Teknologi Informasi.",
      link: "#",
    },
    {
      logo: "/logos/smakuta.png",
      title: "SMA Negeri 1 Kuta",
      institution: "SMA Negeri 1 Kuta",
      period: "Jul 2013 - Sekarang",
      desc: "Mengikuti ekstra kurikuler jurnalistik dan softball.",
      link: "#",
    },
  ];

  return (
    <div className=" font-[Poppins] text-gray-900 max-w-4xl ">
      {/* Pengalaman */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Pengalaman</h2>
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-12 h-12 object-contain rounded-md border"
              />
              <div>
                <h3 className="font-semibold text-[17px]">{exp.title}</h3>
                <p className="text-gray-500 text-sm">
                  {exp.company} · {exp.period}
                </p>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  {exp.desc}{" "}
                  <a
                    href={exp.link}
                    className="text-indigo-600 hover:underline ml-1"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pendidikan */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Pendidikan</h2>
        <div className="space-y-4">
          {educations.map((edu, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <img
                src={edu.logo}
                alt={edu.institution}
                className="w-12 h-12 object-contain rounded-md border"
              />
              <div>
                <h3 className="font-semibold text-[17px]">{edu.title}</h3>
                <p className="text-gray-500 text-sm">
                  {edu.institution} · {edu.period}
                </p>
                <p className="text-gray-700 text-sm mt-1 leading-relaxed">
                  {edu.desc}{" "}
                  <a
                    href={edu.link}
                    className="text-indigo-600 hover:underline ml-1"
                  >
                    Selengkapnya
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
