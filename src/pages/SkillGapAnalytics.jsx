import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const SkillGapAnalytics = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative bg-slate-50">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 shrink-0 z-10">
          <div className="flex items-center">
            <button className="mr-4 lg:hidden text-slate-500 hover:text-blue-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">Laporan & Analitik</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Analitik Skill Gap</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 transition shadow-sm flex items-center">
              <i className="fas fa-download sm:mr-2 text-slate-400"></i> <span className="hidden sm:inline">Unduh PDF</span>
            </button>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Analitik Kesenjangan Kompetensi</h1>
              <p className="text-sm text-slate-500 mt-1">Pemetaan tren skill pelamar vs kebutuhan industri bulan ini.</p>
            </div>
            <select className="mt-4 sm:mt-0 px-4 py-2 bg-white border border-slate-300 rounded-lg text-sm font-semibold text-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Semua Divisi (Global)</option>
              <option>Divisi Teknologi (IT)</option>
              <option>Divisi Pemasaran</option>
            </select>
          </div>

          {/* Top KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-slate-400 uppercase">Total CV Dianalisis</p>
                <i className="fas fa-file-pdf text-slate-300"></i>
              </div>
              <p className="text-2xl font-black text-slate-800">1,248</p>
              <p className="text-xs font-semibold text-emerald-500 mt-2"><i className="fas fa-arrow-up mr-1"></i> 12% dari bulan lalu</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-slate-400 uppercase">Rata-rata Skor Match</p>
                <i className="fas fa-bullseye text-slate-300"></i>
              </div>
              <p className="text-2xl font-black text-blue-600">62%</p>
              <p className="text-xs font-semibold text-amber-500 mt-2"><i className="fas fa-arrow-down mr-1"></i> Turun 4% (Krisis Skill)</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-slate-400 uppercase">Skill Paling Langka</p>
                <i className="fas fa-exclamation-triangle text-slate-300"></i>
              </div>
              <p className="text-xl font-black text-rose-600 truncate">TypeScript / Next.js</p>
              <p className="text-xs font-medium text-slate-500 mt-2">Dibutuhkan oleh 80% loker</p>
            </div>
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs font-bold text-slate-400 uppercase">Rekomendasi Diambil</p>
                <i className="fas fa-graduation-cap text-slate-300"></i>
              </div>
              <p className="text-2xl font-black text-emerald-600">342</p>
              <p className="text-xs font-medium text-slate-500 mt-2">Kandidat melakukan Upskilling</p>
            </div>
          </div>

          {/* Charts Section (Simulated with Tailwind) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            
            {/* Chart 1: Keterampilan Terbanyak (Matched) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-slate-800 mb-6 flex items-center">
                <i className="fas fa-check-circle text-emerald-500 mr-2"></i> Skill Pelamar Paling Banyak
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>React.js</span>
                    <span>85% (1,060 Pelamar)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>HTML/CSS</span>
                    <span>92% (1,148 Pelamar)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>JavaScript (ES6)</span>
                    <span>78% (973 Pelamar)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>PHP / Laravel</span>
                    <span>65% (811 Pelamar)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-emerald-300 h-2 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Chart 2: Keterampilan Paling Kurang (Gap) */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <h2 className="font-bold text-slate-800 mb-6 flex items-center">
                <i className="fas fa-exclamation-circle text-rose-500 mr-2"></i> Celah Keterampilan (Skill Gap) Tertinggi
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>TypeScript</span>
                    <span className="text-rose-600">Gap 76% (Hanya 299 Punya)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-rose-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Next.js App Router</span>
                    <span className="text-rose-600">Gap 68% (Hanya 399 Punya)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-rose-400 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Cloud Deployment (AWS/GCP)</span>
                    <span className="text-rose-600">Gap 55% (Hanya 561 Punya)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-rose-400 h-2 rounded-full" style={{ width: '55%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1">
                    <span>Docker / Containerization</span>
                    <span className="text-rose-600">Gap 42% (Hanya 723 Punya)</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-rose-300 h-2 rounded-full" style={{ width: '42%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Actionable Insights / Rekomendasi HR */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
              <h2 className="font-bold text-slate-800 text-sm flex items-center">
                <i className="fas fa-lightbulb text-amber-400 mr-2 text-lg"></i> Insight & Tindakan Perusahaan
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[700px]">
                <thead>
                  <tr className="bg-white text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                    <th className="px-6 py-4">Isu Terdeteksi AI</th>
                    <th className="px-6 py-4">Dampak Perekrutan</th>
                    <th className="px-6 py-4 w-64">Rekomendasi Solusi Mitra</th>
                    <th className="px-6 py-4 text-center">Aksi (Blast Email)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800">Krisis Pelamar TypeScript</p>
                      <p className="text-xs text-slate-500 mt-1">76% pelamar Frontend gagal di tahap ini.</p>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-rose-600">
                      Waktu rekrutmen melambat 14 hari
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-blue-800 text-white text-[9px] font-bold rounded">dicoding</span>
                        <span className="text-xs font-medium text-slate-700">Course: Mastering TypeScript</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded font-bold hover:bg-blue-100 transition shadow-sm">
                        Kirim Saran ke 949 Pelamar
                      </button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition">
                    <td className="px-6 py-4">
                      <p className="font-bold text-slate-800">Kurangnya Skill Cloud (AWS)</p>
                      <p className="text-xs text-slate-500 mt-1">55% pelamar Backend belum menguasai Cloud.</p>
                    </td>
                    <td className="px-6 py-4 text-xs font-semibold text-amber-600">
                      Risiko onboarding yang lama
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <span className="px-2 py-1 bg-[#0056D2] text-white text-[9px] font-bold rounded">coursera</span>
                        <span className="text-xs font-medium text-slate-700">AWS Cloud Practitioner</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="text-xs px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 rounded font-bold hover:bg-blue-100 transition shadow-sm">
                        Kirim Saran ke 687 Pelamar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default SkillGapAnalytics;