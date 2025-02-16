import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Check if user is logged in

  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="admin" className="nav-link">Admin</Link>
        {user && ( // Show Add Product only if user is logged in
          <Link to="/add-product" className="nav-link">Add Product</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;