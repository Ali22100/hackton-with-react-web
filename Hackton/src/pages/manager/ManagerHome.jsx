// src/pages/manager/ManagerHome.jsx
import React from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import ManagerDashboard from "../../components/dashboard/ManagerDashboard.jsx";

export default function ManagerHome() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="Manager" />
        <main className="flex-1 bg-gray-50 min-h-screen">
          <ManagerDashboard />
        </main>
      </div>
    </div>
  );
}
