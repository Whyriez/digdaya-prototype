import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const HRDashboard = () => {
  // State untuk navigasi antar tampilan: 'list', 'pipeline', atau 'create'
  const [currentView, setCurrentView] = useState("list");
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);

  // Data Dummy Daftar Lowongan (Dibuat State agar bisa ditambah lowongan baru)
  const [vacancies, setVacancies] = useState([
    {
      id: 1,
      title: "Frontend Web Developer",
      status: "Buka",
      statusTheme: "emerald",
      daysLeft: 14,
      totalApplicants: 124,
      aiRecommendations: 18,
      keywords: "React, Next.js, TypeScript, Tailwind",
    },
    {
      id: 2,
      title: "Backend Engineer (Golang)",
      status: "Buka",
      statusTheme: "emerald",
      daysLeft: 5,
      totalApplicants: 85,
      aiRecommendations: 12,
      keywords: "Golang, Microservices, PostgreSQL, Docker",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      status: "Tutup",
      statusTheme: "rose",
      daysLeft: 0,
      totalApplicants: 210,
      aiRecommendations: 45,
      keywords: "Figma, Prototyping, User Research",
    },
    {
      id: 4,
      title: "Mobile App Developer",
      status: "Draft",
      statusTheme: "slate",
      daysLeft: null,
      totalApplicants: 0,
      aiRecommendations: 0,
      keywords: "Flutter, Dart, Firebase",
    }
  ]);

  // Data Dummy Kandidat
  const candidatesData = [
    {
      id: 1,
      name: "Budi Santoso",
      cv: "CV_Budi_Santoso.pdf",
      score: 92,
      avatar: "https://ui-avatars.com/api/?name=Budi+Santoso&background=eff6ff&color=1e40af",
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
      avatar: "https://ui-avatars.com/api/?name=Siti+Aminah&background=fce7f3&color=be185d",
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
      avatar: "https://ui-avatars.com/api/?name=Nur+Alim&background=f1f5f9&color=64748b",
      skills: ["React", "JavaScript", "HTML/CSS"],
      status: "Celah Skill Tinggi",
      statusIcon: "fa-times-circle",
      statusTheme: "rose",
      isPersona: true,
    },
  ];

  // Filter pencarian kandidat
  const filteredCandidates = candidatesData.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      candidate.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      ),
  );

  // ================= Fungsi Navigasi =================
  const handleOpenPipeline = (vacancy) => {
    setSelectedVacancy(vacancy);
    setCurrentView("pipeline");
    setSearchQuery("");
  };

  const handleBackToList = () => {
    setCurrentView("list");
    setSelectedVacancy(null);
  };

  const handleOpenCreateForm = () => {
    setCurrentView("create");
    setSelectedVacancy(null);
  };

  // ================= Handle Form Submit (Simulasi) =================
  const handleCreateVacancy = (e) => {
    e.preventDefault();
    // Ambil data dari form (Untuk demo, kita ambil title dan keyword secara sederhana)
    const formData = new FormData(e.target);
    const newVacancy = {
      id: Date.now(),
      title: formData.get('title'),
      status: "Buka",
      statusTheme: "emerald",
      daysLeft: 30,
      totalApplicants: 0,
      aiRecommendations: 0,
      keywords: formData.get('keywords'),
    };

    // Tambahkan ke state vacancies
    setVacancies([newVacancy, ...vacancies]);
    // Kembali ke list
    setCurrentView("list");
  };

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      {/* Overlay Background untuk Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            <button
              className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition"
              onClick={() => setIsSidebarOpen(true)}
            >
              <i className="fas fa-bars text-xl"></i>
            </button>

            {/* Breadcrumbs */}
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <button 
                onClick={handleBackToList}
                className={`hover:text-blue-600 transition ${currentView === 'list' ? 'text-slate-900 font-bold' : ''}`}
              >
                Kelola Lowongan
              </button>
              
              {currentView === 'pipeline' && (
                <>
                  <i className="fas fa-chevron-right mx-2 text-[10px] text-slate-300"></i>
                  <span className="text-slate-900 font-bold truncate max-w-[200px]">
                    Pipeline: {selectedVacancy?.title}
                  </span>
                </>
              )}

              {currentView === 'create' && (
                <>
                  <i className="fas fa-chevron-right mx-2 text-[10px] text-slate-300"></i>
                  <span className="text-slate-900 font-bold">Buat Lowongan Baru</span>
                </>
              )}
            </div>

            {/* Judul singkat di HP */}
            <span className="sm:hidden text-slate-900 font-bold text-sm truncate max-w-[150px]">
              {currentView === 'list' ? 'Kelola Lowongan' : currentView === 'create' ? 'Buat Lowongan' : selectedVacancy?.title}
            </span>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3">
            {currentView === 'pipeline' && (
              <button className="px-3 py-2 sm:px-4 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm flex items-center hidden sm:flex">
                <i className="fas fa-file-export mr-2 text-slate-400"></i>
                <span>Ekspor Data</span>
              </button>
            )}
            
            {/* Tombol Buat Lowongan (Sembunyikan jika sedang di form create) */}
            {currentView !== 'create' && (
              <button 
                onClick={handleOpenCreateForm}
                className="px-3 py-2 sm:px-4 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm border border-blue-700 flex items-center"
              >
                <i className="fas fa-plus sm:mr-2"></i>
                <span className="hidden sm:inline">Buat Lowongan</span>
              </button>
            )}
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar relative">
          
          {/* =========================================
              VIEW 1: DAFTAR LOWONGAN (LIST VIEW)
              ========================================= */}
          {currentView === 'list' && (
            <div className="max-w-7xl mx-auto animate-fade-in">
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">Daftar Lowongan Pekerjaan</h1>
                  <p className="text-sm text-slate-500 mt-1">Kelola dan pantau proses rekrutmen untuk semua lowongan Anda.</p>
                </div>
                
                <div className="flex bg-white rounded-lg border border-slate-200 p-1 shadow-sm w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none px-4 py-1.5 bg-blue-50 text-blue-700 rounded-md text-sm font-bold">Semua</button>
                  <button className="flex-1 sm:flex-none px-4 py-1.5 text-slate-600 hover:bg-slate-50 rounded-md text-sm font-medium transition">Aktif</button>
                  <button className="flex-1 sm:flex-none px-4 py-1.5 text-slate-600 hover:bg-slate-50 rounded-md text-sm font-medium transition">Selesai</button>
                </div>
              </div>

              {/* Grid Lowongan */}
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {vacancies.map((vacancy) => (
                  <div key={vacancy.id} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                      <span className={`px-2.5 py-1 bg-${vacancy.statusTheme}-50 text-${vacancy.statusTheme}-700 border border-${vacancy.statusTheme}-200 rounded text-[10px] font-bold uppercase tracking-wide`}>
                        Status: {vacancy.status}
                      </span>
                      {vacancy.daysLeft !== null && (
                        <span className="text-xs font-semibold text-slate-500">
                          <i className="fas fa-clock mr-1 text-slate-400"></i> {vacancy.daysLeft > 0 ? `${vacancy.daysLeft} Hari Lagi` : 'Waktu Habis'}
                        </span>
                      )}
                    </div>
                    
                    <h2 className="text-xl font-bold text-slate-900 mb-2">{vacancy.title}</h2>
                    <p className="text-xs text-slate-500 mb-6 flex-1">
                      <i className="fas fa-tags mr-1.5 text-blue-500"></i>
                      <span className="font-medium text-slate-600 truncate block mt-1">{vacancy.keywords}</span>
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-100">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Pelamar</p>
                        <p className="text-2xl font-black text-slate-800">{vacancy.totalApplicants}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Rekomendasi AI</p>
                        <p className="text-2xl font-black text-blue-600">{vacancy.aiRecommendations}</p>
                      </div>
                    </div>

                    <button 
                      onClick={() => handleOpenPipeline(vacancy)}
                      className="w-full py-2.5 bg-slate-50 border border-slate-200 text-slate-700 rounded-xl text-sm font-bold hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition shadow-sm"
                    >
                      Lihat Pipeline Kandidat <i className="fas fa-arrow-right ml-1"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =========================================
              VIEW 2: FORM BUAT LOWONGAN (CREATE VIEW)
              ========================================= */}
          {currentView === 'create' && (
            <div className="max-w-4xl mx-auto animate-fade-in">
              <button 
                onClick={handleBackToList}
                className="mb-4 text-sm font-bold text-slate-500 hover:text-blue-600 transition flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Kembali ke Daftar
              </button>

              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <i className="fas fa-briefcase text-lg"></i>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Informasi Lowongan Baru</h2>
                    <p className="text-xs text-slate-500">Lengkapi detail lowongan untuk mulai mencari kandidat terbaik.</p>
                  </div>
                </div>

                <form onSubmit={handleCreateVacancy} className="p-6 sm:p-8 space-y-6">
                  {/* Grid 2 Kolom */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Posisi / Jabatan Pekerjaan <span className="text-red-500">*</span></label>
                      <input 
                        type="text" 
                        name="title"
                        required
                        placeholder="Contoh: Frontend Developer" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-slate-50 focus:bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Tipe Pekerjaan <span className="text-red-500">*</span></label>
                      <select className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-slate-50 focus:bg-white appearance-none">
                        <option>Full-time</option>
                        <option>Part-time</option>
                        <option>Contract</option>
                        <option>Internship</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Sistem Kerja <span className="text-red-500">*</span></label>
                      <select className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-slate-50 focus:bg-white appearance-none">
                        <option>On-site</option>
                        <option>Hybrid</option>
                        <option>Remote</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-slate-700">Lokasi Penempatan</label>
                      <input 
                        type="text" 
                        placeholder="Contoh: Jakarta Selatan" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-slate-50 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Deskripsi Pekerjaan <span className="text-red-500">*</span></label>
                    <textarea 
                      rows="4"
                      required
                      placeholder="Jelaskan peran, tanggung jawab, dan kualifikasi yang dibutuhkan..." 
                      className="w-full px-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-slate-50 focus:bg-white"
                    ></textarea>
                  </div>

                  {/* Pengaturan AI */}
                  <div className="p-5 rounded-xl border border-blue-100 bg-blue-50/50 space-y-4">
                    <h3 className="text-sm font-bold text-blue-900 flex items-center">
                      <i className="fas fa-robot text-blue-600 mr-2"></i> Konfigurasi AI Auto-Screening
                    </h3>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-700">Keyword Prioritas (Pisahkan dengan koma) <span className="text-red-500">*</span></label>
                      <p className="text-xs text-slate-500 mb-2">AI akan menggunakan keyword ini untuk memberikan skor kecocokan pada CV pelamar.</p>
                      <input 
                        type="text" 
                        name="keywords"
                        required
                        placeholder="Contoh: React, TypeScript, UI/UX, Figma" 
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition shadow-sm bg-white"
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row justify-end gap-3">
                    <button 
                      type="button"
                      onClick={handleBackToList}
                      className="px-6 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition shadow-sm order-2 sm:order-1"
                    >
                      Batal
                    </button>
                    <button 
                      type="submit"
                      className="px-6 py-2.5 bg-blue-600 text-white border border-blue-700 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-sm flex items-center justify-center order-1 sm:order-2"
                    >
                      <i className="fas fa-save mr-2"></i> Simpan & Publikasikan
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* =========================================
              VIEW 3: PIPELINE KANDIDAT (DETAIL VIEW)
              ========================================= */}
          {currentView === 'pipeline' && selectedVacancy && (
            <div className="animate-fade-in">
              <button 
                onClick={handleBackToList}
                className="mb-4 text-sm font-bold text-slate-500 hover:text-blue-600 transition flex items-center"
              >
                <i className="fas fa-arrow-left mr-2"></i> Kembali ke Daftar
              </button>

              <div className="bg-white rounded-xl border border-slate-200 p-5 sm:p-6 shadow-sm mb-6 flex flex-col md:flex-row justify-between md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className={`px-2.5 py-1 bg-${selectedVacancy.statusTheme}-50 text-${selectedVacancy.statusTheme}-700 border border-${selectedVacancy.statusTheme}-200 rounded text-[10px] font-bold uppercase tracking-wide`}>
                      Status: {selectedVacancy.status}
                    </span>
                    {selectedVacancy.daysLeft !== null && (
                      <span className="text-xs font-semibold text-slate-500">
                        <i className="fas fa-calendar-alt mr-1 text-slate-400"></i> Ditutup dalam {selectedVacancy.daysLeft} Hari
                      </span>
                    )}
                  </div>
                  <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {selectedVacancy.title}
                  </h1>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-start sm:items-center">
                    <i className="fas fa-tags mr-2 mt-0.5 sm:mt-0 text-blue-500"></i>
                    <span>
                      Keyword Prioritas: <span className="font-semibold text-slate-700">{selectedVacancy.keywords}</span>
                    </span>
                  </p>
                </div>

                <div className="flex space-x-6 sm:space-x-8 mt-5 md:mt-0 border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-8">
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Total Pelamar</p>
                    <p className="text-2xl sm:text-3xl font-black text-slate-800">{selectedVacancy.totalApplicants}</p>
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Rekomendasi AI (&gt;80%)</p>
                    <p className="text-2xl sm:text-3xl font-black text-blue-600">{selectedVacancy.aiRecommendations}</p>
                  </div>
                </div>
              </div>

              {/* Candidate Table Section */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
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
                        <tr key={candidate.id} className={`hover:bg-slate-50/80 transition group cursor-pointer ${candidate.isPersona ? "bg-slate-50/50" : ""}`}>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <img src={candidate.avatar} alt={candidate.name} className={`w-10 h-10 rounded-full mr-3 border border-slate-200 shadow-sm shrink-0 ${candidate.isPersona ? "grayscale-[20%]" : ""}`} />
                              <div>
                                <p className="font-bold text-slate-800">{candidate.name}</p>
                                <p className="text-xs text-slate-500 mt-0.5 group-hover:text-blue-600 transition truncate max-w-[150px] sm:max-w-none">
                                  <i className="fas fa-file-pdf text-red-500 mr-1"></i> {candidate.cv}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full border-[3px] bg-${candidate.statusTheme}-50 shadow-sm opacity-90 ${candidate.score >= 90 ? "border-emerald-500" : candidate.score >= 80 ? "border-blue-400" : "border-amber-400"}`}>
                              <span className={`font-bold text-sm ${candidate.score >= 90 ? "text-emerald-700" : candidate.score >= 80 ? "text-blue-700" : "text-amber-700"}`}>{candidate.score}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className={`flex flex-wrap gap-1.5 ${candidate.isPersona ? "opacity-80" : ""}`}>
                              {candidate.skills.map((skill) => (
                                <span key={skill} className="px-2 py-1 bg-white border border-slate-200 text-slate-600 rounded text-xs font-semibold shadow-sm whitespace-nowrap">{skill}</span>
                              ))}
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded bg-${candidate.statusTheme}-50 text-${candidate.statusTheme}-700 text-xs font-bold border border-${candidate.statusTheme}-200 whitespace-nowrap`}>
                              <i className={`fas ${candidate.statusIcon} mr-1.5`}></i> {candidate.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <button onClick={() => setSelectedCandidate(candidate)} className="text-blue-600 font-bold hover:text-blue-800 text-sm px-4 py-2 border border-transparent hover:border-blue-200 hover:bg-blue-50 rounded-lg transition inline-block">
                              Review
                            </button>
                          </td>
                        </tr>
                      ))}
                      {filteredCandidates.length === 0 && (
                        <tr>
                          <td colSpan="5" className="px-6 py-10 text-center text-slate-500">
                            <i className="fas fa-search text-2xl text-slate-300 mb-3 block"></i>
                            Kandidat atau skill tidak ditemukan.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* =========================================
            MODAL DETAIL KANDIDAT
            ========================================= */}
        {selectedCandidate && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-900/60 transition-opacity">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
              
              <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 shrink-0">
                <h3 className="text-lg font-bold text-slate-800 flex items-center">
                  <i className="fas fa-address-card mr-2 text-blue-600"></i> Detail Profil Pelamar
                </h3>
                <button onClick={() => setSelectedCandidate(null)} className="text-slate-400 hover:text-slate-700 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition">
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center text-center space-y-4">
                    <img src={selectedCandidate.avatar} alt={selectedCandidate.name} className={`w-32 h-32 rounded-full border-4 border-slate-100 shadow-md ${selectedCandidate.isPersona ? "grayscale-[20%]" : ""}`} />
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">{selectedCandidate.name}</h2>
                      <p className="text-sm font-medium text-slate-500 mt-1">
                         <i className="fas fa-briefcase text-slate-400 mr-1"></i> Melamar sbg {selectedVacancy?.title}
                      </p>
                    </div>
                    
                    <div className="w-full h-px bg-slate-200 my-2"></div>
                    
                    <div className="flex flex-col items-center">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Match Score AI</p>
                      <div className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border-[5px] shadow-sm bg-${selectedCandidate.statusTheme}-50 ${selectedCandidate.score >= 90 ? 'border-emerald-500' : selectedCandidate.score >= 80 ? 'border-blue-400' : 'border-amber-400'}`}>
                        <span className={`text-3xl font-black ${selectedCandidate.score >= 90 ? 'text-emerald-700' : selectedCandidate.score >= 80 ? 'text-blue-700' : 'text-amber-700'}`}>{selectedCandidate.score}%</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3 flex items-center">
                        <i className="fas fa-robot mr-2 text-blue-500"></i> Hasil Screening Otomatis
                      </h4>
                      <div className={`p-4 rounded-xl border bg-${selectedCandidate.statusTheme}-50 border-${selectedCandidate.statusTheme}-200`}>
                        <div className="flex items-start">
                          <i className={`fas ${selectedCandidate.statusIcon} text-${selectedCandidate.statusTheme}-600 mt-0.5 mr-3 text-lg`}></i>
                          <div>
                            <p className={`text-sm font-bold text-${selectedCandidate.statusTheme}-800 mb-1`}>{selectedCandidate.status}</p>
                            <p className={`text-xs text-${selectedCandidate.statusTheme}-700 leading-relaxed`}>
                              Berdasarkan parsing dokumen, kandidat ini memiliki kecocokan <strong>{selectedCandidate.score}%</strong> terhadap kriteria prioritas "{selectedVacancy?.keywords}".
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Skill Terdeteksi dari CV</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedCandidate.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-sm font-semibold shadow-sm">
                            <i className="fas fa-check-circle text-blue-400 mr-1.5"></i> {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-slate-800 mb-3">Dokumen Lampiran</h4>
                      <div className="flex items-center justify-between p-3 border border-slate-200 rounded-xl bg-slate-50 hover:border-blue-300 hover:bg-blue-50 transition cursor-pointer group">
                        <div className="flex items-center overflow-hidden">
                          <div className="w-10 h-10 bg-red-100 text-red-500 rounded-lg flex items-center justify-center mr-3 shrink-0">
                            <i className="fas fa-file-pdf text-lg"></i>
                          </div>
                          <div className="truncate">
                            <p className="text-sm font-bold text-slate-800 group-hover:text-blue-700 truncate">{selectedCandidate.cv}</p>
                            <p className="text-xs text-slate-500">File PDF • 1.2 MB</p>
                          </div>
                        </div>
                        <button className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-300 transition shrink-0 shadow-sm">
                          <i className="fas fa-download"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0 flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-3">
                <button onClick={() => setSelectedCandidate(null)} className="px-5 py-2.5 border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-white transition shadow-sm w-full sm:w-auto text-center">Tutup</button>
                <button className="px-5 py-2.5 bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-sm font-bold hover:bg-rose-100 transition shadow-sm w-full sm:w-auto text-center"><i className="fas fa-times mr-2"></i> Tolak</button>
                <button className="px-5 py-2.5 bg-blue-600 text-white border border-blue-700 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-sm w-full sm:w-auto text-center"><i className="fas fa-envelope-open-text mr-2"></i> Loloskan & Undang</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default HRDashboard;