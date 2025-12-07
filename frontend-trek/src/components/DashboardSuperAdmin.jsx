import React from "react";
import { useNavigate } from "react-router-dom";
import "./Pengajuan.css";

export default function DashboardSuperAdmin() {
  const navigate = useNavigate();

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div>
          <div className="sidebar-logo">Sistem Pengajuan ATK</div>
          <div className="sidebar-subtitle">Universitas Yarsi</div>
        </div>

        <nav className="sidebar-menu">
          {/* Halaman ini sendiri */}
          <div className="menu-item disabled" style={{ cursor: "default" }}>
            Dashboard
          </div>

          {/* Menu ke halaman kelola user (nanti kita isi komponen lain) */}
          <div
            className="menu-item"
            onClick={() => navigate("/superadmin/users")}
            style={{ cursor: "pointer" }}
          >
            Kelola User
          </div>

          {/* Kalau super admin juga boleh atur periode */}
          <div
            className="menu-item"
            onClick={() => navigate("/periode")}
            style={{ cursor: "pointer" }}
          >
            Atur Periode
          </div>
        </nav>

        <div
          className="logout"
          onClick={() => (window.location.href = "/")}
          style={{ cursor: "pointer" }}
        >
          Log Out
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div>
            <div className="topbar-title">Dashboard Super Admin</div>
            <div className="topbar-sub">Selamat datang: Super Admin</div>
          </div>
          <div className="topbar-right">
            <span>Role: Super Admin</span>
            <span className="role-pill">SuperAdmin</span>
          </div>
        </header>

        {/* ISI DASHBOARD */}
        <section className="main-content">
          <div className="card">
            <div className="card-title">Ringkasan</div>
            <p>
              Super Admin dapat mengelola user, mengatur periode pengajuan, dan
              memantau aktivitas sistem. Nantinya kamu bisa tambahkan grafik
              atau statistik di sini.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
