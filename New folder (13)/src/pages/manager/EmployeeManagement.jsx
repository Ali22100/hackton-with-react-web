// src/pages/manager/EmployeeManagement.jsx
import React, { useState } from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import EmployeeForm from "../../components/forms/EmployeeForm.jsx";

const initialBranch = {
  id: 1,
  name: "Lahore Branch",
  employees: [{ id: 1, name: "Ali", contact: "0300-123", email: "ali@b.com" }],
};

export default function EmployeeManagement() {
  const [branch, setBranch] = useState(initialBranch);

  function addEmployee(emp) {
    setBranch((b) => ({
      ...b,
      employees: [...(b.employees || []), { id: Date.now(), ...emp }],
    }));
  }

  function removeEmp(id) {
    setBranch((b) => ({
      ...b,
      employees: b.employees.filter((e) => e.id !== id),
    }));
  }

  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Manager" />
        <main
          className="flex-1 p-6 min-h-screen text-gray-900"
          style={{
            background: `linear-gradient(135deg, #dc2626 0%, #f97316 30%, #facc15 100%)`,
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          {/* Heading */}
          <h1 className="text-3xl font-extrabold text-red-700 mb-6">
            👨‍🍳 {branch.name} Employee Management
          </h1>

          {/* Employee Form */}
          <div className="bg-orange-400 p-5 rounded-xl shadow-lg mb-6">
            <EmployeeForm onSubmit={addEmployee} />
          </div>

          {/* Employee List */}
          <div className="grid gap-4">
            {(branch.employees || []).map((emp) => (
              <div
                key={emp.id}
                className="bg-orange-400 border border-gray-200 rounded-xl shadow-md p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between transition hover:shadow-lg"
              >
                {/* Employee Info */}
                <div className="mb-3 sm:mb-0">
                  <div className="font-semibold text-lg text-gray-800">
                    {emp.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {emp.contact} — {emp.email}
                  </div>
                </div>

                {/* Action */}
                <button
                  onClick={() => removeEmp(emp.id)}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition"
                >
                  ❌ Delete
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Responsive Media Queries */}
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
