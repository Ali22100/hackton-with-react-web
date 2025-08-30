// src/pages/admin/AdminHome.jsx
import React from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import AdminDashboard from "../../components/dashboard/AdminDashboard.jsx";

export default function AdminHome() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Admin" />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <AdminDashboard />
        </main>
      </div>
    </div>
  );
}
