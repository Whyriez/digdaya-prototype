import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CariLowonganPublic = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('Semua Lokasi');
  const [typeFilter, setTypeFilter] = useState('Semua Tipe');

  // Dummy Data Lowongan Pekerjaan
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
      bgLogo: 'bg-blue-50 border-blue-100'
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
      bgLogo: 'bg-emerald-50 border-emerald-100'
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
      bgLogo: 'bg-indigo-50 border-indigo-100'
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
        
        <div className="flex-1 overflow-y-auto">
          
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
                <div key={job.id} className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 hover:shadow-md hover:border-blue-300 transition duration-300 flex flex-col md:flex-row gap-6 relative">
                  
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
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
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

                  {/* Actions mengarah ke Login */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center border-t md:border-t-0 border-slate-100 pt-4 md:pt-0 shrink-0 gap-3">
                    <span className="text-xs text-slate-400 font-medium">{job.postedAt}</span>
                    <Link to="/login" className="px-6 h-10 bg-slate-900 text-white text-sm font-bold rounded-lg hover:bg-blue-600 transition shadow-sm flex items-center justify-center">
                      Lamar Sekarang
                    </Link>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CariLowonganPublic;