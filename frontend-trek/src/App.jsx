import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Login from "./components/Login";


function App() {
  const [count, setCount] = useState(0)
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
     <Navbar onLoginClick={() => setShowLogin(true)} />

      {/* Landing Page */}
      <div className="landing">
        <h1>Selamat Datang di Website Pengadaan ATK</h1>
      </div>

      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}
    </>
  )
}

export default App
