function Login({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%", height: "100%",
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{
        width: 350,
        background: "white",
        padding: 20,
        borderRadius: 10,
        position: "relative"
      }}>
        {/* Tombol X */}
        <button 
          onClick={onClose}
          style={{
            position: "absolute",
            background:"#030312ff",
            top: 10,
            right: 10,
            border: "none",
            fontSize: 18,
            cursor: "pointer"
          }}
        >
          ✖
        </button>

        <h2 style={{ textAlign: "center" }}>Login</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          <input 
            type="text"
            placeholder="Email"
            style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
          />

          <input 
            type="password"
            placeholder="Password"
            style={{ padding: 10, borderRadius: 6, border: "1px solid #ccc" }}
          />

          <button 
            style={{
              padding: 10,
              borderRadius: 6,
              background: "#3b82f6",
              border: "none",
              color: "white",
              cursor: "pointer"
            }}
          >
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
