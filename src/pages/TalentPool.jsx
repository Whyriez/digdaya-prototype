import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const TalentPool = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('Semua');

  // Data Dummy untuk Pangkalan Data Nasional
  const talents = [
    {
      id: 1,
      name: 'Andi Setiawan',
      role: 'Fullstack Developer',
      location: 'Jakarta Selatan',
      experience: '3 Tahun',
      avatar: 'https://ui-avatars.com/api/?name=Andi+Setiawan&background=eff6ff&color=1e40af',
      skills: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      matchScore: 94,
      status: 'Open to Work'
    },
    {
      id: 2,
      name: 'Rina Melati',
      role: 'UI/UX Designer',
      location: 'Bandung',
      experience: '2 Tahun',
      avatar: 'https://ui-avatars.com/api/?name=Rina+Melati&background=fce7f3&color=be185d',
      skills: ['Figma', 'Prototyping', 'User Research', 'CSS'],
      matchScore: 88,
      status: 'Pasif'
    },
    {
      id: 3,
      name: 'Bima Saputra',
      role: 'Data Scientist',
      location: 'Yogyakarta',
      experience: '4 Tahun',
      avatar: 'https://ui-avatars.com/api/?name=Bima+Saputra&background=fef3c7&color=b45309',
      skills: ['Python', 'TensorFlow', 'SQL', 'Data Viz'],
      matchScore: 91,
      status: 'Open to Work'
    },
    {
      id: 4,
      name: 'Nur Alim M. Suma',
      role: 'Frontend Web Developer',
      location: 'Gorontalo',
      experience: 'Fresh Graduate',
      avatar: 'https://ui-avatars.com/api/?name=Nur+Alim&background=f1f5f9&color=64748b',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind'],
      matchScore: 82,
      status: 'Open to Work',
      isPersona: true
    },
    {
      id: 5,
      name: 'Sarah Wijaya',
      role: 'Backend Engineer',
      location: 'Surabaya',
      experience: '5 Tahun',
      avatar: 'https://ui-avatars.com/api/?name=Sarah+Wijaya&background=e0e7ff&color=4338ca',
      skills: ['Golang', 'Microservices', 'Docker', 'Redis'],
      matchScore: 96,
      status: 'Pasif'
    },
    {
      id: 6,
      name: 'Kevin Pratama',
      role: 'Mobile Developer',
      location: 'Jakarta Barat',
      experience: '2 Tahun',
      avatar: 'https://ui-avatars.com/api/?name=Kevin+Pratama&background=dcfce7&color=047857',
      skills: ['Flutter', 'Dart', 'Firebase', 'REST API'],
      matchScore: 85,
      status: 'Open to Work'
    }
  ];

  // Filter logika
  const filteredTalents = talents.filter(talent => {
    const matchesSearch = talent.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          talent.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          talent.role.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeFilter === 'Semua') return matchesSearch;
    if (activeFilter === 'Open to Work') return matchesSearch && talent.status === 'Open to Work';
    if (activeFilter === 'Fresh Graduate') return matchesSearch && talent.experience === 'Fresh Graduate';
    return matchesSearch;
  });

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

        <Sidebar/>
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
              <span className="text-slate-900 font-bold">Pangkalan Data Talenta (Nasional)</span>
            </div>
            <span className="sm:hidden text-slate-900 font-bold text-sm">Talent Pool</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-lg text-indigo-700 text-xs font-bold">
              <i className="fas fa-crown mr-2"></i> Premium Access
            </div>
          </div>
        </header>

        {/* Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 custom-scrollbar">
          
          {/* Top Search & Filter Bar */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-2">Temukan Talenta Terbaik</h1>
            <p className="text-sm text-slate-500 mb-6">Cari kandidat spesifik yang sudah dikurasi oleh AI tanpa harus menunggu mereka melamar.</p>
            
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <i className="fas fa-search absolute left-4 top-3.5 text-slate-400"></i>
                <input 
                  type="text" 
                  placeholder="Cari berdasarkan Role (ex: React Developer) atau Lokasi..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                />
              </div>
              <button className="px-6 py-3 bg-white border border-slate-300 rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 shadow-sm flex items-center justify-center shrink-0">
                <i className="fas fa-sliders-h mr-2 text-blue-600"></i> Filter Lanjutan
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Semua', 'Open to Work', 'Fresh Graduate', 'Backend', 'Data', 'UI/UX'].map(filter => (
                <button 
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${activeFilter === filter ? 'bg-blue-600 text-white border-blue-600 shadow-md' : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Cards (Kandidat) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            
            {filteredTalents.map(talent => (
              <div key={talent.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition duration-300 p-5 relative overflow-hidden group">
                
                {/* Decorative Badge */}
                <div className="absolute top-4 right-4 text-right">
                  <div className="inline-flex items-center px-2 py-1 rounded bg-blue-50 border border-blue-100 text-blue-700 text-[10px] font-bold">
                    <i className="fas fa-star text-amber-400 mr-1"></i> Top {talent.matchScore}%
                  </div>
                </div>

                <div className="flex items-center mb-4 mt-2">
                  <img src={talent.avatar} alt={talent.name} className={`w-14 h-14 rounded-full border-2 border-slate-100 shadow-sm mr-4 ${talent.isPersona ? 'grayscale-[20%]' : ''}`} />
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition">{talent.name}</h3>
                    <p className="text-xs font-semibold text-slate-500 mt-0.5">{talent.role}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-4 text-xs text-slate-600">
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt text-slate-400 w-4"></i> {talent.location}
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-briefcase text-slate-400 w-4"></i> {talent.experience}
                  </div>
                </div>

                <div className="mb-5">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">Top Skills Divalidasi AI</p>
                  <div className="flex flex-wrap gap-1.5">
                    {talent.skills.map(skill => (
                      <span key={skill} className="px-2 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded text-[11px] font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className={`text-[11px] font-bold flex items-center ${talent.status === 'Open to Work' ? 'text-emerald-600' : 'text-slate-400'}`}>
                    <span className={`w-2 h-2 rounded-full mr-1.5 ${talent.status === 'Open to Work' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300'}`}></span>
                    {talent.status}
                  </span>
                  
                  <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-bold hover:bg-blue-600 transition shadow-sm">
                    Undang Kandidat
                  </button>
                </div>

              </div>
            ))}

            {filteredTalents.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-500 bg-white rounded-2xl border border-dashed border-slate-300">
                <i className="fas fa-search text-3xl text-slate-300 mb-4 block"></i>
                <p className="font-bold">Kandidat tidak ditemukan.</p>
                <p className="text-sm mt-1">Coba sesuaikan kata kunci atau filter Anda.</p>
              </div>
            )}

          </div>

          <div className="mt-8 text-center">
            <button className="px-6 py-2.5 bg-white border border-slate-300 text-slate-600 font-bold rounded-full text-sm hover:bg-slate-50 transition shadow-sm">
              Muat Lebih Banyak Kandidat
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default TalentPool;