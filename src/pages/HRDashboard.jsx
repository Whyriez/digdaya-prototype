import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HRDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // State untuk mengontrol Sidebar di tampilan Mobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Data Dummy Kandidat
  const candidatesData = [
    {
      id: 1,
      name: "Budi Santoso",
      cv: "CV_Budi_Santoso.pdf",
      score: 92,
      avatar:
        "https://ui-avatars.com/api/?name=Budi+Santoso&background=eff6ff&color=1e40af",
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      status: "Memenuhi Syarat",
      statusIcon: "fa-check-circle",
      statusTheme: "emerald",
    },
    {
      id: 2,
      name: "Siti Aminah",
      cv: "CV_Siti_WebDev.pdf",
      score: 85,
      avatar:
        "https://ui-avatars.com/api/?name=Siti+Aminah&background=fce7f3&color=be185d",
      skills: ["React", "Vue.js", "Tailwind"],
      status: "Kurang Next.js & TS",
      statusIcon: "fa-exclamation-triangle",
      statusTheme: "amber",
    },
    {
      id: 3,
      name: "Nur Alim M. Suma",
      cv: "CV_NurAlim_Tech.pdf",
      score: 68,
      avatar:
        "https://ui-avatars.com/api/?name=Nur+Alim&background=f1f5f9&color=64748b",
      skills: ["React", "JavaScript", "HTML/CSS"],
      status: "Celah Skill Tinggi",
      statusIcon: "fa-times-circle",
      statusTheme: "rose",
      isPersona: true,
    },
  ];

  // Filter pencarian
  const filteredCandidates = candidatesData.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      {/* Overlay Background untuk Mobile saat Sidebar terbuka */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar B2B (Responsive) */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 shadow-2xl lg:shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}
      >
        {/* Logo & Close Button (Mobile) */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm shadow-blue-200">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              SkillSync <span className="text-blue-600">HR</span>
            </span>
          </Link>
          <button
            className="lg:hidden text-slate-400 hover:text-rose-500 transition text-lg"
            onClick={() => setIsSidebarOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Menu Navigation */}
        <Sidebar />

        {/* User Profile */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center px-3 py-2.5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-700 font-bold text-xs mr-3 shrink-0">
              HR
            </div>
            <div className="overflow-hidden">
              <p className="text-sm font-bold text-slate-800 leading-none truncate">
                Tim Rekrutmen
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium truncate">
                PT. Inovasi Digital
              </p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        {/* Header (Responsive) */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            {/* Hamburger Menu Button (Mobile Only) */}
            <button
              className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>

            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-blue-600 transition">
                Lowongan Aktif
              </a>
              <i className="fas fa-chevron-right mx-2 text-[10px] text-slate-300"></i>
              <span className="text-slate-900 font-bold">
                Pipeline Kandidat
              </span>
            </div>
            {/* Judul singkat di HP */}
            <span className="sm:hidden text-slate-900 font-bold text-sm">
              Pipeline Kandidat
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="px-3 py-2 sm:px-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm flex items-center">
              <i className="fas fa-file-export sm:mr-2 text-slate-400"></i>
              <span className="hidden sm:inline">Ekspor</span>
            </button>
            <button className="px-3 py-2 sm:px-4 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm border border-blue-700 flex items-center">
              <i className="fas fa-plus sm:mr-2"></i>
              <span className="hidden sm:inline">Buat Lowongan</span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          {/* Job Detail Header */}
          <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded text-[10px] font-bold uppercase tracking-wide">
                  Status: Buka
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  <i className="fas fa-calendar-alt mr-1 text-slate-400"></i>{" "}
                  Ditutup dalam 14 Hari
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                Frontend Web Developer
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-start sm:items-center">
                <i className="fas fa-tags mr-2 mt-0.5 sm:mt-0 text-blue-500"></i>
                <span>
                  Keyword Prioritas:{" "}
                  <span className="font-semibold text-slate-700">
                    React, Next.js, TypeScript, Tailwind
                  </span>
                </span>
              </p>
            </div>

            <div className="flex space-x-6 sm:space-x-8 mt-5 md:mt-0 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-8">
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Total Pelamar
                </p>
                <p className="text-2xl sm:text-3xl font-black text-slate-800">
                  124
                </p>
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Rekomendasi AI (&gt;80%)
                </p>
                <p className="text-2xl sm:text-3xl font-black text-blue-600">
                  18
                </p>
              </div>
            </div>
          </div>

          {/* Candidate Table Section */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
            {/* Table Toolbar (Responsive Stack) */}
            <div className="p-4 sm:p-5 border-b border-slate-200 bg-white flex flex-col lg:flex-row justify-between lg:items-center space-y-4 lg:space-y-0">
              <h2 className="font-bold text-slate-800 text-sm flex items-center">
                <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center mr-3 border border-blue-100 shrink-0">
                  <i className="fas fa-robot text-sm"></i>
                </div>
                Hasil Auto-Screening
              </h2>

              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
                <div className="relative w-full sm:w-64">
                  <i className="fas fa-search absolute left-3 top-2.5 text-slate-400 text-xs"></i>
                  <input
                    type="text"
                    placeholder="Cari skill atau nama..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8 pr-4 py-2 sm:py-1.5 border border-slate-300 rounded-lg text-sm text-slate-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full shadow-sm bg-slate-50"
                  />
                </div>
                <button className="px-4 py-2 sm:py-1.5 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50 flex items-center justify-center shadow-sm w-full sm:w-auto">
                  <i className="fas fa-filter mr-2 text-slate-400"></i> Filter
                </button>
              </div>
            </div>

            {/* Table (Horizontal Scrollable) */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-4 w-1/4">Profil Kandidat</th>
                    <th className="px-6 py-4 w-40 text-center">Skor AI</th>
                    <th className="px-6 py-4 w-1/3">Skill Ditemukan</th>
                    <th className="px-6 py-4">Status Gap</th>
                    <th className="px-6 py-4 w-32 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredCandidates.map((candidate) => (
                    <tr
                      key={candidate.id}
                      className={`hover:bg-slate-50/80 transition group cursor-pointer ${candidate.isPersona ? "bg-slate-50/50" : ""}`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={candidate.avatar}
                            alt={candidate.name}
                            className={`w-10 h-10 rounded-full mr-3 border border-slate-200 shadow-sm shrink-0 ${candidate.isPersona ? "grayscale-[20%]" : ""}`}
                          />
                          <div>
                            <p className="font-bold text-slate-800">
                              {candidate.name}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5 group-hover:text-blue-600 transition truncate max-w-[150px] sm:max-w-none">
                              <i className="fas fa-file-pdf text-red-500 mr-1"></i>{" "}
                              {candidate.cv}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-[3px] bg-${candidate.statusTheme}-50 shadow-sm opacity-90 ${candidate.score >= 90 ? "border-emerald-500" : candidate.score >= 80 ? "border-blue-400" : "border-amber-400"}`}
                        >
                          <span
                            className={`font-bold text-sm ${candidate.score >= 90 ? "text-emerald-700" : candidate.score >= 80 ? "text-blue-700" : "text-amber-700"}`}
                          >
                            {candidate.score}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div
                          className={`flex flex-wrap gap-1.5 ${candidate.isPersona ? "opacity-80" : ""}`}
                        >
                          {candidate.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-semibold shadow-sm whitespace-nowrap"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center px-2.5 py-1 rounded bg-${candidate.statusTheme}-50 text-${candidate.statusTheme}-700 text-xs font-bold border border-${candidate.statusTheme}-200 whitespace-nowrap`}
                        >
                          <i
                            className={`fas ${candidate.statusIcon} mr-1.5`}
                          ></i>{" "}
                          {candidate.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <Link
                          to={candidate.isPersona ? "/candidate" : "#"}
                          className="text-blue-600 font-bold hover:text-blue-800 text-sm px-4 py-2 border border-transparent hover:border-blue-200 hover:bg-blue-50 rounded-lg transition inline-block"
                        >
                          Review
                        </Link>
                      </td>
                    </tr>
                  ))}

                  {filteredCandidates.length === 0 && (
                    <tr>
                      <td
                        colSpan="5"
                        className="px-6 py-10 text-center text-slate-500"
                      >
                        <i className="fas fa-search text-2xl text-slate-300 mb-3 block"></i>
                        Kandidat atau skill tidak ditemukan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination (Responsive) */}
            <div className="p-4 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between text-sm text-slate-500 space-y-3 sm:space-y-0">
              <span className="font-medium text-center sm:text-left">
                Menampilkan{" "}
                <span className="text-slate-900 font-bold">
                  1-{filteredCandidates.length}
                </span>{" "}
                dari <span className="text-slate-900 font-bold">124</span>{" "}
                pelamar
              </span>
              <div className="flex space-x-1.5">
                <button
                  className="px-3 py-1 rounded border border-slate-300 hover:bg-white disabled:opacity-50 transition shadow-sm bg-white"
                  disabled
                >
                  <i className="fas fa-chevron-left text-xs"></i>
                </button>
                <button className="px-3 py-1 rounded border border-blue-600 bg-blue-50 text-blue-700 font-bold shadow-sm">
                  1
                </button>
                <button className="px-3 py-1 rounded border border-slate-300 hover:bg-slate-100 bg-white font-medium shadow-sm transition">
                  2
                </button>
                <span className="px-2 py-1 font-bold text-slate-400 hidden sm:inline">
                  ...
                </span>
                <button className="px-3 py-1 rounded border border-slate-300 hover:bg-white shadow-sm bg-white transition">
                  <i className="fas fa-chevron-right text-xs"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HRDashboard;
