import React from 'react';
import { Link } from 'react-router-dom';

const CandidateDashboard = () => {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen font-sans">
      
      {/* Navbar Minimalist */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">SkillSync AI</span>
          </Link>
          <div className="flex items-center space-x-5">
            <button className="text-slate-400 hover:text-blue-600 transition">
              <i className="fas fa-bell"></i>
            </button>
            <div className="flex items-center space-x-3 border-l border-slate-200 pl-5">
              <img 
                src="https://ui-avatars.com/api/?name=Nur+Alim&background=eff6ff&color=2563eb" 
                alt="Profile" 
                className="w-8 h-8 rounded-full border border-slate-200" 
              />
              <span className="text-sm font-semibold text-slate-700 hidden sm:block">Nur Alim M. Suma</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pt-8 pb-12 px-6">
        
        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Overview Analisis Kandidat</h1>
            <p className="text-slate-500 text-sm mt-1">Hasil ekstraksi CV dan pemetaan kompetensi secara real-time.</p>
          </div>
          <div className="mt-4 md:mt-0 px-4 py-2 bg-white border border-slate-200 rounded-lg shadow-sm flex items-center text-sm font-medium text-slate-600">
            <i className="fas fa-clock text-blue-500 mr-2"></i> Diperbarui: Hari ini, 14:30 WITA
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* KOLOM KIRI: Informasi Dasar */}
          <div className="space-y-6">
            
            {/* Target Posisi */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Target Pekerjaan</h2>
                <Link to="/upload" className="text-xs text-blue-600 hover:text-blue-800 font-semibold transition">Ubah Target</Link>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-blue-600">
                  <i className="fas fa-laptop-code text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">Frontend Web Developer</h3>
                  <p className="text-sm text-slate-500 flex items-center mt-1">
                    <i className="fas fa-building mr-1.5"></i> PT. Inovasi Digital (Dicoding)
                  </p>
                </div>
              </div>
            </div>

            {/* Status CV */}
            <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Dokumen Tersimpan</h2>
              <div className="border-2 border-dashed border-slate-200 bg-slate-50 rounded-lg p-5 flex flex-col items-center text-center">
                <i className="fas fa-file-pdf text-3xl text-red-500 mb-2"></i>
                <p className="text-sm font-semibold text-slate-700">CV_NurAlim_Tech.pdf</p>
                <p className="text-xs text-slate-400 mt-1">450 KB • Diunggah baru saja</p>
                <div className="mt-4 px-3 py-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold flex items-center">
                  <i className="fas fa-check-circle mr-1.5"></i> AI Parsing Selesai
                </div>
              </div>
              <button className="w-full mt-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition">
                <i className="fas fa-sync-alt mr-2 text-slate-400"></i> Perbarui CV
              </button>
            </div>
          </div>

          {/* KOLOM KANAN: Analisis AI & Afiliasi */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Score Card Berbasis Cosine Similarity */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between group">
              <div className="mb-6 sm:mb-0 text-center sm:text-left">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-3">
                  <i className="fas fa-robot mr-1.5"></i> Cosine Similarity Engine
                </div>
                <h2 className="text-xl font-bold text-slate-800 mb-1">Skor Kesesuaian Profil: 68%</h2>
                <p className="text-sm text-slate-500 max-w-md">Kualifikasi Anda memiliki kecocokan sedang dengan kebutuhan perusahaan. Tingkatkan skill yang kurang untuk mencapai skor aman (&gt;85%).</p>
              </div>
              
              {/* Progress Circle Clean */}
              <div className="relative w-24 h-24 flex items-center justify-center rounded-full bg-amber-50 border-[6px] border-amber-400 text-amber-600 text-2xl font-black group-hover:scale-105 transition-transform duration-300">
                68<span className="text-lg">%</span>
              </div>
            </div>

            {/* Skill Gap Analysis */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-bold text-slate-800"><i className="fas fa-chart-pie text-blue-500 mr-2"></i>Analisis Kesenjangan Skill (Gap)</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Matched */}
                <div className="border border-slate-100 bg-slate-50 rounded-lg p-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center">
                    <i className="fas fa-check-circle text-emerald-500 mr-1.5"></i> Telah Dimiliki (Matched)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded text-xs font-semibold shadow-sm">React.js</span>
                    <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded text-xs font-semibold shadow-sm">JavaScript</span>
                    <span className="px-2.5 py-1 bg-white border border-slate-200 text-slate-700 rounded text-xs font-semibold shadow-sm">HTML/CSS</span>
                  </div>
                </div>

                {/* Gaps */}
                <div className="border border-rose-100 bg-rose-50/50 rounded-lg p-4">
                  <h3 className="text-xs font-bold text-slate-500 uppercase mb-3 flex items-center">
                    <i className="fas fa-exclamation-circle text-rose-500 mr-1.5"></i> Kebutuhan Industri (Missing)
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 bg-white border border-rose-200 text-rose-700 rounded text-xs font-bold shadow-sm animate-pulse">TypeScript</span>
                    <span className="px-2.5 py-1 bg-white border border-rose-200 text-rose-700 rounded text-xs font-bold shadow-sm animate-pulse">Next.js</span>
                    <span className="px-2.5 py-1 bg-white border border-rose-200 text-rose-700 rounded text-xs font-bold shadow-sm">Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mitra Pelatihan (Affiliate Model) */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h2 className="font-bold text-slate-800">Upskilling & Sertifikasi</h2>
                <span className="px-2.5 py-1 bg-blue-50 text-blue-600 border border-blue-100 rounded text-[10px] font-bold uppercase tracking-wide">
                  Mitra Eksternal
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-5">Tutupi celah skill Anda dengan mengambil modul dari mitra platform belajar kami.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Dicoding Card */}
                <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition bg-white flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-slate-800 text-white text-[10px] font-bold px-2 py-1 rounded">dicoding</div>
                      <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">Solusi Target: Next.js</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight mb-1">Menjadi Front-End Web Developer Expert</h4>
                    <p className="text-xs text-slate-500">Pelajari Next.js dan optimasi performa web langsung dari ahlinya.</p>
                  </div>
                  <a href="#" className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center">
                    Akses Kelas <i className="fas fa-external-link-alt ml-1.5 text-xs"></i>
                  </a>
                </div>

                {/* Coursera Card */}
                <div className="border border-slate-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition bg-white flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <div className="bg-[#0056D2] text-white text-[10px] font-bold px-2 py-1 rounded">coursera</div>
                      <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100">Solusi Target: TypeScript</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight mb-1">TypeScript for Front-End Developers</h4>
                    <p className="text-xs text-slate-500">Sertifikasi profesional dari Meta. Kuasai pengetikan statis pada React.</p>
                  </div>
                  <a href="#" className="mt-4 text-sm font-semibold text-blue-600 group-hover:text-blue-700 flex items-center">
                    Akses Kelas <i className="fas fa-external-link-alt ml-1.5 text-xs"></i>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateDashboard;