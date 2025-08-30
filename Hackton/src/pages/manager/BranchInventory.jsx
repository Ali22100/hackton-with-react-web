import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";

const initialBranch = {
  id: 1,
  name: "Lahore Branch",
  inventory: { chicken: 50, fries: 80, burgerBuns: 30, drinks: 100 },
};

export default function BranchInventory() {
  const [branch, setBranch] = useState(initialBranch);

  function addStock(item, qty) {
    setBranch((b) => ({
      ...b,
      inventory: { ...b.inventory, [item]: (b.inventory[item] || 0) + qty },
    }));
  }

  function removeStock(item, qty) {
    setBranch((b) => {
      const currentQty = b.inventory[item] || 0;
      const newQty = currentQty - qty >= 0 ? currentQty - qty : 0;
      return { ...b, inventory: { ...b.inventory, [item]: newQty } };
    });
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Manager" />
        <main
          className="flex-1 p-6 min-h-screen text-gray-900"
          style={{
            background: `
              linear-gradient(135deg, #dc2626 0%, #f97316 30%, #facc15 100%)
            `,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          <h1 className="page-heading text-3xl font-extrabold text-red-600 mb-6">
            🍔 {branch.name} Inventory
          </h1>

          {/* Inventory Table */}
          <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
            <table className="min-w-full border-collapse text-left inventory-table">
              <thead className="bg-gradient-to-r from-red-600 to-orange-500 text-white">
                <tr>
                  <th className="px-6 py-3">Item</th>
                  <th className="px-6 py-3">Stock Available</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(branch.inventory).map(([item, qty]) => (
                  <tr
                    key={item}
                    className="border-b hover:bg-orange-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold capitalize text-gray-800">
                      {item}
                    </td>
                    <td className="px-6 py-4 text-gray-700">{qty}</td>
                    <td className="px-6 py-4 flex gap-2 flex-wrap">
                      <button
                        onClick={() => addStock(item, 10)}
                        className="action-btn bg-yellow-400 hover:bg-yellow-500 text-red-700 px-4 py-2 rounded-lg shadow-md transition"
                      >
                        + Add 10
                      </button>
                      <button
                        onClick={() => removeStock(item, 10)}
                        className="action-btn bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
                      >
                        - Remove 10
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <button
              onClick={() => addStock("burgerBuns", 20)}
              className="quick-btn bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg shadow-md"
            >
              🍞 Restock Buns
            </button>
            <button
              onClick={() => addStock("drinks", 15)}
              className="quick-btn bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg shadow-md"
            >
              🥤 Restock Drinks
            </button>
          </div>
        </main>
      </div>

      {/* ✅ Media Queries for Responsiveness */}
      <style>
        {`
          /* Mobile Responsive */
          @media (max-width: 768px) {
            .page-heading {
              font-size: 22px !important;
            }
            .inventory-table th, 
            .inventory-table td {
              padding: 8px !important;
              font-size: 14px !important;
            }
            .action-btn {
              font-size: 13px !important;
              padding: 6px 10px !important;
            }
            .quick-btn {
              font-size: 14px !important;
              padding: 6px 12px !important;
            }
          }

          /* Extra Small (335px like small mobile) */
          @media (max-width: 335px) {
            .page-heading {
              font-size: 18px !important;
            }
            .inventory-table th, 
            .inventory-table td {
              font-size: 12px !important;
              padding: 6px !important;
            }
            .action-btn {
              font-size: 12px !important;
              padding: 4px 8px !important;
            }
            .quick-btn {
              font-size: 12px !important;
              padding: 5px 8px !important;
            }
            table {
              width: 100% !important;
            }
          }
        `}
      </style>
    </div>
  );
}
