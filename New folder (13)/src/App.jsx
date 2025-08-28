// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

/* Auth pages */
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";

/* Admin pages */
import AdminHome from "./pages/admin/AdminHome.jsx";
import BranchManagement from "./pages/admin/BranchManagement.jsx";
import ProductManagement from "./pages/admin/ProductManagement.jsx";
import InventoryManagement from "./pages/admin/InventoryManagement.jsx";
import EmployeeList from "./pages/admin/EmployeeList.jsx";

/* Manager pages */
import ManagerHome from "./pages/manager/ManagerHome.jsx";
import BranchInventory from "./pages/manager/BranchInventory.jsx";
import EmployeeManagement from "./pages/manager/EmployeeManagement.jsx";

/* User pages */
import UserHome from "./pages/user/UserHome.jsx";
import ProductList from "./pages/user/ProductList.jsx";
import OrderPage from "./pages/user/OrderPage.jsx";
import ReviewPage from "./pages/user/ReviewPage.jsx";

import NotFound from "./pages/NotFound.jsx";

/* ProtectedRoute component */
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import ManageOrders from "./pages/manager/ManageOrders.jsx";
import Reviews from "./pages/manager/Reviews.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Show Signup first as requested */}
        <Route path="/" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Admin routes */}
        <Route path="/admin" element={<ProtectedRoute allowedRole="Admin"><AdminHome /></ProtectedRoute>} />
        <Route path="/admin/branches" element={<ProtectedRoute allowedRole="Admin"><BranchManagement /></ProtectedRoute>} />
        <Route path="/admin/products" element={<ProtectedRoute allowedRole="Admin"><ProductManagement /></ProtectedRoute>} />
        <Route path="/admin/inventory" element={<ProtectedRoute allowedRole="Admin"><InventoryManagement /></ProtectedRoute>} />
        <Route path="/admin/employees" element={<ProtectedRoute allowedRole="Admin"><EmployeeList /></ProtectedRoute>} />

        {/* Manager routes */}
        <Route path="/manager" element={<ProtectedRoute allowedRole="Manager"><ManagerHome /></ProtectedRoute>} />
        <Route path="/manager/inventory" element={<ProtectedRoute allowedRole="Manager"><BranchInventory /></ProtectedRoute>} />
        <Route path="/manager/employees" element={<ProtectedRoute allowedRole="Manager"><EmployeeManagement /></ProtectedRoute>} />
        <Route path="/manager/orders" element={<ProtectedRoute allowedRole="Manager"><ManageOrders /></ProtectedRoute>} />
       <Route path="/manager/reviews" element={<ProtectedRoute allowedRole="Manager"><Reviews /></ProtectedRoute>} />

        {/* User routes */}
        <Route path="/user" element={<ProtectedRoute allowedRole="User"><UserHome /></ProtectedRoute>} />
        <Route path="/products" element={<ProtectedRoute allowedRole={["User","Manager","Admin"]}><ProductList /></ProtectedRoute>} />
        <Route path="/order" element={<ProtectedRoute allowedRole="User"><OrderPage /></ProtectedRoute>} />
        <Route path="/review" element={<ProtectedRoute allowedRole="User"><ReviewPage /></ProtectedRoute>} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
