import React from "react";
import LoginForm from "../../components/auth/LoginForm.jsx";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (

 <div className="login-page">
      <div className="login-box">
  <h2 className="login-title">🍔 FastFood Login</h2>
  <LoginForm />

  <p className="login-redirect">
    New account create?
    <Link to="/signup" className="signup-link">
      Sign up
    </Link>
  </p>
      </div>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ff0000, #ffcc00);
          padding: 20px;
        }

        .login-box {
          width: 100%;
          max-width: 450px;
          padding: 35px 25px;
          border-radius: 20px;
          background: #fff;
          color: #333;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
          animation: popIn 0.6s ease-out;
        }

        @keyframes popIn {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .signup-title {
          text-align: center;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 25px;
          color: #ff0000;
          text-shadow: 1px 1px 0 #ffcc00;
        }

        input,
        button {
          width: 100%;
          padding: 12px 14px;
          border-radius: 10px;
          border: 2px solid #ffcc00;
          margin-bottom: 15px;
          outline: none;
          font-size: 15px;
          transition: all 0.3s;
        }

        input {
          background: #fff8e1;
        }

        input:focus {
          border-color: #ff0000;
          box-shadow: 0 0 6px rgba(255, 0, 0, 0.4);
        }

        button {
          background: #ff0000;
          border: none;
          color: #fff;
          font-weight: 700;
          cursor: pointer;
          letter-spacing: 1px;
        }

        button:hover {
          background: #cc0000;
        }

     .login-title {
      text-align: center;
      font-size: 28px;
      font-weight: 800;
      margin-bottom: 25px;
      color: #ff3d00; /* Orange-Red */
      text-shadow: 0 0 8px rgba(255, 61, 0, 0.5);
    }

    .login-redirect {
      text-align: center;
      margin-top: 20px;
      font-size: 16px;
      color: #ffc107; /* Yellow-orange */
    }

    .signup-link {
      color: #ff3d00;
      font-weight: 700;
      margin-left: 5px;
      text-decoration: none;
      transition: 0.3s;
    }

    .signup-link:hover {
      color: #ff6f00;
      text-decoration: underline;
    }
        }
      `}</style>
    </div>
  );
}
