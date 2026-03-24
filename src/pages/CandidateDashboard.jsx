import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser'; // Import Sidebar yang baru

const CandidateDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      
      {/* Panggil Komponen Sidebar */}
      <SidebarUser isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        
        {/* Header Responsive */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            {/* Tombol Hamburger Mobile */}
            <button className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">Hasil Analisis CV</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Hasil Analisis</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative text-slate-400 hover:text-blue-600 transition">
              <i className="fas fa-bell text-lg"></i>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="max-w-6xl mx-auto">
            
            {/* Judul Halaman */}
            <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Overview Analisis Kandidat</h1>
                <p className="text-slate-500 text-sm mt-1">Hasil ekstraksi CV dan pemetaan kompetensi secara real-time.</p>
              </div>
              <div className="mt-4 md:mt-0 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center text-sm font-medium text-slate-600">
                <i className="fas fa-clock text-blue-500 mr-2"></i> Diperbarui: Hari ini, 14:30 WITA
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              
              {/* KOLOM KIRI: Informasi Dasar */}
              <div className="space-y-6 sm:space-y-8">
                
                {/* Target Posisi */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target Pekerjaan</h2>
                    <Link to="/cari-lowongan" className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition">Ubah Target</Link>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 text-blue-600 shrink-0">
                      <i className="fas fa-laptop-code text-xl"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 leading-tight">Frontend Web Developer</h3>
                      <p className="text-xs text-slate-500 flex items-center mt-1.5">
                        <i className="fas fa-building mr-1.5 text-slate-400"></i> PT. Inovasi Digital (Dicoding)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Status CV */}
                <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
                  <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Dokumen Tersimpan</h2>
                  <div className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-xl p-5 flex flex-col items-center text-center">
                    <i className="fas fa-file-pdf text-3xl text-red-500 mb-3"></i>
                    <p className="text-sm font-semibold text-slate-700">CV_NurAlim_Tech.pdf</p>
                    <p className="text-xs text-slate-400 mt-1">450 KB • Diunggah baru saja</p>
                    <div className="mt-4 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-[11px] font-bold flex items-center">
                      <i className="fas fa-check-circle mr-1.5"></i> AI Parsing Selesai
                    </div>
                  </div>
                  <Link to="/upload" className="w-full mt-4 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-slate-50 transition shadow-sm flex items-center justify-center">
                    <i className="fas fa-sync-alt mr-2 text-slate-400"></i> Perbarui CV
                  </Link>
                </div>
              </div>

              {/* KOLOM KANAN: Analisis AI & Afiliasi */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8">
                
                {/* Score Card Berbasis Cosine Similarity */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between group">
                  <div className="mb-6 sm:mb-0 text-center sm:text-left flex-1 pr-0 sm:pr-6">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100 mb-4">
                      <i className="fas fa-robot mr-1.5"></i> Cosine Similarity Engine
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-2">Skor Kesesuaian Profil: <span className="text-amber-500">68%</span></h2>
                    <p className="text-sm text-slate-500 max-w-md">Kualifikasi Anda memiliki kecocokan sedang dengan kebutuhan industri. Tingkatkan skill yang kurang untuk mencapai batas aman yang disarankan sistem (&gt;85%).</p>
                  </div>
                  
                  {/* Progress Circle Clean */}
                  <div className="relative w-28 h-28 shrink-0 flex items-center justify-center rounded-full bg-amber-50 border-[8px] border-amber-400 text-amber-600 text-3xl font-black group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    68<span className="text-xl">%</span>
                  </div>
                </div>

                {/* Skill Gap Analysis */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-bold text-slate-800 text-lg flex items-center">
                      <i className="fas fa-chart-pie text-blue-500 mr-2.5"></i> Analisis Kesenjangan Skill (Gap)
                    </h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Matched */}
                    <div className="border border-slate-100 bg-slate-50/50 rounded-xl p-5">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center">
                        <i className="fas fa-check-circle text-emerald-500 mr-2 text-sm"></i> Telah Dimiliki (Matched)
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold shadow-sm">React.js</span>
                        <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold shadow-sm">JavaScript</span>
                        <span className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 rounded-lg text-xs font-semibold shadow-sm">HTML/CSS</span>
                      </div>
                    </div>

                    {/* Gaps */}
                    <div className="border border-rose-100 bg-rose-50/30 rounded-xl p-5">
                      <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center">
                        <i className="fas fa-exclamation-circle text-rose-500 mr-2 text-sm"></i> Kebutuhan Industri (Missing)
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-lg text-xs font-bold shadow-sm animate-pulse">TypeScript</span>
                        <span className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-lg text-xs font-bold shadow-sm animate-pulse">Next.js</span>
                        <span className="px-3 py-1.5 bg-white border border-rose-200 text-rose-700 rounded-lg text-xs font-bold shadow-sm">Tailwind CSS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mitra Pelatihan (Affiliate Model) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-bold text-slate-800 text-lg">Upskilling & Sertifikasi</h2>
                    <span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded text-[10px] font-bold uppercase tracking-wide">
                      Mitra Edukasi
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Tutupi celah skill Anda secara instan dengan mengambil modul khusus dari mitra platform belajar kami.</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Dicoding Card */}
                    <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition bg-white flex flex-col justify-between group cursor-pointer">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-slate-800 text-white text-[10px] font-bold px-2.5 py-1 rounded">dicoding</div>
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded border border-rose-100">Solusi Target: Next.js</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 leading-tight mb-1.5 group-hover:text-blue-600 transition">Menjadi Front-End Web Developer Expert</h4>
                        <p className="text-xs text-slate-500">Pelajari Next.js dan optimasi performa web langsung dari ahlinya.</p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-blue-500">Mulai Belajar</span>
                        <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition">
                          <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                      </div>
                    </div>

                    {/* Coursera Card */}
                    <div className="border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition bg-white flex flex-col justify-between group cursor-pointer">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <div className="bg-[#0056D2] text-white text-[10px] font-bold px-2.5 py-1 rounded">coursera</div>
                          <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded border border-rose-100">Solusi Target: TypeScript</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-800 leading-tight mb-1.5 group-hover:text-blue-600 transition">TypeScript for Front-End Developers</h4>
                        <p className="text-xs text-slate-500">Sertifikasi profesional dari Meta. Kuasai pengetikan statis pada React.</p>
                      </div>
                      <div className="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center">
                        <span className="text-xs font-bold text-slate-400 group-hover:text-blue-500">Mulai Belajar</span>
                        <div className="w-6 h-6 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-600 transition">
                          <i className="fas fa-arrow-right text-[10px]"></i>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default CandidateDashboard;