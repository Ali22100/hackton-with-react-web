// src/pages/admin/InventoryManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";

/* static branches inventory */
const initialBranches = [
  { id: 1, name: "Lahore Branch", inventory: { chicken:50, fries:80 } },
  { id: 2, name: "Karachi Branch", inventory: { chicken:40, fries:60 } },
];

export default function InventoryManagement() {
  const [branches, setBranches] = useState(initialBranches);

  function addStock(branchId, item, qty) {
    setBranches(prev => prev.map(b => {
      if (b.id !== branchId) return b;
      return { ...b, inventory: { ...b.inventory, [item]: (b.inventory[item] || 0) + qty } };
    }));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">Inventory Management</h1>
          {branches.map(b => (
            <div key={b.id} className="border p-3 rounded mb-3">
              <div className="font-medium">{b.name}</div>
              <div className="mt-2 text-sm">Inventory: {JSON.stringify(b.inventory)}</div>
              <div className="mt-2">
                <button onClick={()=>addStock(b.id, "fries", 10)} className="bg-blue-600 text-white px-3 py-1 rounded">Add 10 Fries</button>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
