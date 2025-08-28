import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBell, FaUserCircle, FaUtensils, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
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

  const navLinkStyle = ({ isActive }) => ({
    textDecoration: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    color: isActive ? "#facc15" : "#fff",
    borderBottom: isActive ? "3px solid #facc15" : "3px solid transparent",
    transition: "all 0.3s ease",
    display: "block", // mobile dropdown mai links block banenge
  });

  return (
    <header
      style={{
        background: "linear-gradient(90deg,#dc2626,#f97316)",
        color: "#fff",
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
        fontFamily: "'Poppins', sans-serif",
        position: "relative",
      }}
    >
      {/* Left Logo/Brand */}
   <div
  className="brand-title"
  style={{
    fontWeight: "900",
    fontSize: "16px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginLeft: "30px",
    flexWrap: "wrap", // overflow na ho
  }}
>
  <FaUtensils size={16} />
  <span style={{ color: "#facc15" }}>FastFood</span> Manager
</div>

      {/* Mobile Menu Button (visible below 1031px) */}
 {/* Mobile Menu Button (visible below 1031px) */}
<button
  className="mobile-menu-btn"
  style={{
    background: "#f97316", // dark orange
    border: "2px solid #fff", // white border (chahe to yellow bhi kar sakte ho)
    borderRadius: "8px", // halka rounded button
    color: "#fff",
    fontSize: "10px",
    cursor: "pointer",
    display: "none",
    marginLeft: "auto",
    marginRight: "5px",
    padding: "6px 10px", // andar thoda space
    transition: "all 0.3s ease",
  }}
  onClick={() => setIsOpen(!isOpen)}
  onMouseEnter={(e) => (e.currentTarget.style.background = "#ea580c")} // hover dark shade
  onMouseLeave={(e) => (e.currentTarget.style.background = "#f97316")}
>
  {isOpen ? <FaTimes /> : <FaBars />}
</button>



      {/* Middle Navigation (hidden below 1031px) */}
      <nav
        className="desktop-nav"
        style={{ display: "flex", gap: "20px", fontWeight: "600" }}
      >
        <NavLink to="/manager" style={navLinkStyle}>
          Dashboard
        </NavLink>
        <NavLink to="/manager/inventory" style={navLinkStyle}>
          Inventory
        </NavLink>
        <NavLink to="/manager/employees" style={navLinkStyle}>
          Employees
        </NavLink>
        <NavLink to="/manager/reviews" style={navLinkStyle}>
          Reviews
        </NavLink>
      </nav>

      {/* Right Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
 

    

        {auth.currentUser ? (
       <button
  onClick={logout}
  className="logout-btn"
>
  <FaUserCircle className="logout-icon" />
</button>
        ) : null}
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div
          className="mobile-dropdown"
          style={{
            position: "absolute",
            top: "70px",
            left: 0,
            right: 0,
            background: "linear-gradient(90deg,#dc2626,#f97316)",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <NavLink to="/manager" style={navLinkStyle} onClick={() => setIsOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="/manager/inventory" style={navLinkStyle} onClick={() => setIsOpen(false)}>
            Inventory
          </NavLink>
          <NavLink to="/manager/employees" style={navLinkStyle} onClick={() => setIsOpen(false)}>
            Employees
          </NavLink>
          <NavLink to="/manager/reviews" style={navLinkStyle} onClick={() => setIsOpen(false)}>
            Reviews
          </NavLink>
        </div>
      )}

      {/* Custom CSS for responsive */}
      <style>
        {`

        .logout-btn {
  background: #b91c1c;
  padding: 4px 8px;
  border-radius: 50%;
  border: 2px solid #facc15;
  color: #fff;
  font-weight: 200;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logout-btn:hover {
  background: #dc2626;
}

.logout-icon {
  font-size: 28px;
}






@media (max-width: 768px) {
  .logout-btn {
    padding: 3px 6px;   /* chhota padding */
    border-radius: 40%;
  }
  .logout-icon {
    font-size: 18px;     /* chhota icon */
  }
@media (max-width: 1031px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-menu-btn {
    display: block !important;
    margin-left: auto !important; /* 👈 force right side */
  }
}

@media (max-width: 380px) {
  .desktop-nav {
    display: none !important;
  }
  .mobile-menu-btn {
    display: block !important;
    margin-left: auto !important; 
    font-size:10px !important;/* 👈 force right side */
  }
}

  @media (max-width: 335px) {
    .brand-title {
      font-size: 16px !important;   /* chhoti font size */
      gap: 4px !important;          /* kam gap */
      margin-left: 10px !important; /* margin kam */
    }
    .brand-title svg {
      width: 16px !important;
      height: 16px !important;      /* icon bhi chhota */
    }
  }
        `}
      </style>
    </header>
  );
}
