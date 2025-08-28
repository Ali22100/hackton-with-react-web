import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBuilding,
  FaBoxOpen,
  FaUsers,
  FaShoppingCart,
  FaStar,
  FaConciergeBell,
  FaUtensils,
  FaChartLine,
  FaBars, // menu icon
  FaTimes,
  FaChevronRight, // close icon
} from "react-icons/fa";
import { CiCircleChevRight } from "react-icons/ci";

export default function Sidebar({ role }) {
  const [isOpen, setIsOpen] = useState(false);

  const links = {
    Admin: [
      { to: "/admin", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/admin/branches", label: "Branches", icon: <FaBuilding /> },
      { to: "/admin/products", label: "Products", icon: <FaBoxOpen /> },
      { to: "/admin/inventory", label: "Inventory", icon: <FaUtensils /> },
      { to: "/admin/employees", label: "Employees", icon: <FaUsers /> },
      { to: "/admin/orders", label: "Manage Orders", icon: <FaConciergeBell /> },
      { to: "/admin/reviews", label: "Customer Reviews", icon: <FaStar /> },
      { to: "/admin/sales", label: "Sales Report", icon: <FaChartLine /> },
    ],
    Manager: [
      { to: "/manager", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/manager/inventory", label: "Branch Inventory", icon: <FaBoxOpen /> },
      { to: "/manager/employees", label: "Employees", icon: <FaUsers /> },
      { to: "/manager/orders", label: "Manage Orders", icon: <FaConciergeBell /> },
      { to: "/manager/reviews", label: "Customer Reviews", icon: <FaStar /> },
    ],
    User: [
      { to: "/user", label: "Dashboard", icon: <FaTachometerAlt /> },
      { to: "/products", label: "Products", icon: <FaBoxOpen /> },
      { to: "/order", label: "Place Order", icon: <FaShoppingCart /> },
      { to: "/review", label: "Write Review", icon: <FaStar /> },
      { to: "/my-orders", label: "My Orders", icon: <FaConciergeBell /> },
    ],
  };

  return (
    <>
      {/* Mobile Menu Button */}
 {/* Mobile Menu Button */}
<button
  className="lg:hidden fixed top-3 left-4 z-50 bg-orange-500 text-white p-1.5 rounded-md shadow-md"
  onClick={() => setIsOpen(!isOpen)}
>
  {isOpen ? <FaTimes size={16} /> : <FaChevronRight   size={18} />}
</button>


      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-full w-64 min-h-screen shadow-lg p-4 transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
        style={{
          background: "linear-gradient(180deg, #b91c1c, #f97316)",
          color: "#fff",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        {/* Sidebar Logo */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <FaUtensils size={26} className="text-yellow-300" />
          <h2 className="text-xl font-extrabold tracking-wide">
            🍔 FastFood<span className="text-yellow-300">Panel</span>
          </h2>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {links[role]?.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-yellow-400 text-black shadow-md scale-105"
                    : "hover:bg-white hover:text-red-600 hover:shadow-md"
                }`
              }
              onClick={() => setIsOpen(false)} // close menu on click (mobile)
            >
              <span className="text-lg">{link.icon}</span>
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Promo Banner */}
        <div className="mt-10 bg-yellow-300 text-red-700 p-3 rounded-lg shadow-md text-center font-bold animate-pulse">
          🍟 Today’s Deal: 20% OFF on Burgers!
        </div>

        {/* Bottom Decoration */}
        <div className="mt-8 p-3 text-center text-sm text-yellow-200 border-t border-yellow-400/40">
          Powered by 🍕 FastFood Inc.
        </div>
      </aside>
    </>
  );
}
