import { useState } from 'react';
import './Auth.css'; // Import Auth.css

const Register = () => {
  const [formData, setFormData] = useState({ 
    name: '',  // ✅ Use 'name' instead of 'username'
    email: '', 
    phone: '',  
    password: '' 
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => 
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
  const validatePhone = (phone) => /^[6-9]\d{9}$/.test(phone);  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Invalid email format. Must contain '@' and '.'");
      return;
    }
    if (!validatePhone(formData.phone)) {
      setError("Invalid phone number. Must be 10 digits and start with 6-9.");
      return;
    }
    if (!validatePassword(formData.password)) {
      setError("Password must have 8+ characters, 1 uppercase, 1 lowercase, 1 number, and 1 special character.");
      return;
    }

    setError(""); 
    setSuccess(""); // Clear old messages

    console.log('Register Data:', formData);

    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {  // ✅ Fixed API URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Response from server:", data); // ✅ Debugging

      if (response.ok) {
        setSuccess("Registration successful! Please login.");
      } else {
        setError(data.message || "Registration failed.");
      }
    } catch (err) {
      console.error("Registration failed:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>SIGN UP</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          maxLength="10"
          pattern="[6-9]{1}[0-9]{9}"
          title="Phone number must be 10 digits and start with 6-9"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Register</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Register;
