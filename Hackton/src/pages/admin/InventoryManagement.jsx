// src/pages/admin/InventoryManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import { FaDrumstickBite, FaUtensils, FaPlusCircle } from "react-icons/fa";

/* static branches inventory */
const initialBranches = [
  { id: 1, name: "🍗 Lahore Branch", inventory: { chicken: 50, fries: 80 } },
  { id: 2, name: "🍟 Karachi Branch", inventory: { chicken: 40, fries: 60 } },
];

export default function InventoryManagement() {
  const [branches, setBranches] = useState(initialBranches);

  function addStock(branchId, item, qty) {
    setBranches((prev) =>
      prev.map((b) => {
        if (b.id !== branchId) return b;
        return {
          ...b,
          inventory: {
            ...b.inventory,
            [item]: (b.inventory[item] || 0) + qty,
          },
        };
      })
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-500 via-orange-400 to-yellow-300">
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-extrabold mb-6 text-white drop-shadow-lg">
            📦 Inventory Management
          </h1>

          {branches.map((b) => (
            <div
              key={b.id}
              className="bg-white rounded-2xl shadow-xl p-6 mb-6 border-4 border-orange-400"
            >
              <h2 className="text-xl font-bold text-red-600 mb-4">{b.name}</h2>

              <table className="w-full text-left border-collapse mb-4">
                <thead>
                  <tr className="bg-orange-100 text-gray-700">
                    <th className="p-3">Item</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(b.inventory).map(([item, qty]) => (
                    <tr
                      key={item}
                      className="border-b hover:bg-orange-50 transition"
                    >
                      <td className="p-3 font-medium flex items-center gap-2">
                        {item === "chicken" ? (
                          <FaDrumstickBite className="text-red-500" />
                        ) : (
                          <FaUtensils className="text-yellow-500" />
                        )}
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                      </td>
                      <td className="p-3">{qty}</td>
                      <td className="p-3">
                        <button
                          onClick={() => addStock(b.id, item, 10)}
                          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition transform"
                        >
                          <FaPlusCircle /> Add 10
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
