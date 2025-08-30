import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle, FaUtensils, FaBars, FaTimes, FaTachometerAlt, FaBoxOpen, FaUsers, FaConciergeBell, FaStar } from "react-icons/fa";

export default function ManagerHeader() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };


  return (
    <header style={{
      background: "linear-gradient(90deg,#dc2626,#f97316)",
      color: "#fff",
      padding: "12px 24px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "'Poppins', sans-serif",
      position: "relative",
      zIndex: 50
    }}>
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <FaUtensils size={20} />
        <span style={{ fontWeight: 900, color: "#facc15" }}>ABBASI</span>
        <span style={{ fontWeight: 700 }}>FastFood</span>
      </div>

      {/* Desktop Nav */}


      {/* Right section */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        {auth.currentUser && (
          <button onClick={logout} style={{
            background: "#b91c1c",
            borderRadius: "50%",
            border: "2px solid #facc15",
            padding: "4px 8px",
            color: "#fff",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <FaUserCircle size={26} />
          </button>
        )}

        {/* Mobile menu button */}
        
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div style={{
          position: "absolute",
          top: "60px",
          left: 0,
          right: 0,
          background: "linear-gradient(90deg,#dc2626,#f97316)",
          padding: "12px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}>
          {managerLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              style={({ isActive }) => ({
                display: "flex",
                alignItems: "center",
                gap: "6px",
                padding: "8px 12px",
                borderRadius: "6px",
                textDecoration: "none",
                color: isActive ? "#000" : "#fff",
                background: isActive ? "#facc15" : "transparent",
              })}
              onClick={() => setIsOpen(false)}
            >
              {link.icon} {link.label}
            </NavLink>
          ))}
        </div>
      )}

      {/* Media Queries */}
      <style>
        {`
          @media (max-width: 1030px) {
            .desktop-nav { display: none !important; }
            button { display: block !important; }
          }
        `}
      </style>
    </header>
  );
}
