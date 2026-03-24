import { NavLink, useNavigate, Link } from "react-router-dom";

const baseClass =
  "flex items-center px-3 py-2.5 rounded-lg group transition";

const activeClass =
  "bg-blue-50 text-blue-700 border border-blue-100";

const inactiveClass =
  "text-slate-600 hover:text-slate-900 hover:bg-slate-50";

function navClass({ isActive }) {
  return `${baseClass} ${isActive ? activeClass : inactiveClass}`;
}

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed lg:static inset-y-0 left-0 z-40 w-64 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* LOGO */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-100">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
              <i className="fas fa-layer-group text-white text-sm"></i>
            </div>
            <span className="text-xl font-extrabold text-slate-900">
              SkillSync <span className="text-blue-600">HR</span>
            </span>
          </Link>

          <button
            className="lg:hidden text-slate-400"
            onClick={() => setIsOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* MENU */}
        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <p className="px-2 text-xs font-bold text-slate-400 uppercase mb-3">
            Menu Utama
          </p>

          <NavLink to="/hr" className={navClass}>
            <i className="fas fa-briefcase w-5 h-5 mr-3"></i>
            <span className="text-sm">Kelola Lowongan</span>
          </NavLink>

          <NavLink to="/talent-pool" className={navClass}>
            <i className="fas fa-users w-5 h-5 mr-3"></i>
            <span className="text-sm">Talent Pool</span>
          </NavLink>

          <NavLink to="/skill-gap" className={navClass}>
            <i className="fas fa-chart-line w-5 h-5 mr-3"></i>
            <span className="text-sm">Skill Gap</span>
          </NavLink>

          <p className="px-2 text-xs font-bold text-slate-400 uppercase mt-8 mb-3">
            Pengaturan
          </p>

          <NavLink to="/ats-config" className={navClass}>
            <i className="fas fa-cog w-5 h-5 mr-3"></i>
            <span className="text-sm">Konfigurasi ATS</span>
          </NavLink>
        </nav>

        {/* PROFILE + LOGOUT (NYATU 🔥) */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          {/* Profile */}
          <div className="flex items-center px-3 py-2.5 rounded-lg bg-white border border-slate-200 mb-3">
            <div className="w-8 h-8 bg-indigo-100 flex items-center justify-center rounded-full mr-3 text-xs font-bold">
              HR
            </div>
            <div>
              <p className="text-sm font-bold">Tim Rekrutmen</p>
              <p className="text-xs text-slate-500">
                PT. Inovasi Digital
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-3 py-2.5 rounded-lg text-rose-600 hover:bg-rose-50 transition"
          >
            <i className="fas fa-sign-out-alt w-5 h-5 mr-3"></i>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;