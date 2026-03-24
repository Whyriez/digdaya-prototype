import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-slate-50 text-slate-800 overflow-x-hidden min-h-screen">
      {/* Navbar */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-slate-200 fixed w-full z-50 transition-all">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-blue-200">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">SkillSync AI</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Fitur Utama</a>
            <a href="#" className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition">Mitra Pelatihan</a>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/hr" className="text-sm font-bold text-slate-600 hover:text-slate-900 hidden sm:block">Masuk HR</Link>
            <Link to="/upload" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-slate-800 transition shadow-sm">
              Mulai Analisis CV
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0"></div>
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold mb-6">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Solusi ATS & Rekrutmen Masa Depan
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
                Jangan Biarkan CV Anda <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Gugur di Tahap ATS.</span>
              </h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
                Platform <strong>Job Matching Berbasis AI</strong> yang membimbing pencari kerja menutupi <em>skill gap</em> mereka, sekaligus membantu perusahaan menyaring kandidat terbaik dalam hitungan detik.
              </p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <Link to="/upload" className="px-6 py-3.5 bg-blue-600 text-white text-sm font-bold rounded-xl hover:bg-blue-700 transition shadow-md shadow-blue-200 text-center flex items-center justify-center">
                  <i className="fas fa-user-graduate mr-2"></i> Saya Pencari Kerja
                </Link>
                <Link to="/hr" className="px-6 py-3.5 bg-white border border-slate-200 text-slate-700 text-sm font-bold rounded-xl hover:bg-slate-50 transition shadow-sm text-center flex items-center justify-center group">
                  <i className="fas fa-building mr-2 text-slate-400 group-hover:text-blue-500 transition"></i> Saya Perusahaan (HRD)
                </Link>
              </div>
            </div>

            {/* Mockup UI Component */}
            <div className="relative lg:ml-10">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-indigo-50 rounded-3xl transform rotate-3 scale-105 z-0 border border-white"></div>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-6 relative z-10 flex flex-col space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-slate-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100">
                      <i className="fas fa-robot text-blue-600"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">AI Analysis</p>
                      <p className="text-sm font-bold text-slate-800">Skor Kesesuaian CV</p>
                    </div>
                  </div>
                  <span className="text-2xl font-black text-emerald-500">92%</span>
                </div>
                <div className="space-y-3">
                  <p className="text-[11px] font-bold text-slate-500 uppercase">Skill Ditemukan (Matched)</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">React.js</span>
                    <span className="px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded border border-emerald-100">JavaScript</span>
                  </div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase pt-2">Deteksi Gap (Missing)</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-rose-50 text-rose-700 text-xs font-bold rounded border border-rose-100">TypeScript</span>
                  </div>
                  <div className="mt-4 p-3 bg-slate-50 rounded-lg border border-slate-100 flex justify-between items-center">
                    <div>
                      <p className="text-xs font-bold text-slate-800">Rekomendasi Pelatihan</p>
                      <p className="text-[10px] text-slate-500">Tutup gap Anda dengan modul ini.</p>
                    </div>
                    <div className="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded">Mulai Belajar</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg border border-slate-100 p-4 z-20 flex items-center space-x-3 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <i className="fas fa-check text-emerald-600"></i>
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Diproses Otomatis</p>
                  <p className="text-[10px] text-slate-500">via Cosine Similarity NLP</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 3 Core Features */}
      <div className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solusi End-to-End untuk Ekosistem Karir</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Dirancang khusus untuk mendukung Digitalisasi Penciptaan Lapangan Kerja di Indonesia.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 border border-blue-100">
                <i className="fas fa-network-wired text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Job Matching AI</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Algoritma NLP dan Cosine Similarity mencocokkan profil pelamar dengan deskripsi pekerjaan secara semantik, bukan sekadar keyword biasa.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-6 border border-amber-100">
                <i className="fas fa-search-chart text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Skill Gap Advisor</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Memberikan umpan balik transparan kepada pelamar mengenai keterampilan apa yang kurang agar mereka tidak mengulang kesalahan.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-6 border border-emerald-100">
                <i className="fas fa-graduation-cap text-xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Personalized Training</h3>
              <p className="text-sm text-slate-500 leading-relaxed">Secara otomatis merekomendasikan kursus atau sertifikasi dari mitra untuk menutupi celah keahlian secara instan.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;