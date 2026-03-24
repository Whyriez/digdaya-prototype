import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';

const ProfilPortofolio = () => {
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
            <button className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">Profil & Portofolio Saya</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Profil Saya</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm flex items-center">
              <i className="fas fa-external-link-alt sm:mr-2 text-slate-400"></i> <span className="hidden sm:inline">Lihat Publik</span>
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition shadow-sm">
              <i className="fas fa-download sm:mr-2"></i> <span className="hidden sm:inline">Unduh CV Baru</span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="max-w-5xl mx-auto space-y-6">
            
            {/* 1. Header Profil (Hero Section) */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative">
              {/* Banner Background */}
              <div className="h-32 sm:h-48 bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-500 relative">
                <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                <button className="absolute top-4 right-4 w-8 h-8 bg-black/30 hover:bg-black/50 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition">
                  <i className="fas fa-camera"></i>
                </button>
              </div>
              
              <div className="px-6 sm:px-8 pb-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end -mt-12 sm:-mt-16 mb-4 gap-4">
                  {/* Avatar */}
                  <div className="relative">
                    <img 
                      src="https://ui-avatars.com/api/?name=Nur+Alim&background=eff6ff&color=2563eb&size=150" 
                      alt="Nur Alim M. Suma" 
                      className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md bg-white"
                    />
                    <div className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 border-2 border-white rounded-full"></div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-slate-300 text-slate-700 rounded-lg text-sm font-bold hover:bg-slate-50 transition shadow-sm">
                      <i className="fas fa-pencil-alt mr-2"></i> Edit Profil
                    </button>
                    <button className="w-10 h-10 bg-white border border-slate-300 text-slate-700 rounded-lg flex items-center justify-center hover:bg-slate-50 transition shadow-sm">
                      <i className="fas fa-share-alt"></i>
                    </button>
                  </div>
                </div>

                {/* Info Diri */}
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">Nur Alim M. Suma</h1>
                  <p className="text-base sm:text-lg font-medium text-slate-600 mb-3">Frontend & Mobile Developer | Penggemar React, Go, dan Eksplorasi AI</p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 font-medium mb-4">
                    <span className="flex items-center"><i className="fas fa-map-marker-alt w-4 text-center text-slate-400"></i> Gorontalo, Indonesia (Terbuka untuk Remote)</span>
                    <span className="flex items-center"><i className="fas fa-university w-4 text-center text-slate-400"></i> Universitas Negeri Gorontalo</span>
                    <span className="flex items-center"><i className="fas fa-envelope w-4 text-center text-slate-400"></i> nuralim@example.com</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold rounded-full flex items-center">
                      <i className="fas fa-briefcase mr-1.5"></i> Open to Work
                    </span>
                    <span className="px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-xs font-bold rounded-full flex items-center cursor-pointer hover:bg-blue-100 transition">
                      <i className="fab fa-linkedin mr-1.5"></i> LinkedIn
                    </span>
                    <span className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold rounded-full flex items-center cursor-pointer hover:bg-slate-200 transition">
                      <i className="fab fa-github mr-1.5"></i> GitHub
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kelengkapan Profil (Profile Strength) */}
            <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl border border-blue-100 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-blue-100" />
                    <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" strokeDasharray="150.7" strokeDashoffset="22.6" className="text-blue-600" />
                  </svg>
                  <span className="absolute text-sm font-black text-blue-700">85%</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Kekuatan Profil Anda: <span className="text-blue-600">Sangat Baik</span></h3>
                  <p className="text-xs text-slate-500 mt-1">Tambahkan setidaknya 1 sertifikasi dari modul pelatihan untuk mencapai 100% dan memikat HRD.</p>
                </div>
              </div>
              <Link to="/pelatihan" className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition shadow-sm whitespace-nowrap text-center">
                Tambah Sertifikat
              </Link>
            </div>

            {/* Grid 2 Kolom untuk Konten Detail */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Kolom Utama (Kiri - Lebar) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* 2. Tentang Saya */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative group">
                  <button className="absolute top-6 right-6 w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <i className="fas fa-pencil-alt text-sm"></i>
                  </button>
                  <h2 className="text-lg font-bold text-slate-800 mb-4">Tentang Saya</h2>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Saya adalah seorang Mobile & Frontend Web Developer yang bersemangat memecahkan masalah melalui kode. Berpengalaman dalam membangun aplikasi analitik, integrasi API, dan merancang antarmuka yang responsif menggunakan React dan Go. Selalu antusias mempelajari teknologi baru, terutama dalam ranah kecerdasan buatan (AI) dan manajemen server (Docker/Proxmox).
                  </p>
                </div>

                {/* 3. Portofolio (Etalase Karya) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative group">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-slate-800">Portofolio & Proyek Unggulan</h2>
                    <button className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition flex items-center justify-center">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* Project 1 */}
                    <div className="group/item">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-800 text-base group-hover/item:text-blue-600 transition">GENIKA - AI Econometrics Chatbot</h3>
                        <a href="#" className="text-slate-400 hover:text-blue-600"><i className="fas fa-external-link-alt text-xs"></i></a>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">Desember 2025 - Februari 2026</p>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Membangun asisten riset ekonometrika berbasis AI. Mengembangkan antarmuka obrolan responsif dengan React.js dan merancang backend API menggunakan Flask untuk memproses respons dari model bahasa (LLM).</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">React</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Flask</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">AI/NLP</span>
                      </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Project 2 */}
                    <div className="group/item">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-800 text-base group-hover/item:text-blue-600 transition">Dashboard Manajemen Server CPanel-Clone</h3>
                        <a href="#" className="text-slate-400 hover:text-blue-600"><i className="fas fa-external-link-alt text-xs"></i></a>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">Maret 2026</p>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Merancang aplikasi manajemen server proyek dengan arsitektur modern. Membangun fitur file manager, terminal akses jarak jauh (remote access), dan pemantauan resource server.</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Go (Golang)</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">React</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Docker</span>
                      </div>
                    </div>

                    <hr className="border-slate-100" />

                    {/* Project 3 */}
                    <div className="group/item">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-slate-800 text-base group-hover/item:text-blue-600 transition">Unity Dash Stats</h3>
                        <a href="#" className="text-slate-400 hover:text-blue-600"><i className="fas fa-external-link-alt text-xs"></i></a>
                      </div>
                      <p className="text-xs font-semibold text-slate-500 mb-2">Januari - Februari 2026</p>
                      <p className="text-sm text-slate-600 mb-3 leading-relaxed">Mengembangkan aplikasi analitik khusus untuk memantau performa dan metrik monetisasi dari Unity Ads. Bertanggung jawab atas optimalisasi proses build dan visualisasi data matriks.</p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Mobile Dev</span>
                        <span className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded">Data Analytics</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 4. Pengalaman Organisasi / Kerja */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm relative group">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-slate-800">Pengalaman</h2>
                    <button className="w-8 h-8 rounded-full hover:bg-slate-100 text-slate-400 hover:text-blue-600 transition flex items-center justify-center">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <div className="space-y-6 border-l-2 border-slate-100 ml-3 pl-5 relative">
                    
                    {/* Exp 1 */}
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-white border-4 border-blue-500 rounded-full"></div>
                      <h3 className="font-bold text-slate-800 text-base">Tribe Representative</h3>
                      <p className="text-sm font-medium text-slate-700 mb-1">MSIB Batch VII - Bangkit Academy</p>
                      <p className="text-xs text-slate-400 mb-2">Februari 2024</p>
                      <p className="text-sm text-slate-600">Bertindak sebagai perwakilan grup (Tribe) dalam program intensif pengembangan talenta digital. Mengoordinasikan komunikasi antar anggota tim dan memastikan penyelesaian tugas serta target pembelajaran tepat waktu.</p>
                    </div>

                    {/* Exp 2 */}
                    <div className="relative">
                      <div className="absolute -left-[29px] top-1 w-4 h-4 bg-white border-2 border-slate-300 rounded-full"></div>
                      <h3 className="font-bold text-slate-800 text-base">Google Student Ambassador (GSA)</h3>
                      <p className="text-sm font-medium text-slate-700 mb-1">Universitas Negeri Gorontalo</p>
                      <p className="text-xs text-slate-400 mb-2">2023 - 2024</p>
                      <p className="text-sm text-slate-600">Mewakili kampus dalam mengenalkan dan mengedukasi mahasiswa mengenai teknologi serta ekosistem produk Google. Mengorganisir berbagai workshop teknologi dan sesi berbagi wawasan bagi komunitas developer di kampus.</p>
                    </div>

                  </div>
                </div>

              </div>

              {/* Kolom Samping (Kanan - Sempit) */}
              <div className="space-y-6">
                
                {/* 5. Pendidikan */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-slate-800">Pendidikan</h2>
                    <button className="text-slate-400 hover:text-blue-600"><i className="fas fa-pencil-alt text-xs"></i></button>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-500 shrink-0">
                      <i className="fas fa-university"></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 text-sm leading-tight">Universitas Negeri Gorontalo</h3>
                      <p className="text-xs font-semibold text-slate-600 mt-1">S1 Teknik Informatika</p>
                      <p className="text-xs text-slate-400 mt-1">Estimasi Lulus: 2026</p>
                      <p className="text-[11px] text-slate-500 mt-2 bg-slate-50 p-2 rounded border border-slate-100">Status: Sedang mengerjakan Skripsi/Tugas Akhir.</p>
                    </div>
                  </div>
                </div>

                {/* 6. Skills (AI Verified) */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-bold text-slate-800">Keahlian (Skills)</h2>
                    <button className="text-slate-400 hover:text-blue-600"><i className="fas fa-plus text-xs"></i></button>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center">
                      <i className="fas fa-shield-alt text-blue-500 mr-1.5"></i> Divalidasi oleh AI
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold shadow-sm">React.js</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold shadow-sm">Go (Golang)</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold shadow-sm">JavaScript</span>
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-xs font-bold shadow-sm">PHP</span>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Teknologi & Tools Lainnya</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium">Android Studio</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium">Docker</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium">Supabase</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium">Proxmox</span>
                      <span className="px-3 py-1 bg-slate-100 text-slate-600 border border-slate-200 rounded text-xs font-medium">Flask</span>
                    </div>
                  </div>
                </div>

                {/* 7. Resume CV Card */}
                <div className="bg-slate-800 rounded-2xl p-6 shadow-sm text-white relative overflow-hidden">
                  <i className="fas fa-file-pdf absolute -right-4 -bottom-4 text-7xl text-slate-700 opacity-50"></i>
                  <div className="relative z-10">
                    <h2 className="font-bold text-lg mb-1">Resume / CV</h2>
                    <p className="text-xs text-slate-300 mb-4">CV_NurAlim_Tech.pdf (Diperbarui bulan ini)</p>
                    <div className="flex gap-2">
                      <button className="flex-1 py-2 bg-white text-slate-900 text-xs font-bold rounded hover:bg-slate-100 transition shadow-sm">
                        <i className="fas fa-eye mr-1.5"></i> Lihat
                      </button>
                      <button className="flex-1 py-2 bg-slate-700 text-white border border-slate-600 text-xs font-bold rounded hover:bg-slate-600 transition shadow-sm">
                        <i className="fas fa-upload mr-1.5"></i> Perbarui
                      </button>
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

export default ProfilPortofolio;