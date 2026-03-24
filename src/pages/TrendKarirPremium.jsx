import React, { useState } from 'react';
import SidebarUser from '../components/SidebarUser';
import { Link } from 'react-router-dom';

const TrendKarirPremium = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Data Prediksi "Curi Start" (Full Unlocked Version)
  const curiStartOpportunities = [
    {
      id: 1,
      skill: 'Compose Multiplatform',
      role: 'Mobile Developer',
      salary: 'Rp 12.000.000 - Rp 22.000.000',
      companies: ['Gojek', 'Traveloka', 'Bank Jago'],
      competition: 'Rendah (Peluang Besar)',
      description: 'Banyak perusahaan mulai bermigrasi ke UI deklaratif lintas platform untuk menghemat cost development native.',
      icon: 'fas fa-mobile-alt',
      theme: 'blue',
      actionText: 'Mulai Pelatihan (Gratis Premium)'
    },
    {
      id: 2,
      skill: 'RAG & Integrasi LLM',
      role: 'AI / Backend Engineer',
      salary: 'Rp 18.000.000 - Rp 35.000.000',
      companies: ['Tiket.com', 'Kopi Kenangan', 'Telkomsel'],
      competition: 'Menengah',
      description: 'Perusahaan non-tech pun mulai membuat chatbot internal berbasis dokumen (RAG) untuk efisiensi operasional.',
      icon: 'fas fa-brain',
      theme: 'purple',
      actionText: 'Lihat 15 Lowongan Tersedia'
    },
    {
      id: 3,
      skill: 'FastAPI & Microservices',
      role: 'Backend Engineer',
      salary: 'Rp 15.000.000 - Rp 28.000.000',
      companies: ['OVO', 'Dana', 'Ajaib'],
      competition: 'Sedang Transisi',
      description: 'Transisi besar-besaran dari framework monolitik lama ke arsitektur microservices berbasis Python dan Golang.',
      icon: 'fas fa-server',
      theme: 'emerald',
      actionText: 'Lihat 24 Lowongan Tersedia'
    }
  ];

  // Data Top Skills di Pasaran VS Skill User
  const topMarketSkills = [
    { name: 'React / Next.js', demand: 98, userHas: true, color: 'bg-emerald-500' },
    { name: 'TypeScript', demand: 85, userHas: false, color: 'bg-rose-500' },
    { name: 'Docker / CI-CD', demand: 75, userHas: false, color: 'bg-rose-500' },
    { name: 'Tailwind CSS', demand: 70, userHas: true, color: 'bg-emerald-500' },
    { name: 'PostgreSQL', demand: 65, userHas: false, color: 'bg-rose-500' },
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
            <button className="mr-4 lg:hidden text-slate-500 hover:text-indigo-600 transition" onClick={() => setIsSidebarOpen(true)}>
              <i className="fas fa-bars text-xl"></i>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-slate-500">
              <span className="text-slate-900 font-bold">Market Intelligence</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Tren Karir</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 px-4 py-1.5 bg-indigo-50 border border-indigo-200 text-indigo-700 rounded-full text-xs font-bold shadow-sm">
              <i className="fas fa-check-circle text-emerald-500"></i>
              <span>Premium Aktif</span>
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar">
          
          {/* Hero Premium Section (Unlocked Style) */}
          <div className="relative bg-white px-4 sm:px-8 py-10 sm:py-14 overflow-hidden border-b border-slate-200">
            {/* Dekorasi Background Halus */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-indigo-50 to-transparent pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-md bg-indigo-100 text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <i className="fas fa-unlock-alt mr-2"></i> Akses Data Penuh
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
                  Market Insight: Kuartal Ini
                </h1>
                <p className="text-slate-500 text-sm sm:text-base max-w-2xl leading-relaxed">
                  Data analitik mendalam berdasarkan 10.000+ lowongan aktif bulan ini. Temukan proyeksi gaji riil, perusahaan yang sedang merekrut massal, dan gap skill Anda secara langsung.
                </p>
              </div>

              {/* Ringkasan Profil Singkat */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl shadow-xl w-full md:w-80 shrink-0 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-white/5 text-8xl">
                  <i className="fas fa-chart-pie"></i>
                </div>
                <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider mb-1">Status Portofolio Anda</p>
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-4xl font-black text-emerald-400">Top 15%</span>
                  <span className="text-sm font-medium text-slate-300 mb-1">di Market</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-1.5 mb-2">
                  <div className="bg-emerald-400 h-1.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
                <p className="text-[11px] text-slate-400">Tingkatkan <span className="text-white font-bold">TypeScript</span> untuk masuk ke Top 5%.</p>
              </div>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8 bg-slate-50">
            
            {/* Bagian Utama: Peluang Curi Start (Data Riil) */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 flex items-center">
                    <i className="fas fa-rocket text-indigo-600 mr-2"></i> Radar Peluang (Early Adopter)
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">Teknologi yang sedang diburu perusahaan tier-1 minggu ini.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {curiStartOpportunities.map((opp) => (
                  <div key={opp.id} className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:border-indigo-300 hover:shadow-lg transition-all flex flex-col">
                    
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-${opp.theme}-50 text-${opp.theme}-600 flex items-center justify-center text-xl`}>
                        <i className={opp.icon}></i>
                      </div>
                      <span className="inline-flex items-center px-2 py-1 rounded bg-slate-100 text-slate-600 text-[10px] font-bold">
                        <i className="fas fa-users mr-1"></i> {opp.competition}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{opp.skill}</h3>
                    <p className="text-xs font-semibold text-slate-500 mb-4">{opp.role}</p>
                    
                    <div className="bg-slate-50 rounded-xl p-4 border border-slate-100 mb-4">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Estimasi Gaji Pasaran</p>
                      <p className="text-sm font-bold text-emerald-600">{opp.salary}</p>
                    </div>

                    <div className="mb-6 flex-1">
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Hiring Sekarang:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {opp.companies.map((company, index) => (
                          <span key={index} className="px-2 py-1 bg-white border border-slate-200 rounded text-xs font-medium text-slate-700 shadow-sm">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Tombol Action Khas Unlocked */}
                    <button className="w-full py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-bold hover:bg-indigo-700 transition shadow-sm flex justify-center items-center">
                      {opp.actionText} <i className="fas fa-arrow-right ml-2"></i>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid Bawah: Bar Chart Terhadap Kondisi User & Fast Track */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Top Skills Chart vs Kondisi User */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">Top Skills vs Profil Anda</h3>
                    <p className="text-xs text-slate-500">Perbandingan demand pasar vs kemampuan CV Anda.</p>
                  </div>
                  <Link to="/pelatihan" className="text-xs font-bold text-indigo-600 hover:text-indigo-800">Tutup Gap Skill <i className="fas fa-chevron-right ml-1"></i></Link>
                </div>
                
                <div className="space-y-5">
                  {topMarketSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm font-bold text-slate-700 flex items-center">
                          {skill.name}
                          {skill.userHas ? (
                            <i className="fas fa-check-circle text-emerald-500 ml-2 text-xs" title="Sudah dikuasai"></i>
                          ) : (
                            <i className="fas fa-exclamation-circle text-rose-500 ml-2 text-xs" title="Belum dikuasai"></i>
                          )}
                        </span>
                        <span className="text-xs font-bold text-slate-500">{skill.demand}% Demand</span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden flex">
                        <div 
                          className={`h-2 transition-all ${skill.userHas ? 'bg-emerald-500' : 'bg-slate-300'}`} 
                          style={{ width: `${skill.demand}%` }}
                        ></div>
                      </div>
                      {!skill.userHas && (
                        <p className="text-[10px] font-medium text-rose-500 mt-1">Potensi gaji berkurang karena gap ini.</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusive Job Fast Track (Premium Feature) */}
              <div className="bg-white rounded-2xl border border-indigo-200 p-0 shadow-sm overflow-hidden flex flex-col">
                <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between">
                  <h3 className="text-sm font-bold text-indigo-900 flex items-center">
                    <i className="fas fa-bolt text-amber-500 mr-2 text-lg"></i> Jalur Cepat Premium (Prioritas)
                  </h3>
                  <span className="px-2 py-0.5 bg-indigo-200 text-indigo-800 rounded text-[10px] font-bold uppercase">Eksklusif</span>
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center shrink-0">
                      <i className="fas fa-code text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">Senior Frontend (React)</h4>
                      <p className="text-xs font-semibold text-blue-600 mb-1">PT. Teknologi Nusantara Raya</p>
                      <p className="text-xs text-slate-500"><i className="fas fa-map-marker-alt text-slate-400 mr-1"></i> Remote • <i className="fas fa-money-bill-wave text-emerald-500 ml-2 mr-1"></i> Rp 15 Jt - 20 Jt</p>
                    </div>
                  </div>
                  
                  <div className="bg-emerald-50 border border-emerald-100 rounded-lg p-3 mb-5">
                    <p className="text-xs text-emerald-800 leading-relaxed">
                      <strong>AI Match: 92%.</strong> Resume Anda berada di Top 10% untuk posisi ini. Karena Anda member Premium, lamaran Anda akan diletakkan di tumpukan teratas meja HRD.
                    </p>
                  </div>

                  <button className="w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-indigo-600 transition shadow-lg flex justify-center items-center group">
                    Kirim Lamaran Prioritas <i className="fas fa-paper-plane ml-2 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"></i>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default TrendKarirPremium;