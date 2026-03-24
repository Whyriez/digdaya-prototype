import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AIParsing = () => {
  // State untuk simulasi proses AI
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(1);

  // Efek untuk menjalankan animasi loading secara otomatis
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          return 100;
        }
        const newProgress = oldProgress + 1;
        
        // Mengubah status checklist berdasarkan progress
        if (newProgress < 30) setStep(1);
        else if (newProgress < 70) setStep(2);
        else if (newProgress < 100) setStep(3);
        else setStep(4); // Selesai

        return newProgress;
      });
    }, 60); // Kecepatan simulasi loading (semakin kecil semakin cepat)

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen flex flex-col relative">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">SkillSync AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-slate-500 hidden sm:block">Bantuan</span>
            <div className="h-8 w-px bg-slate-200"></div>
            <div className="flex items-center space-x-2">
              <img src="https://ui-avatars.com/api/?name=Nur+Alim&background=eff6ff&color=2563eb" alt="Profile" className="w-8 h-8 rounded-full border border-slate-200" />
              <span className="text-sm font-semibold text-slate-700">Nur Alim</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 relative">
        
        <div className="max-w-5xl w-full mb-8">
          <Link to="/" className="text-sm text-blue-600 hover:text-blue-800 font-medium mb-3 inline-flex items-center transition">
            <i className="fas fa-arrow-left mr-2"></i> Kembali ke Beranda
          </Link>
          <h1 className="text-3xl font-bold text-slate-900 mt-2">Analisis Kecocokan Resume</h1>
          <p className="text-slate-500 mt-2">Unggah CV Anda untuk membandingkannya dengan kebutuhan industri secara otomatis.</p>
        </div>

        {/* Split Layout Container */}
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
          
          {/* LEFT COLUMN: Target & Upload Area */}
          <div className="space-y-6">
            
            {/* Target Job Card */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Target Posisi</h3>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-50 rounded-xl border border-blue-100 flex items-center justify-center text-blue-600 mr-4">
                  <i className="fas fa-code text-xl"></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Frontend Web Developer</h4>
                  <p className="text-xs text-slate-500">PT. Inovasi Digital (Dicoding)</p>
                </div>
              </div>
            </div>

            {/* Drag & Drop Upload Area */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-sm font-bold text-slate-800 mb-4">Dokumen CV (PDF/Word)</h3>
              
              <div className="relative bg-blue-50/50 border-2 border-dashed border-blue-300 rounded-xl p-10 flex flex-col items-center text-center overflow-hidden transition-all group">
                
                {/* Scanner Line Animation (Hanya jalan jika belum 100%) */}
                {progress < 100 && (
                  <>
                    <div className="upload-scanner"></div>
                    <div className="absolute inset-0 bg-blue-500/5 animate-pulse mix-blend-multiply"></div>
                  </>
                )}

                <div className="relative w-16 h-16 mb-4">
                  <i className="fas fa-file-pdf text-6xl text-red-500 drop-shadow-md relative z-10"></i>
                  {progress === 100 && (
                    <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center z-20 shadow-sm">
                      <i className="fas fa-check text-white text-[10px]"></i>
                    </div>
                  )}
                </div>
                
                <p className="text-sm font-bold text-blue-900 mb-1">CV_NurAlim_Tech.pdf</p>
                <p className="text-xs font-medium text-blue-600/80 mb-5">Ukuran: 450 KB</p>
                
                <div className={`inline-flex items-center px-3 py-1.5 bg-white border rounded-full shadow-sm ${progress === 100 ? 'border-emerald-200' : 'border-blue-100'}`}>
                  {progress < 100 ? (
                    <i className="fas fa-circle-notch fa-spin text-blue-600 mr-2 text-xs"></i>
                  ) : (
                    <i className="fas fa-check text-emerald-600 mr-2 text-xs"></i>
                  )}
                  <span className={`text-xs font-bold ${progress === 100 ? 'text-emerald-700' : 'text-slate-600'}`}>
                    {progress < 100 ? 'Sedang diproses AI...' : 'Proses Selesai!'}
                  </span>
                </div>

              </div>
              
              <div className="mt-4 flex justify-between items-center px-1">
                <span className="text-xs text-slate-400 font-medium">Maksimal file 5MB.</span>
                <button className="text-xs font-bold text-rose-500 hover:text-rose-700 transition">Batalkan Unggahan</button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: AI Processing & Checklist */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8 flex flex-col justify-between">
            
            <div>
              <div className="flex items-center mb-8 pb-6 border-b border-slate-100">
                <div className="relative w-12 h-12 mr-5">
                  {progress < 100 && <div className="absolute inset-0 bg-blue-400 rounded-full pulse-ring"></div>}
                  <div className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${progress === 100 ? 'bg-emerald-500 shadow-emerald-200' : 'bg-blue-600 shadow-blue-200'}`}>
                    <i className={`fas ${progress === 100 ? 'fa-check' : 'fa-magic'} text-white text-lg`}></i>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    {progress === 100 ? 'Analisis Selesai' : 'Menganalisis Profil...'}
                  </h2>
                  <p className="text-sm text-slate-500 font-medium mt-0.5">
                    {progress === 100 ? 'Data siap untuk ditinjau.' : 'Mengekstrak keterampilan dan pengalaman kerja.'}
                  </p>
                </div>
              </div>

              {/* Steps Checklist */}
              <div className="space-y-6">
                
                {/* Step 1: Ekstraksi Dokumen */}
                <div className="flex items-start">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 border ${step >= 1 ? 'bg-emerald-100 border-emerald-200' : 'bg-slate-50 border-slate-200'}`}>
                    {step > 1 || progress === 100 ? <i className="fas fa-check text-emerald-600 text-[10px]"></i> : <i className="fas fa-circle-notch fa-spin text-blue-600 text-[10px]"></i>}
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-bold ${step >= 1 ? 'text-slate-800' : 'text-slate-400'}`}>Struktur Dokumen Terbaca</h4>
                    <p className="text-xs text-slate-500 mt-1">Format PDF valid. Teks berhasil diekstrak (Parsing).</p>
                  </div>
                </div>

                {/* Step 2: NLP */}
                <div className={`flex items-start relative ${step < 2 ? 'opacity-40' : ''}`}>
                  <div className={`absolute left-3 -top-5 bottom-8 w-px -z-10 ${step >= 2 ? 'bg-emerald-200' : 'bg-slate-200'}`}></div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 border ${step > 2 || progress === 100 ? 'bg-emerald-100 border-emerald-200' : step === 2 ? 'bg-blue-100 border-blue-200' : 'bg-slate-50 border-slate-200 border-2'}`}>
                    {step > 2 || progress === 100 ? <i className="fas fa-check text-emerald-600 text-[10px]"></i> : step === 2 ? <i className="fas fa-circle-notch fa-spin text-blue-600 text-[10px]"></i> : null}
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-bold ${step === 2 ? 'text-blue-700' : 'text-slate-800'}`}>Deteksi Keterampilan (NLP)</h4>
                    <p className="text-xs text-slate-500 mt-1">Mengidentifikasi React, JavaScript, HTML, CSS...</p>
                  </div>
                </div>

                {/* Step 3: Cosine Similarity */}
                <div className={`flex items-start relative ${step < 3 ? 'opacity-40' : ''}`}>
                  <div className={`absolute left-3 -top-5 bottom-8 w-px -z-10 ${step >= 3 ? 'bg-emerald-200' : 'bg-slate-200'}`}></div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center mt-0.5 shrink-0 border ${progress === 100 ? 'bg-emerald-100 border-emerald-200' : step === 3 ? 'bg-blue-100 border-blue-200' : 'bg-slate-50 border-slate-200 border-2'}`}>
                    {progress === 100 ? <i className="fas fa-check text-emerald-600 text-[10px]"></i> : step === 3 ? <i className="fas fa-circle-notch fa-spin text-blue-600 text-[10px]"></i> : null}
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-sm font-bold ${step === 3 && progress < 100 ? 'text-blue-700' : 'text-slate-800'}`}>Kalkulasi Cosine Similarity</h4>
                    <p className="text-xs text-slate-500 mt-1">Menghitung skor kecocokan dengan posisi Frontend Developer.</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Footer Progress & CTA */}
            <div className="mt-10 pt-6 border-t border-slate-100">
              <div className="flex justify-between items-end mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Proses Selesai</span>
                <span className={`text-lg font-black ${progress === 100 ? 'text-emerald-500' : 'text-blue-600'}`}>{progress}%</span>
              </div>
              
              <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden mb-6">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ease-out ${progress === 100 ? 'bg-emerald-500' : 'bg-blue-600 progress-bar-stripe'}`} 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              
              {/* Tombol aktif setelah 100% dan menggunakan React Router Link */}
              {progress === 100 ? (
                <Link to="/candidate" className="w-full py-3 px-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition flex items-center justify-center animate-bounce">
                  Lihat Hasil Analisis <i className="fas fa-arrow-right ml-2 text-xs"></i>
                </Link>
              ) : (
                <button disabled className="w-full py-3 px-4 bg-slate-100 text-slate-400 font-bold rounded-xl cursor-not-allowed transition flex items-center justify-center">
                  Memproses Data <i className="fas fa-lock ml-2 text-xs"></i>
                </button>
              )}
              
              <p className="text-center text-[10px] text-slate-400 mt-3"><i className="fas fa-shield-alt mr-1"></i> Data Anda dienkripsi dan diproses secara aman.</p>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default AIParsing;