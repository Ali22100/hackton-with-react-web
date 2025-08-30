
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig.jsx";
import { useNavigate } from "react-router-dom";


function saveRole(uid, role) {
  try {
    const raw = localStorage.getItem("role_map");
    const map = raw ? JSON.parse(raw) : {};
    map[uid] = role;
    localStorage.setItem("role_map", JSON.stringify(map));
  } catch (err) {
    console.error("saveRole failed", err);
  }
}

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); 
  const [info, setInfo] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setInfo("");
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      saveRole(cred.user.uid, role);
      setInfo("Account created. Redirecting to login...");
      setTimeout(() => navigate("/login"), 800);
    } catch (err) {
      console.error(err);
      setInfo(err.message || "Signup failed");
    }
  };

  return (
  <div className="">
  <h2 className="signup-title">Sign Up</h2>
  {info && <div className="info-message">{info}</div>}
  <form onSubmit={handleSubmit} className="auth-form">
    <div className="input-group">
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
        </svg>
      </div>
      <input 
        required 
        value={email} 
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder="Email" 
        type="email"
        className="form-input" 
      />
    </div>
    
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
        value={password} 
        onChange={(e)=>setPassword(e.target.value)} 
        placeholder="Password (min 6)" 
        className="form-input" 
      />
    </div>
    
    <div className="input-group">
      <div className="input-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      </div>
      <select 
        value={role} 
        onChange={(e)=>setRole(e.target.value)} 
        className="form-input form-select"
      >
        <option value="User">User (Customer)</option>
        <option value="Manager">Branch Manager</option>
        <option value="Admin">Admin (Head Office)</option>
      </select>
    </div>
    
    <button type="submit" className="signup-button">
      Sign Up
    </button>
  </form>

<style jsx>{`
  .signup-form-container {
    width: 100%;
  }

  .signup-title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 28px;
    font-weight: 600;
    color: #ff3d00; /* Fast food red */
    text-shadow: 0 0 8px rgba(255, 61, 0, 0.5);
  }

  .info-message {
    margin-bottom: 20px;
    padding: 10px;
    background: rgba(255, 193, 7, 0.15);
    color: #ffc107;
    border-radius: 6px;
    text-align: center;
    font-size: 14px;
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
  background: rgba(255, 255, 255, 0.9); /* Light bg */
  color: #333; /* Dark text */
  font-size: 16px;
  transition: all 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #ffc107; /* Yellow focus */
  box-shadow: 0 0 8px rgba(255, 193, 7, 0.7);
  background: rgba(255, 255, 255, 1); /* Solid bg on focus */
}

.form-input::placeholder {
  color: #666; /* Dark placeholder */
}

  .signup-button {
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(45deg, #ff3d00, #ffc107);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 61, 0, 0.4);
    margin-top: 10px;
  }

  .signup-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(255, 193, 7, 0.6);
  }
`}</style>

</div>
  );
}
