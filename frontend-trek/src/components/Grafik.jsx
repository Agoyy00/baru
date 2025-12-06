import { Link } from "react-router-dom";
import "./pengajuan.css";

export default function Grafik() {
  const currentUser = { name: "Nama Kamu" }; // contoh, ganti sesuai konteks

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">Sistem Pengajuan ATK</div>
          <div className="sidebar-subtitle">Universitas Yarsi</div>
        </div>

        <nav className="sidebar-menu">
          <div className="menu-item disabled">Dashboard</div>
          <Link to="/pengajuan" className="menu-item">
            Buat Pengajuan Baru
          </Link>
          <Link to="/riwayat" className="menu-item">
            Riwayat Pengajuan
          </Link>
        </nav>

        <Link to="/" className="logout">
          Log Out
        </Link>
      </aside>

      {/* MAIN */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div>
            <div className="topbar-title">Dashboard Pemohon</div>
            <div className="topbar-sub">
              Selamat datang: {currentUser?.name || "Nama Kamu"}
            </div>
          </div>
          <div className="topbar-right">
            <span>Role: User</span>
            <span className="role-pill">User</span>
          </div>
        </header>

        {/* CONTENT */}
        <section className="main-content">
          <div className="card">
            <div className="card-title">Notifikasi Pengajuan</div>
            {/* Isi konten notifikasi */}
          </div>
        </section>
      </main>
    </div>
  );
}
