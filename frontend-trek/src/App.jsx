import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Pengajuan from "./components/Pengajuan";
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

              <div className="landing">
                <h1>Selamat Datang di Website Pengadaan ATK</h1>
              </div>

              {showLogin && <Login onClose={() => setShowLogin(false)} />}
            </>
          }
        />

        {/* HALAMAN PENGAJUAN */}
        <Route path="/pengajuan" element={<Pengajuan />} />

        {/* HALAMAN RIWAYAT PENGAJUAN */}
        <Route path="/riwayat" element={<Riwayat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
