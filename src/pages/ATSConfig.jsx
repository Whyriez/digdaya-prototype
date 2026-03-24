import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const ATSConfig = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [minScore, setMinScore] = useState(80);
  const [showApiKey, setShowApiKey] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Simulasi tombol simpan
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      alert('Konfigurasi berhasil disimpan!');
    }, 1000);
  };

  return (
    <div className="bg-slate-50 text-slate-800 flex h-screen overflow-hidden font-sans relative">
      
      {/* Overlay Background untuk Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar B2B */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 shadow-2xl lg:shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}>
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center hover:opacity-80 transition">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm shadow-blue-200">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">SkillSync <span className="text-blue-600">HR</span></span>
          </Link>
          <button className="lg:hidden text-slate-400 hover:text-rose-500 transition text-lg" onClick={() => setIsSidebarOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>

        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            <button className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="hover:text-blue-600 transition cursor-pointer">Pengaturan</span>
              <i className="fas fa-chevron-right mx-2 text-[10px] text-slate-300"></i>
              <span className="text-slate-900 font-bold">Konfigurasi ATS & API</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Konfigurasi ATS</span>
          </div>
          
          <button 
            onClick={handleSave}
            disabled={isSaving}
            className={`px-4 py-2 text-white rounded-lg text-sm font-bold shadow-sm transition flex items-center ${isSaving ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700 border border-blue-700'}`}
          >
            {isSaving ? <><i className="fas fa-circle-notch fa-spin mr-2"></i>Menyimpan...</> : <><i className="fas fa-save mr-2"></i>Simpan</>}
          </button>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="max-w-4xl mx-auto space-y-6">
            
            {/* Section 1: Algoritma AI (ATS Strictness) */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <i className="fas fa-sliders-h text-blue-600 mr-2"></i> Pengaturan Algoritma AI (Filtering)
                </h2>
              </div>
              <div className="p-6 space-y-6">
                
                {/* Slider Score */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-slate-700">Batas Minimum Skor Kesesuaian (Cosine Similarity)</label>
                    <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md font-bold text-sm border border-blue-100">{minScore}%</span>
                  </div>
                  <p className="text-xs text-slate-500 mb-4">Kandidat dengan skor di bawah batas ini akan otomatis dikategorikan sebagai "Tidak Disarankan".</p>
                  <input 
                    type="range" 
                    min="50" 
                    max="100" 
                    value={minScore} 
                    onChange={(e) => setMinScore(e.target.value)}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-400 mt-2">
                    <span>Lebih Longgar (50%)</span>
                    <span>Sangat Ketat (100%)</span>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Auto Reject Toggle */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-700">Auto-Reject & Berikan Feedback (Skill Gap)</h4>
                    <p className="text-xs text-slate-500 mt-1">Sistem akan otomatis mengirimkan email penolakan beserta rekomendasi pelatihan (upskilling) kepada kandidat yang tidak lolos.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                  </label>
                </div>

              </div>
            </div>

            {/* Section 2: Integrasi API */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <i className="fas fa-plug text-indigo-600 mr-2"></i> Integrasi API & Webhook
                </h2>
              </div>
              <div className="p-6 space-y-6">
                
                {/* API Key */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">SkillSync Secret API Key</label>
                  <div className="flex">
                    <div className="relative flex-1">
                      <input 
                        type={showApiKey ? "text" : "password"} 
                        value={import.meta.env.VITE_API_KEY || "********"}
                        readOnly
                        className="w-full pl-4 pr-10 py-2 border border-slate-300 rounded-l-lg bg-slate-50 text-slate-600 font-mono text-sm focus:outline-none"
                      />
                      <button 
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-slate-600"
                      >
                        <i className={`fas ${showApiKey ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    <button className="px-4 py-2 bg-slate-800 text-white text-sm font-bold rounded-r-lg hover:bg-slate-700 transition">
                      Copy
                    </button>
                  </div>
                  <p className="text-[11px] text-amber-600 mt-2 flex items-center">
                    <i className="fas fa-exclamation-triangle mr-1"></i> Jangan bagikan API Key ini kepada publik.
                  </p>
                </div>

                {/* Webhook URL */}
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Endpoint Webhook (Push Data ke ATS Anda)</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="https://api.perusahaananda.com/webhook/skillsync"
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <p className="text-xs text-slate-500 mt-2">Sistem akan mengirimkan data kandidat (JSON) ke URL ini setiap kali ada pelamar yang lolos screening.</p>
                </div>

              </div>
            </div>

            {/* Section 3: 1-Click Install Partners */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h2 className="font-bold text-slate-800 flex items-center">
                  <i className="fas fa-puzzle-piece text-emerald-600 mr-2"></i> Integrasi Partner ATS (1-Click Install)
                </h2>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-500 mb-4">Hubungkan SkillSync AI dengan sistem HRIS / ATS yang sudah Anda gunakan saat ini.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Partner 1 */}
                  <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center hover:border-emerald-400 transition">
                    <div className="h-10 mb-3 flex items-center">
                      <span className="text-xl font-black text-slate-800">Greenhouse</span>
                    </div>
                    <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full mb-3 border border-emerald-200">
                      <i className="fas fa-check-circle mr-1"></i> Terhubung
                    </span>
                    <button className="w-full py-1.5 text-xs font-bold text-slate-500 border border-slate-200 rounded hover:bg-slate-50">Kelola</button>
                  </div>

                  {/* Partner 2 */}
                  <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center hover:border-blue-400 transition">
                    <div className="h-10 mb-3 flex items-center">
                      <span className="text-xl font-black text-[#005CB9]">workday.</span>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full mb-3">
                      Belum Terhubung
                    </span>
                    <button className="w-full py-1.5 text-xs font-bold text-blue-600 border border-blue-200 bg-blue-50 rounded hover:bg-blue-100">Hubungkan</button>
                  </div>

                  {/* Partner 3 */}
                  <div className="border border-slate-200 rounded-lg p-4 flex flex-col items-center text-center hover:border-blue-400 transition">
                    <div className="h-10 mb-3 flex items-center">
                      <span className="text-xl font-black text-slate-800">Kalibrr <span className="text-blue-500">Enterprise</span></span>
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full mb-3">
                      Belum Terhubung
                    </span>
                    <button className="w-full py-1.5 text-xs font-bold text-blue-600 border border-blue-200 bg-blue-50 rounded hover:bg-blue-100">Hubungkan</button>
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

export default ATSConfig;