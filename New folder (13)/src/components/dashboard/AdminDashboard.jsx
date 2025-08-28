
import React from "react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/admin/products" className="bg-white p-4 rounded shadow">Manage Products</Link>
        <Link to="/admin/branches" className="bg-white p-4 rounded shadow">Manage Branches</Link>
        <Link to="/admin/inventory" className="bg-white p-4 rounded shadow">Inventory</Link>
      </div>
    </div>
  );
}
