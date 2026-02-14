import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log("Registered User:", formData);

    alert("Registration Successful!");

    // Redirect to dashboard after register
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        backgroundColor: "#CAD183",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      {/* PAGE TITLE */}
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20px",
          marginBottom: "10px",
          color: "#66023C",
          fontFamily: "'Lobster', cursive",
          fontSize: "45px",
        }}
      >
        Digital Lost & Found System
      </h1>

      {/* REGISTER CARD */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div style={cardStyle}>
          <h2 style={headingStyle}>
            User Register
          </h2>

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <label style={labelStyle}>
              Full Name
            </label><br />
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br /><br />

            {/* Email */}
            <label style={labelStyle}>
              Email
            </label><br />
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br /><br />

            {/* Password */}
            <label style={labelStyle}>
              Password
            </label><br />
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br /><br />

            {/* Confirm Password */}
            <label style={labelStyle}>
              Confirm Password
            </label><br />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Re-enter password"
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <br /><br />

            {/* Submit */}
            <button style={buttonStyle}>
              Register
            </button>

          </form>

          <br />

          <p>
            Already have an account?{" "}
            <Link
              to="/"
              style={{ color: "#66023C", fontWeight: "bold" }}
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

/* STYLES */

const cardStyle = {
  backgroundColor: "white",
  padding: "40px",
  borderRadius: "15px",
  width: "350px",
  boxShadow: "0 0 15px rgba(0,0,0,0.2)",
  textAlign: "center",
};

const headingStyle = {
  fontFamily: "'Lobster', cursive",
  color: "#66023C",
  fontSize: "32px",
};

const labelStyle = {
  fontFamily: "'Lobster', cursive",
  color: "#66023C",
  fontSize: "20px",
};

const inputStyle = {
  width: "90%",
  padding: "8px",
  borderRadius: "8px",
  border: "1px solid #66023C",
  outline: "none",
};

const buttonStyle = {
  backgroundColor: "#66023C",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontFamily: "'Lobster', cursive",
  fontSize: "18px",
};

export default Register;
