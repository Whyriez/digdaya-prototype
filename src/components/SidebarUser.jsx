import React from "react";
import { Link, useLocation } from "react-router-dom";

const SidebarUser = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Fungsi kecil untuk mengecek apakah menu ini sedang aktif
  const isActive = (path) => currentPath === path;

  const handleLogout = () => {
    // contoh kalau pakai localStorage
    localStorage.removeItem("token");

    // redirect ke login
    window.location.href = "/login";
  };

  return (
    <>
      {/* Overlay Background untuk Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar B2C (Kandidat) */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 shadow-2xl lg:shadow-[4px_0_24px_rgba(0,0,0,0.02)]`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-sm shadow-blue-200">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              SkillSync
            </span>
          </Link>
          <button
            className="lg:hidden text-slate-400 hover:text-rose-500 transition text-lg"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Menu Navigation */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
            Menu Karir
          </p>

          <Link
            to="/user-dashboard"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/user-dashboard") ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <i
              className={`fas fa-home w-5 h-5 mr-3 text-center ${isActive("/user-dashboard") ? "" : "text-slate-400 group-hover:text-blue-500 transition"}`}
            ></i>
            <span
              className={`text-sm ${isActive("/user-dashboard") ? "font-semibold" : "font-medium"}`}
            >
              Dashboard Utama
            </span>
          </Link>

          <Link
            to="/cari-lowongan"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/cari-lowongan") ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <i
              className={`fas fa-search w-5 h-5 mr-3 text-center ${isActive("/cari-lowongan") ? "" : "text-slate-400 group-hover:text-blue-500 transition"}`}
            ></i>
            <span
              className={`text-sm ${isActive("/cari-lowongan") ? "font-semibold" : "font-medium"}`}
            >
              Cari Lowongan
            </span>
          </Link>

          <Link
            to="/candidate"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/candidate") ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <i
              className={`fas fa-file-pdf w-5 h-5 mr-3 text-center ${isActive("/candidate") ? "" : "text-slate-400 group-hover:text-blue-500 transition"}`}
            ></i>
            <span
              className={`text-sm ${isActive("/candidate") ? "font-semibold" : "font-medium"}`}
            >
              Analisis CV (AI Scan)
            </span>
          </Link>

          <Link
            to="/pelatihan"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/pelatihan") ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <i
              className={`fas fa-graduation-cap w-5 h-5 mr-3 text-center ${isActive("/pelatihan") ? "" : "text-slate-400 group-hover:text-blue-500 transition"}`}
            ></i>
            <span
              className={`text-sm ${isActive("/pelatihan") ? "font-semibold" : "font-medium"}`}
            >
              Pelatihan Saya
            </span>
          </Link>

          {/* MENU BARU: Trend Karir Premium */}
          <Link
            to="/trend-karir"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/trend-karir") ? "bg-indigo-50 text-indigo-700 border border-indigo-200" : "text-slate-600 hover:text-slate-900 hover:bg-indigo-50/50"}`}
          >
            <i
              className={`fas fa-chart-line w-5 h-5 mr-3 text-center ${isActive("/trend-karir") ? "text-indigo-600" : "text-slate-400 group-hover:text-indigo-500 transition"}`}
            ></i>
            <span
              className={`text-sm flex-1 ${isActive("/trend-karir") ? "font-bold" : "font-medium group-hover:font-semibold"}`}
            >
              Market Insights
            </span>
            <i className="fas fa-crown text-amber-400 text-xs" title="Fitur Premium"></i>
          </Link>

          <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-8">
            Akun
          </p>
          <Link
            to="/profil"
            className={`flex items-center px-3 py-2.5 rounded-lg group transition ${isActive("/profil") ? "bg-blue-50 text-blue-700 border border-blue-100" : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"}`}
          >
            <i
              className={`fas fa-user-circle w-5 h-5 mr-3 text-center ${isActive("/profil") ? "" : "text-slate-400 group-hover:text-slate-600 transition"}`}
            ></i>
            <span
              className={`text-sm ${isActive("/profil") ? "font-semibold" : "font-medium"}`}
            >
              Profil & Portofolio
            </span>
          </Link>
        </nav>

        {/* User Profile Info */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center px-3 py-2.5 rounded-lg bg-white border border-slate-200 shadow-sm hover:border-slate-300 transition cursor-pointer relative overflow-hidden group">
            {/* Efek gradient tipis saat dihover pada profil premium */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <img
              src="https://ui-avatars.com/api/?name=Nur+Alim&background=eff6ff&color=2563eb"
              alt="Profile"
              className="w-8 h-8 rounded-full border border-slate-200 mr-3 shrink-0 relative z-10"
            />
            <div className="overflow-hidden relative z-10">
              <p className="text-sm font-bold text-slate-800 leading-none truncate">
                Nur Alim M. Suma
              </p>
              {/* Status Member diubah menjadi Premium */}
              <p className="text-[11px] text-indigo-600 mt-1 font-bold truncate flex items-center">
                <i className="fas fa-crown text-amber-400 mr-1 text-[9px]"></i> Premium Member
              </p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="mt-3 flex items-center w-full px-3 py-2.5 rounded-lg text-rose-600 hover:bg-rose-50 transition group"
          >
            <i className="fas fa-sign-out-alt w-5 h-5 mr-3 text-center"></i>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default SidebarUser;