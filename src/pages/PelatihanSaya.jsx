import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SidebarUser from '../components/SidebarUser';

const PelatihanSaya = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [uploadedCerts, setUploadedCerts] = useState([]);
  const [isUploading, setIsUploading] = useState(false);

  // Fungsi simulasi upload sertifikat
  const handleUpload = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // Simulasi delay upload
    setTimeout(() => {
      setUploadedCerts([
        ...uploadedCerts, 
        { id: Date.now(), name: 'Sertifikat_NextJS_Dicoding.pdf', date: 'Hari ini' }
      ]);
      setIsUploading(false);
    }, 1500);
  };

  // Data Rekomendasi Dikelompokkan Berdasarkan Lamaran (Job)
  const recommendationGroups = [
    {
      id: 'job-1',
      jobTitle: 'Frontend Web Developer',
      company: 'PT. Inovasi Digital (Dicoding)',
      matchScore: 68,
      courses: [
        {
          id: 1,
          title: 'Menjadi Front-End Web Developer Expert',
          provider: 'dicoding',
          targetSkill: 'Next.js',
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
          duration: '12 Jam',
          level: 'Pemula',
          logoBg: 'bg-[#0056D2] text-white',
          price: 'Gratis via SkillSync'
        }
      ]
    },
    {
      id: 'job-2',
      jobTitle: 'Backend Developer (Go)',
      company: 'Fintech Syariah',
      matchScore: 78,
      courses: [
        {
          id: 3,
          title: 'Docker for Developers',
          provider: 'udemy',
          targetSkill: 'Docker',
          duration: '8 Jam',
          level: 'Pemula',
          logoBg: 'bg-purple-600 text-white',
          price: 'Rp 150.000'
        }
      ]
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
              <span>Target: 100% Match</span>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="max-w-6xl mx-auto">
            
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Tingkatkan Nilai Jual CV Anda</h1>
              <p className="text-slate-500 text-sm sm:text-base">AI merekomendasikan pelatihan spesifik berdasarkan <span className="font-bold text-rose-500">Skill Gap</span> dari lowongan yang Anda incar.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Kolom Kiri: Kategori Rekomendasi Berdasarkan Lamaran */}
              <div className="lg:col-span-2 space-y-8">
                
                {recommendationGroups.map((group) => (
                  <div key={group.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    {/* Header Grup Lamaran */}
                    <div className="bg-slate-50 border-b border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Rekomendasi Untuk Lamaran:</p>
                        <h2 className="text-base sm:text-lg font-bold text-slate-800">{group.jobTitle}</h2>
                        <p className="text-xs text-slate-500"><i className="fas fa-building mr-1"></i> {group.company}</p>
                      </div>
                      <div className="shrink-0 flex items-center bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm">
                        <span className="text-[10px] font-bold text-slate-400 mr-2 uppercase">Skor Saat Ini</span>
                        <span className={`text-sm font-black ${group.matchScore >= 80 ? 'text-emerald-500' : 'text-amber-500'}`}>{group.matchScore}%</span>
                      </div>
                    </div>

                    {/* Daftar Kelas untuk Lamaran Tersebut */}
                    <div className="p-5 space-y-4">
                      {group.courses.map(course => (
                        <div key={course.id} className="border border-slate-100 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition group/card cursor-pointer">
                          <div className="flex flex-col sm:flex-row gap-4">
                            
                            <div className={`w-14 h-14 rounded-lg flex items-center justify-center shrink-0 ${course.logoBg} font-bold text-[10px] uppercase tracking-wider`}>
                              {course.provider}
                            </div>
                            
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-1">
                                <h3 className="font-bold text-slate-900 text-sm group-hover/card:text-blue-600 transition">{course.title}</h3>
                                <span className="text-[9px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded border border-rose-100 whitespace-nowrap ml-2">
                                  Gap: {course.targetSkill}
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-4 mb-3 text-[11px] font-medium text-slate-500">
                                <span className="flex items-center"><i className="fas fa-clock mr-1.5 text-slate-400"></i>{course.duration}</span>
                                <span className="flex items-center"><i className="fas fa-signal mr-1.5 text-slate-400"></i>{course.level}</span>
                              </div>

                              <div className="flex items-center justify-between pt-3 border-t border-slate-50">
                                <span className="text-[11px] font-black text-emerald-600">{course.price}</span>
                                <button className="px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold rounded-lg hover:bg-blue-600 hover:text-white transition">
                                  Lihat Kelas
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

              </div>

              {/* Kolom Kanan: Upload Sertifikat & Achievement */}
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="font-bold text-slate-800 text-lg">Validasi Keahlian</h2>
                    <i className="fas fa-award text-emerald-500 text-xl"></i>
                  </div>
                  <p className="text-sm text-slate-500 mb-6">Sudah menyelesaikan pelatihan di atas? Unggah sertifikat Anda agar sistem memperbarui <span className="font-bold text-slate-700">AI Match Score</span> CV Anda.</p>

                  {/* Area Upload */}
                  <div className="mb-6">
                    <label className="relative flex flex-col items-center justify-center w-full h-32 border-2 border-slate-300 border-dashed rounded-xl cursor-pointer bg-slate-50 hover:bg-blue-50 hover:border-blue-300 transition group overflow-hidden">
                      {isUploading ? (
                        <div className="flex flex-col items-center">
                          <i className="fas fa-circle-notch fa-spin text-2xl text-blue-500 mb-2"></i>
                          <p className="text-xs font-bold text-slate-500">Memverifikasi Sertifikat...</p>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <i className="fas fa-cloud-upload-alt text-3xl text-slate-400 group-hover:text-blue-500 mb-2 transition"></i>
                          <p className="text-xs font-semibold text-slate-600"><span className="text-blue-600">Klik untuk unggah</span> atau drag and drop</p>
                          <p className="text-[10px] text-slate-400 mt-1">PDF, JPG, atau PNG (Maks. 2MB)</p>
                        </div>
                      )}
                      <input type="file" className="hidden" onChange={handleUpload} disabled={isUploading} />
                    </label>
                  </div>

                  {/* List Sertifikat Tersimpan */}
                  <div>
                    <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">Sertifikat Tersimpan</h3>
                    
                    {uploadedCerts.length === 0 ? (
                      <div className="text-center py-4 bg-slate-50 rounded-lg border border-slate-100">
                        <p className="text-xs font-medium text-slate-400">Belum ada sertifikat yang diunggah.</p>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        {uploadedCerts.map(cert => (
                          <div key={cert.id} className="flex items-center justify-between p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                            <div className="flex items-center overflow-hidden pr-2">
                              <i className="fas fa-file-alt text-emerald-500 mr-3 text-lg shrink-0"></i>
                              <div>
                                <p className="text-xs font-bold text-emerald-800 truncate">{cert.name}</p>
                                <p className="text-[9px] font-medium text-emerald-600 mt-0.5">Divalidasi: {cert.date}</p>
                              </div>
                            </div>
                            <button className="text-slate-400 hover:text-rose-500 transition shrink-0">
                              <i className="fas fa-trash-alt text-xs"></i>
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Efek Skor Naik (Muncul jika ada sertifikat) */}
                  {uploadedCerts.length > 0 && (
                    <div className="mt-6 p-4 bg-blue-600 rounded-xl text-white shadow-md shadow-blue-200 animate-pulse" style={{ animationIterationCount: 3 }}>
                      <p className="text-[10px] font-bold text-blue-200 uppercase tracking-wider mb-1"><i className="fas fa-level-up-alt mr-1"></i> Update Sistem</p>
                      <p className="text-sm font-bold">Skor CV Anda berhasil ditingkatkan!</p>
                    </div>
                  )}

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