import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulasi loading jaringan agar terasa nyata
    setTimeout(() => {
      if (username === 'user' && password === 'user123') {
        navigate('/user-dashboard');
      } else if (username === 'hr' && password === 'hr123') {
        navigate('/hr');
      } else {
        setError('Username atau password tidak ditemukan.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 z-0 pointer-events-none"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <Link to="/" className="flex justify-center items-center space-x-2 mb-6 hover:opacity-80 transition">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
            <i className="fas fa-layer-group text-white text-lg"></i>
          </div>
          <span className="text-3xl font-extrabold text-slate-900 tracking-tight">SkillSync AI</span>
        </Link>
        <h2 className="text-center text-2xl font-bold text-slate-800">
          Masuk ke Akun Anda
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Platform Job Matching & Talent Screening
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-bold text-slate-700">
                Username
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-slate-400"></i>
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
                  placeholder="Masukkan username Anda"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700">
                Password
              </label>
              <div className="mt-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-slate-400"></i>
                </div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full pl-10 pr-3 py-2.5 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-700">
                  Ingat saya
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-semibold text-blue-600 hover:text-blue-500 transition">
                  Lupa password?
                </a>
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg flex items-center text-sm text-rose-600">
                <i className="fas fa-exclamation-circle mr-2"></i>
                {error}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'} transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
              >
                {isLoading ? (
                  <><i className="fas fa-circle-notch fa-spin mr-2"></i> Memproses...</>
                ) : (
                  'Masuk Sekarang'
                )}
              </button>
            </div>
          </form>

          {/* Kotak Bantuan Kredensial (Untuk Demo Hackathon) */}
          <div className="mt-8 bg-slate-50 border border-slate-200 rounded-xl p-4">
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center">
              <i className="fas fa-info-circle text-blue-500 mr-1.5"></i> Akun Demo Hackathon
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-3 rounded border border-slate-200 shadow-sm cursor-pointer hover:border-blue-300 transition" onClick={() => {setUsername('user'); setPassword('user123');}}>
                <span className="text-[10px] font-bold text-slate-400 block mb-1">PENCARI KERJA (B2C)</span>
                <p className="text-xs text-slate-700 font-mono">U: <span className="font-bold text-blue-600">user</span></p>
                <p className="text-xs text-slate-700 font-mono">P: <span className="font-bold text-blue-600">user123</span></p>
              </div>
              <div className="bg-white p-3 rounded border border-slate-200 shadow-sm cursor-pointer hover:border-blue-300 transition" onClick={() => {setUsername('hr'); setPassword('hr123');}}>
                <span className="text-[10px] font-bold text-slate-400 block mb-1">REKRUTER (B2B)</span>
                <p className="text-xs text-slate-700 font-mono">U: <span className="font-bold text-blue-600">hr</span></p>
                <p className="text-xs text-slate-700 font-mono">P: <span className="font-bold text-blue-600">hr123</span></p>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 mt-2 text-center italic">*Klik kotak di atas untuk mengisi otomatis.</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;