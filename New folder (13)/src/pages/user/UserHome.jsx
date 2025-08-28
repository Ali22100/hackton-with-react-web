// src/pages/user/UserHome.jsx
import React from "react";
import Header from "../../components/common/Header.jsx";
import Sidebar from "../../components/common/Sidebar.jsx";
import UserDashboard from "../../components/dashboard/UserDashboard.jsx";

export default function UserHome() {
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar role="User" />
        <main className="flex-1  min-h-screen">
          <UserDashboard />
        </main>
      </div>
    </div>
  );
}
