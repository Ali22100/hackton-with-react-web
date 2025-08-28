import React from "react";
import LoginForm from "../../components/auth/LoginForm.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="login-wrapper">
      <div className="login-box">
        {/* Header */}
        <div className="login-header">
          <h2>🍔 FastFood Login</h2>
        
        </div>

        {/* Form */}
        <LoginForm />

        {/* Redirect */}
        <p className="signup-redirect">
          New account create?
          <Link to="/" className="signup-link">
            Sign up
          </Link>
        </p>
      </div>

      {/* Styles */}
      <style jsx global>{`
        /* poori body ka background */
        html,
        body {
          height: 100%;
          margin: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #dc2626, #facc15);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-wrapper {
          width: 140%;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .login-box {
          width: 100%;
          max-width: 450px;
          background:white;
          padding: 35px 25px;
          border-radius: 16px;
          border: 2px solid #facc15;
          color: #1f2937;
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.25);
          animation: fadeIn 0.7s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .login-header {
          text-align: center;
          margin-bottom: 25px;
        }

        .login-header h2 {
          font-size: 28px;
          font-weight: 800;
          color: #dc2626;
          text-shadow: 1px 1px 0 #facc15;
          margin-bottom: 8px;
        }

        .login-header p {
          color: #6b7280;
          font-size: 15px;
        }

        input,
        button {
          width: 100%;
          padding: 12px 14px;
          border-radius: 8px;
          border: 1px solid #fcd34d;
          outline: none;
          font-size: 15px;
          margin-bottom: 15px;
          transition: all 0.3s;
        }

        input:focus {
          border-color: #dc2626;
          box-shadow: 0 0 6px rgba(220, 38, 38, 0.4);
        }

        button {
          background: #dc2626;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          transition: all 0.3s;
        }

        button:hover {
          background: #b91c1c;
        }

        .signup-redirect {
          text-align: center;
          margin-top: 20px;
          color: #374151;
          font-size: 15px;
        }

        .signup-link {
          color: #dc2626;
          font-weight: 700;
          margin-left: 5px;
          text-decoration: none;
          transition: 0.3s;
        }

        .signup-link:hover {
          text-decoration: underline;
          color: #b91c1c;
        }

        @media (max-width: 480px) {
          .login-box {
            padding: 25px 18px;
          }

          .login-header h2 {
            font-size: 24px;
          }
        }
      `}</style>
    </div>
  );
}
