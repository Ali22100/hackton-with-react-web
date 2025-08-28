
import React from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";


const sampleBranches = [
  { id:1, name:"Lahore Branch", employees: [{id:1,name:"Ali",contact:"0300-123",email:"ali@b.com"}] },
];

export default function EmployeeList() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 p-6 bg-gray-50 min-h-screen">
          <h1 className="text-2xl font-semibold mb-4">All Branch Employees</h1>
          {sampleBranches.map(b => (
            <div key={b.id} className="border p-3 rounded mb-3">
              <div className="font-medium">{b.name}</div>
              <div className="text-sm mt-2">{JSON.stringify(b.employees)}</div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
