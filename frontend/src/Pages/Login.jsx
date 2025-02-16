import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Auth.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/auth/login", { // ✅ Ensure this is your backend login API
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          navigate('/dashboard'); // ✅ Redirect to dashboard after login

        } else {
          setError(data.message || "Invalid credentials");
        }
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError("Something went wrong!");
      });
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>SIGN IN</h2>
        <FaUser className="icon" />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FaLock className="icon" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
        <p>Dont have an account? <a href="/register">Register</a></p>
      </form>
    </div>
  );
};

export default Login;
