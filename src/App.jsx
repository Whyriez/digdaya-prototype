import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import AIParsing from "./pages/AIParsing";
import CandidateDashboard from "./pages/CandidateDashboard";
import HRDashboard from "./pages/HRDashboard";
import ATSConfig from "./pages/ATSConfig";
import TalentPool from "./pages/TalentPool";
import SkillGapAnalytics from "./pages/SkillGapAnalytics";
import UserDashboard from "./pages/UserDashboard";
import CariLowongan from "./pages/CariLowongan";
import PelatihanSaya from "./pages/PelatihanSaya";
import ProfilPortofolio from "./pages/ProfilPortfolio";
import CariLowonganPublic from "./pages/CariLowonganPublic";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/upload" element={<AIParsing />} />
        <Route path="/candidate" element={<CandidateDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        <Route path="/cari-lowongan" element={<CariLowongan />} />
        <Route path="/pelatihan" element={<PelatihanSaya />} />
        <Route path="/profil" element={<ProfilPortofolio />} />

        <Route path="/cari-lowongan-public" element={<CariLowonganPublic />} />

        <Route path="/hr" element={<HRDashboard />} />
        <Route path="/ats-config" element={<ATSConfig />} />
        <Route path="/talent-pool" element={<TalentPool />} />
        <Route path="/skill-gap" element={<SkillGapAnalytics />} />
      </Routes>
    </Router>
  );
}

export default App;
