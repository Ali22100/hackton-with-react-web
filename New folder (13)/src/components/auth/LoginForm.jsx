import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";

function getRoleForUid(uid) {
  try {
    const raw = localStorage.getItem("role_map");
    if (!raw) return null;
    const map = JSON.parse(raw);
    return map?.[uid] || null;
  } catch {
    return null;
  }
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const role = getRoleForUid(cred.user.uid);

      if (role === "Admin") navigate("/admin");
      else if (role === "Manager") navigate("/manager");
      else navigate("/user");
    } catch (error) {
      console.error(error);
      setErr(error.code || "Login failed");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-8 rounded-xl shadow-lg bg-white">
      {/* Header Bar */}
   

      {err && <div className="text-red-500 mb-4 text-center">{err}</div>}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div className="relative">
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
            type="email"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
          />
        
        </div>

        {/* Password */}
        <div className="relative">
          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 bg-gray-50"
          />
          
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-transform transform hover:scale-105"
        >
          Login
        </button>
      </form>

      {/* Small Footer */}
      <p className="text-sm text-gray-500 text-center mt-6">
        © 2025 FastFood System
      </p>
    </div>
  );
}
