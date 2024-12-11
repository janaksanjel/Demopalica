import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");


  const navigate = useNavigate();

  // Show/Hide password toggle
  const togglePassword = () => {
    setShowPass(!showPass);
  };

  // Handle input changes
  const handleInputChange = (setter) => (event) => {
    setter(event.target.value);
    setError(""); // Clear error when typing
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setError("प्रयोगकर्तानाम र पासवर्ड आवश्यक छ!");
      return;
    }

    // Dummy login (replace with real API call)
    if (username === "0" && password === "0") {
      console.log("Logged in successfully!");
      navigate("/Chart");
    } else {
      setError("अवैध प्रयोगकर्तानाम वा पासवर्ड।");
    }
  };

  return (
    <>
    
      <div className="container">
        {/* Dark Mode Toggle */}
        <DarkMode />

        {/* Snowflake animation */}
        {[...Array(20)].map((_, i) => (
          <div key={i} className="snowflake">
            ❅
          </div>
        ))}

        {/* Designer Registration Button */}
        <div className="loginrig">
          <button>डिजाइनर दर्ता</button>
        </div>

        {/* Login Form */}
        <div className="login-form">
          <img
            src="https://gwp.nirc.com.np/images/logo.png"
            alt="Nepali Logo"
            className="logo"
          />
          <h2>आउनु भएकोमा स्वागत छ!</h2>
          {error && <p className="error">{error}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">प्रयोगकर्तानाम</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleInputChange(setUsername)}
                placeholder="प्रयोगकर्तानाम प्रविष्ट गर्नुहोस्"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">पासवर्ड</label>
              <input
                type={showPass ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleInputChange(setPassword)}
                placeholder="पासवर्ड प्रविष्ट गर्नुहोस्"
                required
              />
              <span className="password-toggle" onClick={togglePassword}>
                {showPass ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="logbtn">
              <button type="submit">लग-इन</button>
            </div>
          </form>
          <Link to="/forgot-password" className="forgot-password">
            Forgot Password?
          </Link>
        </div>
      </div>
    </>
  );
}

export default Login;
