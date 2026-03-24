import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CariLowonganPublic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('Semua Lokasi');
  const [typeFilter, setTypeFilter] = useState('Semua Tipe');

  // State BARU: Untuk menyimpan data lowongan yang sedang dilihat detailnya
  const [selectedJob, setSelectedJob] = useState(null);

  // Dummy Data Lowongan Pekerjaan (Ditambahkan description)
  const jobsData = [
    {
      id: 1,
      title: 'Frontend Web Developer',
      company: 'PT. Inovasi Digital (Dicoding)',
      location: 'Bandung',
      type: 'Full-time',
      workplace: 'Hybrid',
      salary: 'Rp 8.000.000 - Rp 12.000.000',
      postedAt: '2 jam yang lalu',
      skills: ['React', 'Next.js', 'Tailwind'],
      logo: 'fas fa-laptop-code text-blue-500',
      bgLogo: 'bg-blue-50 border-blue-100',
      description: 'Kami mencari Frontend Developer yang bersemangat untuk membangun antarmuka pengguna yang interaktif dan responsif menggunakan React dan Next.js.'
    },
    {
      id: 2,
      title: 'Mobile App Developer (Flutter)',
      company: 'Gorontalo Tech Hub',
      location: 'Gorontalo',
      type: 'Full-time',
      workplace: 'On-site',
      salary: 'Dirahasiakan',
      postedAt: '1 hari yang lalu',
      skills: ['Flutter', 'Dart', 'Firebase'],
      logo: 'fas fa-mobile-alt text-emerald-500',
      bgLogo: 'bg-emerald-50 border-emerald-100',
      description: 'Bergabunglah dengan tim kami untuk mengembangkan aplikasi mobile inovatif menggunakan framework Flutter untuk platform iOS dan Android.'
    },
    {
      id: 3,
      title: 'React Native Engineer',
      company: 'Startup Nusantara',
      location: 'Jakarta Selatan',
      type: 'Contract',
      workplace: 'Remote',
      salary: 'Rp 10.000.000 - Rp 15.000.000',
      postedAt: '3 hari yang lalu',
      skills: ['React Native', 'Redux', 'API'],
      logo: 'fas fa-code text-indigo-500',
      bgLogo: 'bg-indigo-50 border-indigo-100',
      description: 'Dibutuhkan segera React Native Engineer berpengalaman untuk mengelola dan mengembangkan fitur baru pada aplikasi e-commerce kami yang sedang berkembang pesat.'
    }
  ];

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = locationFilter === 'Semua Lokasi' || job.location === locationFilter || job.workplace === locationFilter;
    const matchesType = typeFilter === 'Semua Tipe' || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen overflow-x-hidden font-sans relative">
      
      {/* Public Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm shadow-blue-200">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">SkillSync AI</span>
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-500 hidden sm:block mr-2">Sudah punya akun?</span>
            <Link to="/login" className="px-5 py-2 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition shadow-sm">
              Login untuk Melamar
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative bg-slate-50">
        
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Search Hero Section */}
          <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-8 sm:py-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Eksplorasi Lowongan Pekerjaan</h1>
              <p className="text-slate-500 text-sm sm:text-base mb-8">Login untuk melihat kecocokan skill Anda menggunakan AI dengan posisi di bawah ini.</p>
              
              {/* Search Bar & Filters */}
              <div className="bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3">
                <div className="relative flex-1">
                  <i className="fas fa-search absolute left-4 top-3.5 text-slate-400"></i>
                  <input 
                    type="text" 
                    placeholder="Posisi, keahlian, atau perusahaan..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
                <div className="relative md:w-64 shrink-0">
                  <i className="fas fa-map-marker-alt absolute left-4 top-3.5 text-rose-500"></i>
                  <select 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition"
                  >
                    <option value="Semua Lokasi">Semua Lokasi</option>
                    <option value="Remote">🌐 Remote</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Gorontalo">Gorontalo</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-4 text-xs text-slate-400 pointer-events-none"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings Area */}
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-800">Tersedia {filteredJobs.length} Lowongan</h2>
              </div>
              <select 
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500"
              >
                <option value="Semua Tipe">Semua Tipe Kerja</option>
                <option value="Full-time">Full-time</option>
                <option value="Contract">Contract</option>
              </select>
            </div>

            {/* List Lowongan */}
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-blue-300 transition duration-300 flex flex-col md:flex-row gap-6 relative group">
                  
                  {/* UX Trik Marketing: Gembok AI Score */}
                  <div className="absolute top-5 right-5 md:static md:shrink-0 flex flex-col items-center justify-center md:w-24 md:h-24 md:bg-slate-50 md:rounded-xl md:border md:border-slate-200 md:border-dashed cursor-not-allowed group/lock">
                    <p className="hidden md:block text-[10px] font-bold text-slate-400 uppercase mb-1">AI Match</p>
                    <div className="flex flex-col items-center text-slate-300 group-hover/lock:text-blue-500 transition">
                      <i className="fas fa-lock text-xl mb-1"></i>
                      <span className="text-[10px] font-medium text-center px-1 hidden md:block">Login untuk<br/>lihat skor</span>
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center shrink-0 ${job.bgLogo}`}>
                        <i className={`${job.logo} text-xl sm:text-2xl`}></i>
                      </div>
                      
                      <div>
                        {/* Judul bisa di klik */}
                        <button onClick={() => setSelectedJob(job)} className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition inline-block mb-1 text-left">
                          {job.title}
                        </button>
                        <p className="text-sm font-medium text-slate-600 mb-3">{job.company}</p>
                        
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-medium text-slate-500 mb-4">
                          <span className="flex items-center"><i className="fas fa-map-marker-alt mr-1.5 text-slate-400"></i> {job.location}</span>
                          <span className="flex items-center"><i className="fas fa-building mr-1.5 text-slate-400"></i> {job.workplace}</span>
                          <span className="flex items-center"><i className="fas fa-briefcase mr-1.5 text-slate-400"></i> {job.type}</span>
                        </div>

                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-md text-[11px] font-semibold">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions mengarah ke Detail dan Login */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0 gap-3">
                    <span className="text-xs text-slate-400 font-medium">{job.postedAt}</span>
                    
                    <div className="flex gap-2 w-full md:w-auto">
                      {/* TOMBOL BARU: Detail */}
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="flex-1 md:flex-none px-4 h-10 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition shadow-sm flex items-center justify-center"
                      >
                        Detail
                      </button>

                      {/* TOMBOL LAMAR */}
                      <Link to="/login" className="flex-1 md:flex-none px-6 h-10 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition shadow-sm flex items-center justify-center">
                        Lamar Sekarang
                      </Link>
                    </div>

                  </div>

                </div>
              ))}
              
              {filteredJobs.length === 0 && (
                <div className="py-16 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-search text-3xl text-slate-300"></i>
                  </div>
                  <h3 className="text-lg font-bold text-slate-800 mb-1">Lowongan tidak ditemukan</h3>
                  <p className="text-sm max-w-sm mx-auto">Coba ubah kata kunci atau lokasi filter Anda.</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* MODAL DETAIL LOWONGAN (VERSI PUBLIK) */}
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-slate-900/60 transition-opacity">
            <div className="bg-white rounded-2xl w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
              
              {/* Modal Header */}
              <div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50 shrink-0">
                <h3 className="text-lg font-bold text-slate-800 flex items-center">
                  <i className="fas fa-briefcase mr-2 text-blue-600"></i> Detail Lowongan
                </h3>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-slate-400 hover:text-slate-700 hover:bg-slate-200 w-8 h-8 rounded-full flex items-center justify-center transition"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-white">
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  {/* Logo Perusahaan */}
                  <div className={`w-20 h-20 rounded-2xl border flex items-center justify-center shrink-0 shadow-sm ${selectedJob.bgLogo}`}>
                    <i className={`${selectedJob.logo} text-4xl`}></i>
                  </div>
                  
                  {/* Judul & Info Dasar */}
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-900 mb-1">{selectedJob.title}</h2>
                    <p className="text-base font-semibold text-blue-600 mb-4">{selectedJob.company}</p>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Lokasi</p>
                        <p className="font-semibold text-slate-700 truncate">{selectedJob.location}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Tipe</p>
                        <p className="font-semibold text-slate-700 truncate">{selectedJob.type}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Workplace</p>
                        <p className="font-semibold text-slate-700 truncate">{selectedJob.workplace}</p>
                      </div>
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 relative overflow-hidden group">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Gaji</p>
                        <p className="font-semibold text-emerald-600 truncate blur-[4px] select-none">Rp 10.000.000</p>
                        <div className="absolute inset-0 bg-white/40 flex items-center justify-center backdrop-blur-[1px]">
                          <i className="fas fa-lock text-slate-500 text-xs"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-px bg-slate-200 my-6"></div>

                <div className="flex flex-col md:flex-row gap-8">
                  {/* Bagian Kiri: Deskripsi & Keahlian */}
                  <div className="md:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-3">Deskripsi Pekerjaan</h4>
                      <p className="text-sm text-slate-600 leading-relaxed text-justify">
                        {selectedJob.description}
                        <br/><br/>
                        Sebagai bagian dari tim kami, Anda akan berkolaborasi dengan desainer, product manager, dan engineer lainnya untuk menciptakan produk yang inovatif. Kami mengutamakan budaya kerja yang fleksibel, kolaboratif, dan berorientasi pada hasil.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-3">Syarat Keahlian</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 bg-slate-100 text-slate-700 border border-slate-200 rounded-lg text-sm font-semibold shadow-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bagian Kanan: Marketing AI Lock & Status */}
                  <div className="md:w-1/3 space-y-4">
                    
                    {/* Kotak AI Score Terkunci */}
                    <div className="p-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 bg-white rounded-full border border-slate-200 shadow-sm flex items-center justify-center mb-3">
                        <i className="fas fa-lock text-xl text-slate-400"></i>
                      </div>
                      <h4 className="text-sm font-bold text-slate-800 mb-2">Fitur AI Terkunci</h4>
                      <p className="text-xs text-slate-500 mb-4 leading-relaxed">Login sekarang untuk melihat analisis kecocokan profil Anda dengan lowongan ini.</p>
                      <Link to="/login" className="w-full py-2 bg-blue-50 text-blue-600 border border-blue-200 rounded-lg text-xs font-bold hover:bg-blue-100 transition">
                        Login / Daftar
                      </Link>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Diposting Pada</p>
                      <p className="text-sm font-bold text-slate-800">{selectedJob.postedAt}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0 flex justify-end items-center">
                <div className="flex space-x-3 w-full sm:w-auto">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-white transition shadow-sm text-center"
                  >
                    Tutup
                  </button>
                  <Link to="/login" className="flex-1 sm:flex-none px-6 py-2.5 bg-slate-900 text-white border border-slate-900 rounded-xl text-sm font-bold hover:bg-blue-600 transition shadow-sm text-center flex items-center justify-center">
                    Login untuk Melamar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default CariLowonganPublic;