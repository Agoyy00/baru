import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import yarsi from "./gambar/yarsi.png";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Pengajuan from "./components/Pengajuan";
import DashboardUser from "./components/DashboardUser"; 
import DashboardAdmin from "./components/DashboardAdmin";
import Verifikasi from "./components/Verifikasi";
import Periode from "./components/Periode";
import Approval from "./components/Approval";
import Grafik from "./components/Grafik";
import TambahUser from "./components/TambahUser";
import Riwayat from "./components/Riwayat";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  // --------------------------------------------------
  // 🔹 STATE PERIODE GLOBAL
  // --------------------------------------------------
  const [periodeInfo, setPeriodeInfo] = useState("");
  const [periodeType, setPeriodeType] = useState("none");

  // --------------------------------------------------
  // 🔹 FETCH PERIODE
  // --------------------------------------------------
  useEffect(() => {
    async function loadPeriode() {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/periode/active");
        const data = await res.json();

        if (!data.periode) {
          setPeriodeType("none");
          setPeriodeInfo(
            data.message || "Periode pengajuan belum ditetapkan oleh admin."
          );
          return;
        }

        const p = data.periode;
        const mulai = new Date(p.mulai);
        const selesai = new Date(p.selesai);
        const now = new Date();

        if (now < mulai) {
          setPeriodeType("upcoming");
          setPeriodeInfo(
            `Periode ${p.tahun_akademik} akan dibuka pada ${mulai.toLocaleString(
              "id-ID"
            )} dan ditutup pada ${selesai.toLocaleString("id-ID")}.`
          );
        } else if (now >= mulai && now <= selesai && data.is_open) {
          setPeriodeType("open");
          setPeriodeInfo(
            `Periode ${p.tahun_akademik} sedang DIBUKA hingga ${selesai.toLocaleString(
              "id-ID"
            )}.`
          );
        } else {
          setPeriodeType("closed");
          setPeriodeInfo(
            `Periode ${p.tahun_akademik} sudah DITUTUP pada ${selesai.toLocaleString(
              "id-ID"
            )}.`
          );
        }
      } catch (err) {
        console.error("Gagal mengambil periode:", err);
        setPeriodeType("none");
        setPeriodeInfo("Gagal memuat informasi periode.");
      }
    }

    loadPeriode();
  }, []);

  // --------------------------------------------------
  // 🔹 AUTO HIDE 5 DETIK
  // --------------------------------------------------
  useEffect(() => {
    if (!periodeInfo) return;

    const timer = setTimeout(() => {
      setPeriodeInfo("");
    }, 5000);

    return () => clearTimeout(timer);
  }, [periodeInfo]);

  return (
    <BrowserRouter>

      {/* --------------------------------------------------
        🔹 TOAST NOTIF POJOK KANAN
      -------------------------------------------------- */}
      {periodeInfo && (
        <div className={`periode-toast ${periodeType}`}>
          <div className="periode-toast-title">📢 Informasi Periode Pengajuan</div>
          <div className="periode-toast-text">{periodeInfo}</div>
        </div>
      )}

      <Routes>

        {/* LANDING PAGE */}
        <Route
          path="/"
          element={
            <>
              <Navbar onLoginClick={() => setShowLogin(true)} />
              <div
                className="landing"
                style={{
                  backgroundImage: `url(${yarsi})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100vh",
                }}
              ></div>

              {showLogin && (
                <Login
                  onClose={() => setShowLogin(false)}
                  periodeInfo={periodeInfo}
                  periodeType={periodeType}
                />
              )}
            </>
          }
        />

        {/* USER ROUTES */}
        <Route path="/pengajuan" element={<Pengajuan />} />
        <Route path="/dashboarduser" element={<DashboardUser />} />
        <Route path="/riwayat" element={<Riwayat />} />

        {/* ADMIN ROUTES */}
        <Route path="/dashboardadmin" element={<DashboardAdmin />} />
        <Route path="/verifikasi" element={<Verifikasi />} />
        <Route path="/periode" element={<Periode />} />

        {/* SUPER ADMIN */}
        <Route path="/approval" element={<Approval />} />
        <Route path="/grafik" element={<Grafik />} />
        <Route path="/tambahuser" element={<TambahUser />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
