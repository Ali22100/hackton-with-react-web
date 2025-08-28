// src/components/dashboard/UserDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function UserDashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Customer Home</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/products" className="bg-white p-4 rounded shadow">Browse Products</Link>
        <Link to="/order" className="bg-white p-4 rounded shadow">Place Order</Link>
      </div>
    </div>
  );
}
