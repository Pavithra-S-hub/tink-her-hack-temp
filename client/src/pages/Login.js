import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) {
      alert("Login Successful ✅");
      navigate("/dashboard");
    } else {
      alert("Please enter all fields ❌");
    }
  };

  return (
    <div
      style={{
        background: "#CAD183",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "15px",
          width: "350px",
          textAlign: "center",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontFamily: "cursive",
            color: "#66023C",
            marginBottom: "10px",
          }}
        >
          Digital Lost & Found
        </h1>

        <h2 style={{ marginBottom: "20px" }}>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              margin: "10px 0",
              borderRadius: "8px",
              border: "1px solid #ccc",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              background: "#66023C",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Login
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Don’t have an account?
          <span
            onClick={() => navigate("/register")}
            style={{
              color: "#66023C",
              cursor: "pointer",
              marginLeft: "5px",
              fontWeight: "bold",
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
