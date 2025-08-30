// src/pages/manager/ManageOrders.jsx
import React from "react";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";

export default function ManageOrders() {
  // Dummy orders
  const orders = [
    { id: 1, customer: "Ali", item: "Zinger Burger", status: "Pending" },
    { id: 2, customer: "Sara", item: "Pizza Large", status: "Completed" },
    { id: 3, customer: "Ahmed", item: "French Fries", status: "Cancelled" },
  ];

  // Row background color function
  const getRowBg = (status) => {
    if (status === "Pending") return "bg-yellow-50 border-yellow-400";
    if (status === "Completed") return "bg-green-50 border-green-400";
    if (status === "Cancelled") return "bg-red-50 border-red-400";
    return "bg-white";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-700 via-orange-600 to-orange-500">
      {/* Header */}
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <Sidebar role="Manager" />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-extrabold text-yellow-300 mb-6 flex items-center gap-2 drop-shadow-lg">
            🍟 Manage Orders
          </h1>

          {/* ✅ Orders in Card Row Style */}
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className={`rounded-2xl shadow-md p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-l-8 hover:scale-[1.02] hover:shadow-xl transition-transform duration-300 ${getRowBg(
                  order.status
                )}`}
              >
                {/* Left Side */}
                <div className="flex flex-col">
                  <span className="font-bold text-gray-900 flex items-center gap-2 text-lg">
                    <CgProfile size={24} className="text-orange-500" />{" "}
                    {order.customer}
                  </span>
                  <span className="text-gray-700 text-sm">🍔 {order.item}</span>
                </div>

                {/* Right Side (Status) */}
                <div>
                  {order.status === "Pending" && (
                    <span className="flex items-center gap-2 text-yellow-700 font-semibold text-sm bg-yellow-200 px-3 py-1 rounded-full">
                      <FaClock /> {order.status}
                    </span>
                  )}
                  {order.status === "Completed" && (
                    <span className="flex items-center gap-2 text-green-700 font-semibold text-sm bg-green-200 px-3 py-1 rounded-full">
                      <FaCheckCircle /> {order.status}
                    </span>
                  )}
                  {order.status === "Cancelled" && (
                    <span className="flex items-center gap-2 text-red-700 font-semibold text-sm bg-red-200 px-3 py-1 rounded-full">
                      <FaTimesCircle /> {order.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
