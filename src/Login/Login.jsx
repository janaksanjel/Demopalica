import React, { useState, useEffect } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showpass, setShowpass] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.body.classList.add("dark-mode");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", !darkMode);
  };

  const togglePassword = () => {
    setShowpass(!showpass);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please fill out all fields!");
      return;
    }
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <>
      {/* Snowflakes */}
      {[...Array(20)].map((_, i) => (
        <div key={i} className="snowflake">
          ❅
        </div>
      ))}

      <div className="container">
        {/* Dark Mode Toggle */}
        <div className="dark-mode-toggle">
          <button onClick={toggleDarkMode}>
            {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>

        {/* Login Form */}
        <div className="loginrig">
          <button>डिजाइनर दर्ता</button>
        </div>
        <div className="login-form">
          <img
            src="https://gwp.nirc.com.np/images/logo.png"
            alt="Nepali Logo"
            className="logo"
          />
          <h2>आउनु भएकोमा स्वागत छ!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">प्रयोगकर्तानाम</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                placeholder="प्रयोगकर्तानाम प्रविष्ट गर्नुहोस्"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">पासवर्ड</label>
              <input
                type={showpass ? "text" : "password"}
                id="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="पासवर्ड प्रविष्ट गर्नुहोस्"
                required
              />
              <span className="password-toggle" onClick={togglePassword}>
                {showpass ? "🙈" : "👁️"}
              </span>
            </div>
            <div className="logbtn">
              <button type="submit">लग-इन</button>
            </div>
          </form>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
      </div>
    </>
  );
}

export default Login;
