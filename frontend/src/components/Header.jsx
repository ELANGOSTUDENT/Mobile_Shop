import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); // Check login status

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user from localStorage
    navigate("/"); // Redirect to Home after logout
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        {!user ? (
          <>
            <Link to="/register" className="nav-link">Register</Link>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        ) : (
          <>
            <Link to="/add-product" className="nav-link">Add Product</Link>
            <button onClick={handleLogout} className="nav-link logout-btn">Logout</button>
          </>
        )}
        <Link to="/admin" className="nav-link">Admin</Link>
      </nav>
    </header>
  );
};

export default Header;
