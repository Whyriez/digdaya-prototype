import { NavLink } from "react-router-dom";

const baseClass =
  "flex items-center px-3 py-2.5 rounded-lg group transition";

const activeClass =
  "bg-blue-50 text-blue-700 border border-blue-100";

const inactiveClass =
  "text-slate-600 hover:text-slate-900 hover:bg-slate-50";

function navClass({ isActive }) {
  return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
}

function Sidebar() {
  return (
    <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
      <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
        Menu Utama
      </p>

      <NavLink to="/hr" className={navClass}>
        <i className="fas fa-briefcase w-5 h-5 mr-3 text-center"></i>
        <span className="font-semibold text-sm">Kelola Lowongan</span>
      </NavLink>

      <NavLink to="/talent-pool" className={navClass}>
        <i className="fas fa-users w-5 h-5 mr-3 text-center"></i>
        <span className="font-medium text-sm">Talent Pool (Database)</span>
      </NavLink>

      <NavLink to="/skill-gap" className={navClass}>
        <i className="fas fa-chart-line w-5 h-5 mr-3 text-center"></i>
        <span className="font-medium text-sm">Analitik Skill Gap</span>
      </NavLink>

      <p className="px-2 text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 mt-8">
        Pengaturan
      </p>

      <NavLink to="/ats-config" className={navClass}>
        <i className="fas fa-cog w-5 h-5 mr-3 text-center"></i>
        <span className="font-medium text-sm">
          Konfigurasi ATS & API
        </span>
      </NavLink>
    </nav>
  );
}

export default Sidebar;