import { useState } from 'react';
import './Auth.css';
import { FaUser, FaLock } from "react-icons/fa";
//import back from "../assets/th.jpeg"


const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Data:', formData);
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>SIGN IN</h2>
        <FaUser className ="icon"/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <FaLock className ="icon"/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        
  
        <div className ="forgot-password">
          <label>Remember me<input 
          type="checkbox"/>
        </label>
        <a href ="#" className="forgot-password">Forgot password</a>
        </div>
        
        <button type="submit">Login</button>
        <p>Dont have an account?</p><a href="/register"> Register</a>
      </form>
    </div>
  );
};

export default Login;

