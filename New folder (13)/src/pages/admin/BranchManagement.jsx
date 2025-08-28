// src/pages/admin/BranchManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import BranchForm from "../../components/forms/BranchForm.jsx";

/* static branches state stored in memory for demo */
const initialBranches = [
  { id: 1, name: "Lahore Branch", location: "Lahore", managerId: "mgr_lhr", inventory: { fries: 80 }, employees: [] }
];

export default function BranchManagement() {
  const [branches, setBranches] = useState(initialBranches);

  function addBranch(payload) {
    const id = Date.now();
    setBranches(prev => [...prev, { id, ...payload, employees: [], inventory: {} }]);
  }

  function removeBranch(id) {
    setBranches(prev => prev.filter(b => b.id !== id));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">Branch Management</h1>
          <BranchForm onSubmit={addBranch} />
          <div className="mt-4">
            {branches.map(b => (
              <div key={b.id} className="flex items-center justify-between border p-3 rounded mb-2">
                <div>
                  <div className="font-medium">{b.name}</div>
                  <div className="text-sm text-gray-600">{b.location}</div>
                </div>
                <button onClick={()=>removeBranch(b.id)} className="bg-red-500 text-white px-3 py-1 rounded">Delete</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
