import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';

const PelatihanSaya = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Dummy Data: Rekomendasi berdasarkan AI Scan (Gap)
  const recommendedCourses = [
    {
      id: 1,
      title: 'Menjadi Front-End Web Developer Expert',
      provider: 'dicoding',
      targetSkill: 'Next.js',
      reason: 'Sering dicari di lowongan Frontend',
      duration: '45 Jam',
      level: 'Menengah',
      logoBg: 'bg-slate-800 text-white',
      price: 'Rp 1.200.000 (Subsidi 50%)'
    },
    {
      id: 2,
      title: 'TypeScript for Front-End Developers',
      provider: 'coursera',
      targetSkill: 'TypeScript',
      reason: 'Gap terdeteksi pada CV Anda',
      duration: '12 Jam',
      level: 'Pemula',
      logoBg: 'bg-[#0056D2] text-white',
      price: 'Gratis via SkillSync'
    }
  ];

  // Dummy Data: Kursus yang sedang diambil
  const activeCourses = [
    {
      id: 1,
      title: 'Belajar Dasar Pemrograman Web',
      provider: 'dicoding',
      progress: 65,
      lastAccessed: '2 hari yang lalu',
      logoBg: 'bg-slate-800 text-white'
    }
  ];

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      
      {/* Sidebar B2C */}
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
              <span className="text-slate-900 font-bold">Ruang Belajar</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Pelatihan Saya</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1.5 bg-amber-50 text-amber-700 rounded-lg text-xs font-bold border border-amber-200">
              <i className="fas fa-fire text-amber-500"></i>
              <span>3 Hari Runtun</span>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="max-w-5xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Tingkatkan Nilai Jual Anda</h1>
              <p className="text-slate-500 text-sm sm:text-base">Selesaikan pelatihan rekomendasi AI ini untuk menaikkan <span className="font-bold text-blue-600">Match Score</span> Anda di mata HRD.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Kolom Kiri: Active Courses & Sertifikat */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Active Courses */}
                <div>
                  <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <i className="fas fa-play-circle text-blue-600 mr-2"></i> Sedang Dipelajari
                  </h2>
                  
                  <div className="space-y-4">
                    {activeCourses.map(course => (
                      <div key={course.id} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition">
                        <div className="flex flex-col sm:flex-row gap-4">
                          <div className={`w-16 h-16 rounded-xl flex items-center justify-center shrink-0 ${course.logoBg} font-bold text-xs`}>
                            {course.provider}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-slate-900 mb-1">{course.title}</h3>
                            <p className="text-xs text-slate-500 mb-4"><i className="far fa-clock mr-1"></i> Terakhir diakses: {course.lastAccessed}</p>
                            
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold text-blue-600">Progres: {course.progress}%</span>
                              <span className="text-xs font-medium text-slate-500">Estimasi sisa: 5 Jam</span>
                            </div>
                            <div className="w-full bg-slate-100 rounded-full h-2 mb-4">
                              <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${course.progress}%` }}></div>
                            </div>
                            
                            <div className="flex justify-end">
                              <button className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-lg hover:bg-blue-600 transition shadow-sm">
                                Lanjutkan Belajar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sertifikat & Achievement */}
                <div>
                  <h2 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                    <i className="fas fa-award text-emerald-500 mr-2"></i> Sertifikat Tersimpan
                  </h2>
                  <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-8 text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm border border-slate-100">
                      <i className="fas fa-certificate text-2xl text-slate-300"></i>
                    </div>
                    <p className="font-bold text-slate-700">Belum ada sertifikat</p>
                    <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">Sertifikat yang Anda dapatkan dari mitra akan otomatis muncul di sini dan ditambahkan ke CV SkillSync Anda.</p>
                  </div>
                </div>

              </div>

              {/* Kolom Kanan: Rekomendasi AI (Targeting Gaps) */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-slate-800 text-lg">Rekomendasi AI</h2>
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                    </span>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Solusi untuk menutupi celah <span className="font-bold text-rose-500">TypeScript</span> dan <span className="font-bold text-rose-500">Next.js</span> pada profil Anda.</p>

                  <div className="space-y-4">
                    {recommendedCourses.map(course => (
                      <div key={course.id} className="border border-slate-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition bg-slate-50/50 group cursor-pointer">
                        <div className="flex justify-between items-start mb-3">
                          <div className={`px-2 py-1 rounded text-[9px] font-bold uppercase tracking-wider ${course.logoBg}`}>
                            {course.provider}
                          </div>
                          <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-1 rounded border border-rose-100 flex items-center">
                            <i className="fas fa-crosshairs mr-1"></i> Target: {course.targetSkill}
                          </span>
                        </div>
                        
                        <h3 className="font-bold text-slate-800 text-sm mb-1.5 group-hover:text-blue-600 transition leading-tight">{course.title}</h3>
                        <p className="text-[11px] text-slate-500 mb-3"><i className="fas fa-info-circle mr-1"></i>{course.reason}</p>
                        
                        <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-slate-400">
                          <span className="flex items-center"><i className="fas fa-clock mr-1"></i>{course.duration}</span>
                          <span className="flex items-center"><i className="fas fa-signal mr-1"></i>{course.level}</span>
                        </div>

                        <div className="pt-3 border-t border-slate-200/60 flex flex-col gap-2">
                          <span className="text-[11px] font-black text-emerald-600">{course.price}</span>
                          <button className="w-full py-2 bg-blue-50 text-blue-600 border border-blue-200 text-xs font-bold rounded-lg group-hover:bg-blue-600 group-hover:text-white transition">
                            Ambil Kelas
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-100 flex items-start gap-2">
                    <i className="fas fa-lightbulb text-blue-500 mt-0.5"></i>
                    <p className="text-[10px] text-blue-800 font-medium">Lulusan kelas Dicoding memiliki peluang 3x lebih besar untuk dipanggil wawancara oleh PT. Inovasi Digital.</p>
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

export default PelatihanSaya;