import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import yarsi from "./gambar/yarsi.png";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Pengajuan from "./components/Pengajuan";
import DashboardUser from "./components/DashboardUser";
import History from "./components/Riwayat";
import DashboardAdmin from "./components/DashboardAdmin";
import Verifikasi from "./components/Verifikasi";
import Periode from "./components/Periode";
import Approval from "./components/Approval";
import Grafik from "./components/Grafik";
import TambahUser from "./components/TambahUser";
import Riwayat from "./components/Riwayat";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar onLoginClick={() => setShowLogin(true)} />
              <div className="landing" style={{backgroundImage: `url(${yarsi})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "100vh"}}>
              </div>
              {showLogin && <Login onClose={() => setShowLogin(false)} />}
            </>
          }
        />

        {/* USER ROUTES */}
        <Route
          path="/pengajuan"
          element={<Pengajuan onLogout={() => setShowLogin(true)} />}
        />
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path="/riwayat" element={<Riwayat />} />

        {/* ADMIN ROUTES */}
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        <Route path="/periode" element={<Periode />} />

        {/*Super Admin*/}
        <Route path="/approval" element={<Approval />}></Route>
        <Route path="/grafik" element={<Grafik />}></Route>
        <Route path="/tambahuser" element={<TambahUser />}></Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
