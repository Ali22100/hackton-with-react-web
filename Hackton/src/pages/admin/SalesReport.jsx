// src/pages/admin/SalesReport.jsx
import React from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import { FaHamburger, FaPizzaSlice, FaIceCream, FaChartLine } from "react-icons/fa";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

export default function SalesReport() {
  // Dummy sales data
  const salesData = [
    { day: "Mon", sales: 1200 },
    { day: "Tue", sales: 1800 },
    { day: "Wed", sales: 1500 },
    { day: "Thu", sales: 2000 },
    { day: "Fri", sales: 2500 },
    { day: "Sat", sales: 3000 },
    { day: "Sun", sales: 2200 },
  ];

  const productData = [
    { name: "Burgers", qty: 120 },
    { name: "Pizzas", qty: 90 },
    { name: "Fries", qty: 150 },
    { name: "Drinks", qty: 200 },
    { name: "IceCream", qty: 70 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-600 to-yellow-500">
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow-lg flex items-center justify-center gap-2">
            <FaChartLine /> Sales Report 🍔
          </h1>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gradient-to-r from-green-600 to-green-800 p-6 rounded-2xl shadow-lg text-white text-center">
              <FaHamburger size={40} className="mx-auto mb-2" />
              <h2 className="text-xl font-bold">Today Sales</h2>
              <p className="text-2xl mt-2 font-extrabold">Rs. 25,000</p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-2xl shadow-lg text-white text-center">
              <FaPizzaSlice size={40} className="mx-auto mb-2" />
              <h2 className="text-xl font-bold">Weekly Sales</h2>
              <p className="text-2xl mt-2 font-extrabold">Rs. 1,20,000</p>
            </div>

            <div className="bg-gradient-to-r from-purple-700 to-purple-900 p-6 rounded-2xl shadow-lg text-white text-center">
              <FaIceCream size={40} className="mx-auto mb-2" />
              <h2 className="text-xl font-bold">Monthly Sales</h2>
              <p className="text-2xl mt-2 font-extrabold">Rs. 4,50,000</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Sales Trend Line Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-700">📈 Weekly Sales Trend</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="sales" stroke="#f43f5e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Top Products Bar Chart */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-700">🍟 Top Selling Products</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={productData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="qty" fill="#f97316" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
