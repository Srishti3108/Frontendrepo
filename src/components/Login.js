import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7107/api/Authentication/login", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token); // Save JWT token for future requests
      if (role === "user") navigate("/regular"); // Navigate to dashboard after successful login
      else navigate("/admin");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100 bg-light">
      <div
        className="card shadow-lg p-4"
        style={{
          maxWidth: "400px",
          width: "100%",
          borderRadius: "15px",
          border: "none",
          background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        }}
      >
        <h2 className="text-center mb-4 text-primary">Welcome Back</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              placeholder="Enter your username"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
              style={{
                backgroundColor: "#f1f3f5",
                border: "1px solid #ced4da",
                borderRadius: "10px",
              }}
            />
          </div>
          <div className="form-group mt-3">
            <label className="form-label">Role</label>
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
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
            className="btn btn-primary w-100 mt-4"
            style={{
              borderRadius: "10px",
              background: "linear-gradient(135deg, #007bff, #0056b3)",
              border: "none",
              color: "white",
            }}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-3">
          <p className="text-muted">
            Don't have an account?{" "}
            <a href="/register" className="text-primary text-decoration-none">Register here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

{/*import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7107/api/Authentication/login", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token); // Save JWT token for future requests
      if(role==="user")
      navigate("/regular"); // Navigate to dashboard after successful login
    else{
      navigate("/admin");
    }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
                <label className="form-label">Role</label>
                <select
                  name="role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="form-control"
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
        <button type="submit" className="btn btn-primary mt-3">
          Login
        </button>
      </form>
      <div className="text-center mt-3">
              <p>
                Don't have an account?{" "}
                <a href="/register" className="text-decoration-none">Register here</a>
              </p>
            </div>
    </div>
  );
};

export default Login;*/}
