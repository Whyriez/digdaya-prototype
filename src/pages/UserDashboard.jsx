import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';

const UserDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy Data Rekomendasi Lowongan (AI Matched)
  const recommendedJobs = [
    {
      id: 1,
      title: 'Frontend Web Developer',
      company: 'PT. Inovasi Digital (Dicoding)',
      location: 'Bandung / Remote',
      matchScore: 92,
      type: 'Full-time',
      logo: 'fas fa-laptop-code text-blue-500'
    },
    {
      id: 2,
      title: 'React & Go Software Engineer',
      company: 'TechNusa Solutions',
      location: 'Jakarta Selatan',
      matchScore: 85,
      type: 'Full-time',
      logo: 'fas fa-server text-indigo-500'
    },
    {
      id: 3,
      title: 'Mobile Developer (Android)',
      company: 'Gorontalo Tech Hub',
      location: 'Gorontalo',
      matchScore: 78,
      type: 'Contract',
      logo: 'fas fa-mobile-alt text-emerald-500'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      
      {/* Overlay Background untuk Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar B2C (Kandidat) */}
      <SidebarUser isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            <button className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">Beranda Saya</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Beranda</span>
          </div>
          <div className="flex items-center space-x-4">
            <button className="relative text-slate-400 hover:text-blue-600 transition">
              <i className="fas fa-bell text-lg"></i>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500 border-2 border-white"></span>
              </span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          {/* Welcome Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 sm:p-8 text-white shadow-lg mb-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
            <div className="relative z-10">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Halo, Nur Alim! 👋</h1>
              <p className="text-blue-100 max-w-xl text-sm sm:text-base">
                AI kami telah memindai profil Anda. Saat ini Anda memiliki skor rata-rata kecocokan <span className="font-bold text-white bg-white/20 px-2 py-0.5 rounded">68%</span> untuk posisi Frontend & Mobile Developer.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link to="/upload" className="px-5 py-2.5 bg-white text-blue-600 font-bold rounded-lg shadow-sm hover:bg-blue-50 transition text-sm text-center">
                  <i className="fas fa-sync-alt mr-2"></i> Perbarui CV Saya
                </Link>
                <Link to="/candidate" className="px-5 py-2.5 bg-blue-700/50 border border-blue-400/50 text-white font-bold rounded-lg hover:bg-blue-700/70 transition text-sm text-center">
                  Lihat Analisis Detail
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mr-3">
                <i className="fas fa-paper-plane"></i>
              </div>
              <div>
                <p className="text-xl font-black text-slate-800">3</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Lamaran Aktif</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mr-3">
                <i className="fas fa-bookmark"></i>
              </div>
              <div>
                <p className="text-xl font-black text-slate-800">12</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Disimpan</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mr-3">
                <i className="fas fa-eye"></i>
              </div>
              <div>
                <p className="text-xl font-black text-slate-800">8</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Dilihat HRD</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center">
              <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mr-3">
                <i className="fas fa-times-circle"></i>
              </div>
              <div>
                <p className="text-xl font-black text-slate-800">1</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Ditolak (Auto-Gap)</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Job Recommendations */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-lg font-bold text-slate-800">Rekomendasi AI Untuk Anda</h2>
                <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-800">Lihat Semua</a>
              </div>

              {recommendedJobs.map(job => (
                <div key={job.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition group cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 mr-4">
                      <i className={`${job.logo} text-xl`}></i>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-blue-600 transition">{job.title}</h3>
                      <p className="text-sm text-slate-500">{job.company}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded"><i className="fas fa-map-marker-alt mr-1"></i>{job.location}</span>
                        <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded"><i className="fas fa-briefcase mr-1"></i>{job.type}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 border-slate-100 pt-3 sm:pt-0 shrink-0">
                    <div className="text-right">
                      <p className="text-[10px] font-bold text-slate-400 uppercase">Match Score</p>
                      <p className={`text-lg font-black ${job.matchScore >= 90 ? 'text-emerald-500' : job.matchScore >= 80 ? 'text-blue-500' : 'text-amber-500'}`}>
                        {job.matchScore}%
                      </p>
                    </div>
                    <button className="sm:mt-2 px-4 py-1.5 bg-blue-50 text-blue-600 font-bold text-xs rounded hover:bg-blue-100 transition">
                      Lamar Cepat
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Upskilling & Notifications */}
            <div className="space-y-6">
              
              {/* Upskilling Card */}
              <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="p-4 bg-gradient-to-r from-slate-800 to-slate-900 text-white flex justify-between items-center">
                  <h3 className="font-bold text-sm"><i className="fas fa-rocket text-amber-400 mr-2"></i>Tingkatkan Skill (Gap)</h3>
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-xs text-slate-500">Berdasarkan hasil analisis CV terakhir, Anda disarankan menguasai skill berikut untuk meningkatkan Match Score:</p>
                  
                  <div className="border border-slate-100 rounded-lg p-3 hover:border-blue-300 transition cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-rose-50 text-rose-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-rose-100">Missing: TypeScript</span>
                      <span className="text-[9px] font-bold bg-slate-800 text-white px-1.5 py-0.5 rounded">dicoding</span>
                    </div>
                    <p className="text-xs font-bold text-slate-800 mt-1">Belajar Dasar TypeScript</p>
                  </div>

                  <div className="border border-slate-100 rounded-lg p-3 hover:border-blue-300 transition cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <span className="bg-rose-50 text-rose-600 text-[9px] font-bold px-1.5 py-0.5 rounded border border-rose-100">Missing: Docker</span>
                      <span className="text-[9px] font-bold bg-[#0056D2] text-white px-1.5 py-0.5 rounded">coursera</span>
                    </div>
                    <p className="text-xs font-bold text-slate-800 mt-1">Docker for Developers</p>
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

export default UserDashboard;