import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user", // Default role is set to "user"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://localhost:7107/api/Authentication/register",
        formData
      );
      if (response.status === 200) {
        alert("Registration successful. Please login.");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center vh-100 bg-light"
      style={{
        background: "linear-gradient(135deg, #e9ecef, #f8f9fa)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "15px",
          border: "none",
          background: "linear-gradient(135deg, #ffffff, #f8f9fa)",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Create Your Account</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your username"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your email"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="Enter your password"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-control"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 py-2"
            style={{
              borderRadius: "10px",
              background: "linear-gradient(135deg, #007bff, #0056b3)",
              border: "none",
              color: "white",
            }}
          >
            Register
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-muted">
            Already have an account?{" "}
            <a href="/login" className="text-primary text-decoration-none">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;

{/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "user || admin", // Default role can be "user" or "admin"
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7107/api/Authentication/register", formData);
      if (response.status === 200) {
        alert("Registration successful. Please login.");
        navigate("/login"); // Redirect to login page after successful registration
      }
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm p-4">
            <h2 className="text-center mb-4">Create Account</h2>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="form-control"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100 py-2">
                Register
              </button>
            </form>
            <div className="text-center mt-3">
              <p>
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">Login here</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;*/}
