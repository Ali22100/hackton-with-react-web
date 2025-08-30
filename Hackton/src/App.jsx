// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* Auth pages */
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignupPage from "./pages/auth/SignupPage.jsx";

/* Admin pages */
import AdminHome from "./pages/admin/AdminHome.jsx";
import BranchManagement from "./pages/admin/AdminBranchManagement.jsx";
import ProductManagement from "./pages/admin/ProductManagement.jsx";
import InventoryManagement from "./pages/admin/InventoryManagement.jsx";
import EmployeeList from "./pages/admin/EmployeeList.jsx";

/* Manager pages */
import ManagerHome from "./pages/manager/ManagerHome.jsx";
import BranchInventory from "./pages/manager/BranchInventory.jsx";
import EmployeeManagement from "./pages/manager/EmployeeManagement.jsx";
import ManageOrders from "./pages/manager/ManageOrders.jsx";
import Reviews from "./pages/manager/Reviews.jsx";

/* User pages */
import UserHome from "./pages/user/UserHome.jsx";
import ProductList from "./pages/user/ProductList.jsx";
import ReviewPage from "./pages/user/ReviewPage.jsx";
import PlaceOrderPage from "./pages/user/OrderPage.jsx";
import MyOrders from "./pages/user/MyOrders.jsx";

import NotFound from "./pages/NotFound.jsx";

/* ProtectedRoute */
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";

/* ✅ Order Context */
import { OrderProvider } from "./context/OrderContext.jsx";
import { AdminManageOrders } from "./pages/admin/ManageOrders.jsx";
import { CustomerReviews } from "./pages/admin/CustomerReviews.jsx";
import SalesReport from "./pages/admin/SalesReport.jsx";

export default function App() {
  return (
    <Router>
      {/* ✅ Wrap all routes with OrderProvider */}
      <OrderProvider>
        <Routes>
          {/* Show Signup first as requested */}
          <Route path="/" element={<SignupPage />} />
         <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Admin routes */}
          <Route path="/admin" element={<ProtectedRoute allowedRole="Admin"><AdminHome /></ProtectedRoute>} />
          <Route path="/admin/branches" element={<ProtectedRoute allowedRole="Admin"><BranchManagement /></ProtectedRoute>} />
          <Route path="/admin/products" element={<ProtectedRoute allowedRole="Admin"><ProductManagement /></ProtectedRoute>} />
          <Route path="/admin/inventory" element={<ProtectedRoute allowedRole="Admin"><InventoryManagement /></ProtectedRoute>} />
          <Route path="/admin/employees" element={<ProtectedRoute allowedRole="Admin"><EmployeeList /></ProtectedRoute>} />
           <Route path="/admin/orders" element={<ProtectedRoute allowedRole="Admin"><AdminManageOrders /></ProtectedRoute>} />
          <Route path="/admin/reviews" element={<ProtectedRoute allowedRole="Admin"><CustomerReviews/></ProtectedRoute>} />
          <Route path="/admin/sales" element={<ProtectedRoute allowedRole="Admin"><SalesReport /></ProtectedRoute>} />

          {/* Manager routes */}
          <Route path="/manager" element={<ProtectedRoute allowedRole="Manager"><ManagerHome /></ProtectedRoute>} />
          <Route path="/manager/inventory" element={<ProtectedRoute allowedRole="Manager"><BranchInventory /></ProtectedRoute>} />
          <Route path="/manager/employees" element={<ProtectedRoute allowedRole="Manager"><EmployeeManagement /></ProtectedRoute>} />
          <Route path="/manager/orders" element={<ProtectedRoute allowedRole="Manager"><ManageOrders /></ProtectedRoute>} />
          <Route path="/manager/reviews" element={<ProtectedRoute allowedRole="Manager"><Reviews /></ProtectedRoute>} />

          {/* User routes */}
          <Route path="/user" element={<ProtectedRoute allowedRole="User"><UserHome /></ProtectedRoute>} />
          <Route path="/products" element={<ProtectedRoute allowedRole={["User","Manager","Admin"]}><ProductList /></ProtectedRoute>} />
          <Route path="/order" element={<ProtectedRoute allowedRole="User"><PlaceOrderPage /></ProtectedRoute>} />
          <Route path="/review" element={<ProtectedRoute allowedRole="User"><ReviewPage /></ProtectedRoute>} />
          <Route path="/my-orders" element={<ProtectedRoute allowedRole="User"><MyOrders /></ProtectedRoute>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </OrderProvider>
    </Router>
  );
}
