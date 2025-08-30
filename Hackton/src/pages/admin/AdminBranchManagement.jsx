// src/pages/admin/BranchManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import BranchForm from "../../components/forms/BranchForm.jsx";

const initialBranches = [
  { 
    id: 1, 
    name: "Lahore Branch", 
    location: "Lahore", 
    managerId: "mgr_lhr", 
    inventory: { fries: 80 }, 
    employees: [] 
  }
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
    <div className="min-h-screen bg-gradient-to-br from-red-500 to-yellow-400">
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-lg">
            🌎 Branch Management
          </h1>

          {/* Branch Form */}

            <BranchForm onSubmit={addBranch} />
       

          {/* Branch List */}
          <div className="mt-8 max-w-3xl mx-auto space-y-4">
            {branches.map(b => (
              <div 
                key={b.id} 
                className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-600 p-4 rounded-2xl shadow-md text-white"
              >
                <div>
                  <div className="font-bold text-lg">{b.name}</div>
                  <div className="text-sm opacity-90">{b.location}</div>
                </div>
                <button 
                  onClick={() => removeBranch(b.id)} 
                  className="bg-red-700 hover:bg-red-800 text-white px-4 py-1.5 rounded-lg shadow-md transition-all duration-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
