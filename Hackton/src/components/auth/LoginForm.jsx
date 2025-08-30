import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

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
  <div className="login-form-container">
  {err && <div className="error-msg">{err}</div>}

  <form onSubmit={handleSubmit} className="auth-form">
    {/* Email */}
    <div className="input-group">
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </div>
      <input
        required
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-input"
      />
    </div>

    {/* Password */}
    <div className="input-group">
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      </div>
      <input
        required
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-input"
      />
    </div>

    {/* Submit Button */}
    <button type="submit" className="login-button">
      Login
    </button>
  </form>

  {/* Footer */}
  <p className="footer-text">© 2025 FastFood System</p>

  <style jsx>{`
    .login-form-container {
      width: 100%;
    }

    .error-msg {
      color: #dc2626;
      text-align: center;
      margin-bottom: 20px;
    }

    .auth-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .input-group {
      position: relative;
    }

    .input-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #ff3d00;
      z-index: 1;
    }

    .form-input {
      width: 100%;
      padding: 14px 15px 14px 45px;
      border-radius: 8px;
      border: 2px solid #ff3d00; /* Red border */
      font-size: 16px;
      background: #fff8e1; /* Light fast food bg */
      color: #333; /* Dark text */
      transition: all 0.3s ease;
    }

    .form-input:focus {
      outline: none;
      border-color: #ffc107; /* Yellow focus */
      box-shadow: 0 0 8px rgba(255, 193, 7, 0.7);
      background: #fff; /* Solid bg on focus */
    }

    .form-input::placeholder {
      color: #666; /* Dark placeholder */
    }

    .login-button {
      width: 100%;
      padding: 16px;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
      background: linear-gradient(45deg, #ff3d00, #ffc107);
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 4px 15px rgba(255, 61, 0, 0.4);
      margin-top: 10px;
      transition: all 0.3s ease;
    }

    .login-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255, 193, 7, 0.6);
    }

    .footer-text {
      text-align: center;
      color: #374151;
      font-size: 14px;
      margin-top: 20px;
    }
  `}</style>
</div>

  );
}
