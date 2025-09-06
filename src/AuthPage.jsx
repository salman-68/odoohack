import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({ username: "", email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignupChange = (e) => setSignupData({ ...signupData, [e.target.name]: e.target.value });
  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === signupData.email)) {
      setMessage("Email already exists. Please login.");
      return;
    }
    users.push(signupData);
    localStorage.setItem("users", JSON.stringify(users));
    setMessage("Signup successful! Please login.");
    setSignupData({ username: "", email: "", password: "" });
    setIsLogin(true);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/"); // redirect to home page
    } else {
      setMessage("Invalid email or password.");
    }
  };

  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f6f8",
        fontFamily: "Arial, sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          backgroundColor: "#fff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem", color: "#333" }}>
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {/* Toggle */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <button
            onClick={() => { setIsLogin(true); setMessage(""); }}
            style={{
              padding: "0.5rem 1rem",
              marginRight: "0.5rem",
              backgroundColor: isLogin ? "#198754" : "#e0e0e0",
              color: isLogin ? "#fff" : "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Login
          </button>
          <button
            onClick={() => { setIsLogin(false); setMessage(""); }}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: !isLogin ? "#198754" : "#e0e0e0",
              color: !isLogin ? "#fff" : "#333",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </div>

        {/* Message */}
        {message && (
          <p
            style={{
              textAlign: "center",
              color: message.includes("success") ? "green" : "red",
              marginBottom: "1rem",
              fontWeight: "500",
            }}
          >
            {message}
          </p>
        )}

        {/* Forms */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginData.email}
              onChange={handleLoginChange}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "1rem" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginData.password}
              onChange={handleLoginChange}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "1rem" }}
            />
            <button
              type="submit"
              style={{ width: "100%", padding: "0.75rem", backgroundColor: "#198754", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={signupData.username}
              onChange={handleSignupChange}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "1rem" }}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signupData.email}
              onChange={handleSignupChange}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "1rem" }}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signupData.password}
              onChange={handleSignupChange}
              required
              style={{ width: "100%", padding: "0.75rem", borderRadius: "5px", border: "1px solid #ccc", marginBottom: "1rem" }}
            />
            <button
              type="submit"
              style={{ width: "100%", padding: "0.75rem", backgroundColor: "#198754", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthPage;
