// src/components/dashboard/UserDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaBoxOpen, FaShoppingCart, FaStar, FaConciergeBell } from "react-icons/fa";

export default function UserDashboard() {
  const cards = [
    { 
      to: "/products", 
      label: "Browse Products", 
      icon: <FaBoxOpen />, 
      gradient: "linear-gradient(135deg, #d97706, #fbbf24)", // dark yellow-orange
      desc: "See all our delicious menu items!"
    },
    { 
      to: "/order", 
      label: "Place Order", 
      icon: <FaShoppingCart />, 
      gradient: "linear-gradient(135deg, #b91c1c, #f87171)", // dark red
      desc: "Order your favorite meals online."
    },
    { 
      to: "/review", 
      label: "Write Review", 
      icon: <FaStar />, 
      gradient: "linear-gradient(135deg, #047857, #34d399)", // dark green
      desc: "Share your feedback and rating."
    },
    { 
      to: "/my-orders", 
      label: "My Orders", 
      icon: <FaConciergeBell />, 
      gradient: "linear-gradient(135deg, #1e3a8a, #60a5fa)", // dark blue
      desc: "Check your past and current orders."
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      padding: "24px",
      fontFamily: "'Poppins', sans-serif",
      background: "linear-gradient(135deg, #dc2626, #f97316)", // overall background
    }}>
      <h1 style={{
        fontSize: "28px",
        fontWeight: 800,
        marginBottom: "24px",
        color: "#fff",
        textShadow: "1px 1px 0 #000",
        textAlign: "center"
      }}>
        Customer Dashboard 🍔
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",  // 2 cards per row
        gap: "20px",
      }}>
        {cards.map(card => (
          <Link
            key={card.to}
            to={card.to}
            style={{
              background: card.gradient,
              color: "#fff",
              padding: "32px",
              minHeight: "200px",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              transition: "all 0.3s",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.07)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          >
            <span style={{ fontSize: "40px", marginBottom: "12px" }}>
              {card.icon}
            </span>
            <span style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>
              {card.label}
            </span>
            <span style={{ fontSize: "14px", textAlign: "center", opacity: 0.9 }}>
              {card.desc}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
