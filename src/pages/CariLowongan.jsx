import React, { useState } from 'react';
import SidebarUser from '../components/SidebarUser';
import { Link } from 'react-router-dom';

const CariLowongan = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('Semua Lokasi');
  const [typeFilter, setTypeFilter] = useState('Semua Tipe');
  const [sortBy, setSortBy] = useState('Rekomendasi AI');

  // State BARU: Untuk menyimpan data lowongan yang sedang dilihat detailnya
  const [selectedJob, setSelectedJob] = useState(null);

  // Dummy Data Lowongan Pekerjaan (ditambah field deskripsi singkat)
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
      matchScore: 92,
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
      matchScore: 88,
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
      matchScore: 85,
      skills: ['React Native', 'Redux', 'API'],
      logo: 'fas fa-code text-indigo-500',
      bgLogo: 'bg-indigo-50 border-indigo-100',
      description: 'Dibutuhkan segera React Native Engineer berpengalaman untuk mengelola dan mengembangkan fitur baru pada aplikasi e-commerce kami yang sedang berkembang pesat.'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Kreatif Studio',
      location: 'Yogyakarta',
      type: 'Full-time',
      workplace: 'On-site',
      salary: 'Rp 6.000.000 - Rp 9.000.000',
      postedAt: '5 jam yang lalu',
      matchScore: 45,
      skills: ['Figma', 'Prototyping', 'UI Design'],
      logo: 'fas fa-paint-brush text-rose-500',
      bgLogo: 'bg-rose-50 border-rose-100',
      description: 'Mencari desainer UI/UX yang kreatif untuk merancang pengalaman digital yang intuitif dan estetis untuk klien-klien kami.'
    },
    {
      id: 5,
      title: 'Backend Developer (Go)',
      company: 'Fintech Syariah',
      location: 'Jakarta Pusat',
      type: 'Full-time',
      workplace: 'Hybrid',
      salary: 'Rp 12.000.000 - Rp 18.000.000',
      postedAt: 'Baru saja',
      matchScore: 78,
      skills: ['Golang', 'PostgreSQL', 'Docker'],
      logo: 'fas fa-server text-amber-500',
      bgLogo: 'bg-amber-50 border-amber-100',
      description: 'Kami membutuhkan Backend Developer yang mahir menggunakan Golang untuk membangun arsitektur microservices yang scalable dan aman.'
    }
  ];

  // Logika Filter Multi-Kriteria
  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = locationFilter === 'Semua Lokasi' || job.location === locationFilter || job.workplace === locationFilter;
    const matchesType = typeFilter === 'Semua Tipe' || job.type === typeFilter;

    return matchesSearch && matchesLocation && matchesType;
  }).sort((a, b) => {
    if (sortBy === 'Rekomendasi AI') return b.matchScore - a.matchScore; // Urutkan skor tertinggi
    if (sortBy === 'Terbaru') return 0; // Asumsi data sudah urut terbaru dari API
    return 0;
  });

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
              <span className="text-slate-900 font-bold">Eksplorasi Karir</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Cari Lowongan</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative text-slate-400 hover:text-blue-600 transition">
              <i className="fas fa-bookmark text-lg"></i>
              <span className="absolute -top-1.5 -right-2 bg-blue-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border-2 border-white">
                12
              </span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Search Hero Section */}
          <div className="bg-white border-b border-slate-200 px-4 sm:px-8 py-8 sm:py-10">
            <div className="max-w-5xl mx-auto">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Temukan Pekerjaan Impian Anda</h1>
              <p className="text-slate-500 text-sm sm:text-base mb-8">Cari dari ribuan lowongan yang telah disesuaikan dengan profil dan keahlian Anda.</p>
              
              {/* Search Bar & Filters */}
              <div className="bg-slate-50 p-2 sm:p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-3">
                
                {/* Kata Kunci */}
                <div className="relative flex-1">
                  <i className="fas fa-search absolute left-4 top-3.5 text-slate-400"></i>
                  <input 
                    type="text" 
                    placeholder="Posisi, keahlian, atau perusahaan..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>

                {/* Filter Lokasi (Sangat Penting) */}
                <div className="relative md:w-64 shrink-0">
                  <i className="fas fa-map-marker-alt absolute left-4 top-3.5 text-rose-500"></i>
                  <select 
                    value={locationFilter}
                    onChange={(e) => setLocationFilter(e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer transition"
                  >
                    <option value="Semua Lokasi">Semua Lokasi</option>
                    <option value="Remote">🌐 Remote (Kerja dari mana saja)</option>
                    <option disabled>──────────</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Pusat">Jakarta Pusat</option>
                    <option value="Bandung">Bandung</option>
                    <option value="Yogyakarta">Yogyakarta</option>
                    <option value="Gorontalo">Gorontalo</option>
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-4 text-xs text-slate-400 pointer-events-none"></i>
                </div>

                {/* Tombol Cari */}
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-sm transition shrink-0 flex items-center justify-center">
                  Cari Lowongan
                </button>
              </div>

            </div>
          </div>

          {/* Job Listings Area */}
          <div className="max-w-5xl mx-auto px-4 sm:px-8 py-8">
            
            {/* Toolbar Tambahan & Sorting */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-between w-full">
                  <div>
                    <h2 className="text-lg font-bold text-slate-800">Menampilkan {filteredJobs.length} Lowongan</h2>
                    <p className="text-xs text-slate-500 mt-1">Sistem merekomendasikan loker dengan skor di atas 80%.</p>
                  </div>
              </div>
              
              <div className="flex gap-3 w-full sm:w-auto">
                {/* Filter Tipe */}
                <select 
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="Semua Tipe">Semua Tipe Kerja</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>

                {/* Sorting AI */}
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 focus:outline-none focus:border-blue-500"
                >
                  <option value="Rekomendasi AI">Urutkan: Rekomendasi AI</option>
                  <option value="Terbaru">Urutkan: Paling Baru</option>
                </select>
              </div>
            </div>

            {/* List Lowongan */}
            <div className="space-y-4">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-blue-300 transition duration-300 group flex flex-col md:flex-row gap-6 relative">
                  
                  {/* Badge AI Match Score */}
                  <div className="absolute top-5 right-5 md:static md:shrink-0 flex flex-col items-center justify-center md:w-24 md:h-24 md:bg-slate-50 md:rounded-xl md:border md:border-slate-100">
                    <p className="hidden md:block text-[10px] font-bold text-slate-400 uppercase mb-1">Kecocokan Profil</p>
                    <div className="flex items-center gap-1.5 md:flex-col">
                      <span className={`text-sm md:text-2xl font-black ${job.matchScore >= 80 ? 'text-emerald-500' : job.matchScore >= 60 ? 'text-amber-500' : 'text-rose-500'}`}>
                        {job.matchScore}%
                      </span>
                      {job.matchScore >= 80 && (
                        <i className="fas fa-check-circle text-emerald-500 text-xs md:text-base md:mt-1"></i>
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      {/* Company Logo/Icon */}
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border flex items-center justify-center shrink-0 ${job.bgLogo}`}>
                        <i className={`${job.logo} text-xl sm:text-2xl`}></i>
                      </div>
                      
                      {/* Job Info */}
                      <div>
                        {/* Judul dibuat bisa diklik untuk membuka modal */}
                        <button onClick={() => setSelectedJob(job)} className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-blue-600 transition inline-block mb-1 text-left">
                          {job.title}
                        </button>
                        <p className="text-sm font-medium text-slate-600 mb-3">{job.company}</p>
                        
                        {/* Detail Tags */}
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs font-medium text-slate-500 mb-4">
                          <span className="flex items-center"><i className="fas fa-map-marker-alt mr-1.5 text-slate-400"></i> {job.location}</span>
                          <span className="flex items-center"><i className="fas fa-building mr-1.5 text-slate-400"></i> {job.workplace}</span>
                          <span className="flex items-center"><i className="fas fa-briefcase mr-1.5 text-slate-400"></i> {job.type}</span>
                          <span className="flex items-center"><i className="fas fa-money-bill-wave mr-1.5 text-slate-400"></i> {job.salary}</span>
                        </div>

                        {/* Required Skills */}
                        <div className="flex flex-wrap gap-1.5">
                          {job.skills.map(skill => (
                            <span key={skill} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-md text-[11px] font-semibold">
                              {skill}
                            </span>
                          ))}
                          {job.matchScore < 80 && (
                            <span className="px-2.5 py-1 bg-rose-50 border border-rose-200 text-rose-600 rounded-md text-[11px] font-bold flex items-center cursor-help" title="Ada gap pada skill Anda">
                              <i className="fas fa-exclamation-triangle mr-1"></i> Gap Terdeteksi
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Actions (Terdapat penambahan tombol Detail) */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0 gap-3">
                    <span className="text-xs text-slate-400 font-medium">{job.postedAt}</span>
                    <div className="flex gap-2">
                      <button className="w-10 h-10 rounded-lg border border-slate-300 text-slate-400 hover:text-blue-600 hover:border-blue-300 hover:bg-blue-50 transition flex items-center justify-center bg-white shadow-sm">
                        <i className="far fa-bookmark"></i>
                      </button>
                      
                      {/* TOMBOL BARU: Detail */}
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="px-4 h-10 bg-white border border-slate-300 text-slate-700 text-sm font-bold rounded-lg hover:bg-slate-50 transition shadow-sm flex items-center justify-center"
                      >
                        Detail
                      </button>

                      {/* TOMBOL LAMAR */}
                      <Link to="/upload" className="px-6 h-10 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-700 transition shadow-sm flex items-center justify-center">
                        Lamar
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
                  <p className="text-sm max-w-sm mx-auto">Coba ubah kata kunci, lokasi, atau tipe pekerjaan untuk melihat hasil lainnya.</p>
                  <button 
                    onClick={() => {setSearchQuery(''); setLocationFilter('Semua Lokasi'); setTypeFilter('Semua Tipe');}}
                    className="mt-6 px-5 py-2 bg-white border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition shadow-sm"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="mt-8 flex justify-center">
                <button className="px-6 py-2.5 bg-white border border-slate-300 text-slate-600 font-bold rounded-full text-sm hover:bg-slate-50 transition shadow-sm">
                  Muat Lebih Banyak
                </button>
              </div>
            )}

          </div>
        </div>

        {/* MODAL DETAIL LOWONGAN */}
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
                      <div className="bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <p className="text-[10px] text-slate-400 font-bold uppercase mb-1">Gaji</p>
                        <p className="font-semibold text-emerald-600 truncate">{selectedJob.salary}</p>
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
                      <h4 className="text-base font-bold text-slate-900 mb-3">Syarat Keahlian (Prioritas)</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedJob.skills.map((skill) => (
                          <span key={skill} className="px-3 py-1.5 bg-blue-50 text-blue-700 border border-blue-100 rounded-lg text-sm font-semibold shadow-sm">
                            <i className="fas fa-check-circle text-blue-400 mr-1.5"></i> {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Bagian Kanan: Rekomendasi AI & Status */}
                  <div className="md:w-1/3 space-y-4">
                    <div className={`p-5 rounded-2xl border ${selectedJob.matchScore >= 80 ? 'bg-emerald-50 border-emerald-200' : selectedJob.matchScore >= 60 ? 'bg-amber-50 border-amber-200' : 'bg-rose-50 border-rose-200'}`}>
                      <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-slate-500 flex items-center">
                        <i className="fas fa-robot mr-2"></i> Analisis AI
                      </h4>
                      <div className="flex items-end gap-2 mb-2">
                        <span className={`text-4xl font-black ${selectedJob.matchScore >= 80 ? 'text-emerald-600' : selectedJob.matchScore >= 60 ? 'text-amber-600' : 'text-rose-600'}`}>
                          {selectedJob.matchScore}%
                        </span>
                        <span className="text-sm font-bold text-slate-500 mb-1">Kecocokan Profil</span>
                      </div>
                      <p className={`text-xs mt-2 ${selectedJob.matchScore >= 80 ? 'text-emerald-700' : selectedJob.matchScore >= 60 ? 'text-amber-700' : 'text-rose-700'}`}>
                        {selectedJob.matchScore >= 80 
                          ? "Sangat Direkomendasikan! Skill Anda sangat relevan dengan lowongan ini." 
                          : selectedJob.matchScore >= 60 
                          ? "Anda memenuhi beberapa kriteria. Tingkatkan peluang dengan mempelajari skill yang kurang." 
                          : "Terdapat gap skill yang signifikan berdasarkan profil Anda saat ini."}
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
                      <p className="text-xs font-semibold text-slate-500 mb-1">Diposting Pada</p>
                      <p className="text-sm font-bold text-slate-800">{selectedJob.postedAt}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 shrink-0 flex justify-between items-center">
                <button className="w-10 h-10 rounded-xl border border-slate-300 text-slate-400 hover:text-rose-500 hover:border-rose-300 hover:bg-rose-50 transition flex items-center justify-center bg-white shadow-sm" title="Simpan Lowongan">
                  <i className="far fa-heart text-lg"></i>
                </button>
                
                <div className="flex space-x-3 w-full sm:w-auto ml-3">
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 border border-slate-300 text-slate-700 rounded-xl text-sm font-bold hover:bg-white transition shadow-sm text-center"
                  >
                    Tutup
                  </button>
                  <Link to="/upload" className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 text-white border border-blue-700 rounded-xl text-sm font-bold hover:bg-blue-700 transition shadow-sm text-center flex items-center justify-center">
                    Lamar Sekarang <i className="fas fa-arrow-right ml-2"></i>
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

export default CariLowongan;