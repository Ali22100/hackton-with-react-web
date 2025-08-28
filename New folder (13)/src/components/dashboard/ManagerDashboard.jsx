// src/components/dashboard/ManagerDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaUsers, FaStar, FaClipboardList } from "react-icons/fa";

export default function ManagerDashboard() {
  const cardStyle = (bg, borderColor) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: "28px",
    background: bg,
    color: "#fff",
    borderRadius: "20px",
    border: `3px solid ${borderColor}`,
    boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s ease",
  });

  const hoverEffect = {
    transform: "translateY(-6px) scale(1.05)",
    boxShadow: "0 18px 35px rgba(0,0,0,0.35)",
  };

  return (
    <div
      style={{
        padding: "30px",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        background: `
          linear-gradient(135deg, #dc2626 0%, #f97316 30%, #facc15 100%)
        `,
        backgroundAttachment: "fixed",
      }}
    >
      <h1
        style={{
          fontSize: "36px",
          fontWeight: "900",
          marginBottom: "40px",
          color: "#fff",
          textShadow: "2px 2px 5px rgba(0,0,0,0.4)",
          letterSpacing: "1px",
        }}
      >
        🍔 Fast Food Manager Dashboard
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "28px",
        }}
      >
        {/* Inventory */}
        <Link
          to="/manager/inventory"
          style={cardStyle("linear-gradient(135deg,#ef4444,#f97316)", "#facc15")}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              cardStyle("linear-gradient(135deg,#ef4444,#f97316)", "#facc15")
            )
          }
        >
          <FaBoxOpen style={{ fontSize: "46px", marginRight: "20px" }} />
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "700" }}>🍟 Inventory</h2>
            <p style={{ fontSize: "15px", opacity: 0.95 }}>
              Manage burgers, fries & drinks stock
            </p>
          </div>
        </Link>

        {/* Employees */}
        <Link
          to="/manager/employees"
          style={cardStyle("linear-gradient(135deg,#22c55e,#16a34a)", "#facc15")}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              cardStyle("linear-gradient(135deg,#22c55e,#16a34a)", "#facc15")
            )
          }
        >
          <FaUsers style={{ fontSize: "46px", marginRight: "20px" }} />
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "700" }}>👨‍🍳 Employees</h2>
            <p style={{ fontSize: "15px", opacity: 0.95 }}>
              Staff shifts & branch team management
            </p>
          </div>
        </Link>

        {/* Orders */}
        <Link
          to="/manager/orders"
          style={cardStyle("linear-gradient(135deg,#3b82f6,#2563eb)", "#facc15")}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              cardStyle("linear-gradient(135deg,#3b82f6,#2563eb)", "#facc15")
            )
          }
        >
          <FaClipboardList style={{ fontSize: "46px", marginRight: "20px" }} />
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "700" }}>📋 Orders</h2>
            <p style={{ fontSize: "15px", opacity: 0.95 }}>
              Track customer orders & delivery
            </p>
          </div>
        </Link>

        {/* Reviews */}
        <Link
          to="/manager/reviews"
          style={cardStyle("linear-gradient(135deg,#facc15,#f59e0b)", "#dc2626")}
          onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseLeave={(e) =>
            Object.assign(
              e.currentTarget.style,
              cardStyle("linear-gradient(135deg,#facc15,#f59e0b)", "#dc2626")
            )
          }
        >
          <FaStar style={{ fontSize: "46px", marginRight: "20px" }} />
          <div>
            <h2 style={{ fontSize: "22px", fontWeight: "700" }}>⭐ Reviews</h2>
            <p style={{ fontSize: "15px", opacity: 0.95 }}>
              Customer feedback & ratings
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
