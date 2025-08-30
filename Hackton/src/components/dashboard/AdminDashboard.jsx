// src/pages/admin/AdminDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHamburger,
  FaStore,
  FaBoxes,
  FaUsers,
  FaClipboardList,
  FaStar,
  FaChartLine,
} from "react-icons/fa"; // ✅ react-icons
import "./Admin.css"

export default function AdminDashboard() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-yellow-700 pb-34 p-6">
      <h1 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow-lg">
        🍔 Admin Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Products */}
        <Link
          to="/admin/products"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-red-600 to-red-800 text-white"
        >
          <FaHamburger size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Manage Products</h2>
          <p className="text-sm mt-2 text-center">
            Add, edit or remove menu items.
          </p>
        </Link>

        {/* Branches */}
        <Link
          to="/admin/branches"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-yellow-600 to-orange-800 text-white"
        >
          <FaStore size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Manage Branches</h2>
          <p className="text-sm mt-2 text-center">
            Control all fast-food branch locations.
          </p>
        </Link>

        {/* Inventory */}
        <Link
          to="/admin/inventory"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-green-600 to-green-800 text-white"
        >
          <FaBoxes size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Inventory</h2>
          <p className="text-sm mt-2 text-center">
            Track stock, ingredients & supplies.
          </p>
        </Link>

        {/* Employees */}
        <Link
          to="/admin/employees"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-purple-700 to-purple-900 text-white"
        >
          <FaUsers size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Employees</h2>
          <p className="text-sm mt-2 text-center">
            Manage staff and their roles.
          </p>
        </Link>

        {/* Orders */}
        <Link
          to="/admin/orders"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-blue-700 to-blue-900 text-white"
        >
          <FaClipboardList size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Manage Orders</h2>
          <p className="text-sm mt-2 text-center">
            View and update customer orders.
          </p>
        </Link>

        {/* Reviews */}
        <Link
          to="/admin/reviews"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-700 to-pink-900 text-white"
        >
          <FaStar size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Customer Reviews</h2>
          <p className="text-sm mt-2 text-center">
            Read and manage customer feedback.
          </p>
        </Link>

        {/* Sales Report */}
        <Link
          to="/admin/sales"
          className="rounded-2xl p-6 flex flex-col items-center shadow-lg transform hover:scale-105 transition-all duration-300 bg-gradient-to-r from-gray-700 to-gray-900 text-white"
        >
          <FaChartLine size={40} className="mb-3" />
          <h2 className="text-lg font-bold">Sales Report</h2>
          <p className="text-sm mt-2 text-center">
            Analyze daily, weekly & monthly sales.
          </p>
        </Link>
      </div>
    </div>

    
    </>
    
    
  );
}
