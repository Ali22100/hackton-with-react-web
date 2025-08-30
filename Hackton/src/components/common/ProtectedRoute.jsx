import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebaseConfig.jsx";

/**
 * Get the role of the current user from localStorage
 * @param {string} uid - User ID
 * @returns {string|null} - Role of the user
 */
function getStoredRole(uid) {
  try {
    const raw = localStorage.getItem("role_map");
    if (!raw) return null;

    const map = JSON.parse(raw);
    return map?.[uid] || null;
  } catch (error) {
    console.error("Error parsing role_map:", error);
    return null;
  }
}

/**
 * ProtectedRoute component to restrict access based on role
 * @param {ReactNode} children - Component to render if authorized
 * @param {string|string[]} allowedRole - Allowed role(s) for this route
 * @returns {ReactNode}
 */
export default function ProtectedRoute({ children, allowedRole }) {
  const user = auth.currentUser;

  // If user is not logged in, redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // Get user role from localStorage
  const role = getStoredRole(user.uid);

  // If no role restriction, allow access
  if (!allowedRole) return children;

  // Normalize allowedRole into array
  const allowed = Array.isArray(allowedRole) ? allowedRole : [allowedRole];

  // Check if user role is allowed (case-insensitive)
  if (allowed.some(a => a.toLowerCase() === (role || "").toLowerCase())) {
    return children;
  }

  // Redirect unauthorized users based on their role
  switch (role) {
    case "Admin":
      return <Navigate to="/admin" replace />;
    case "Manager":
      return <Navigate to="/manager" replace />;
    case "User":
      return <Navigate to="/user" replace />;
    default:
      return <Navigate to="/login" replace />;
  }
}
