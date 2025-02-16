import { FiGrid, FiTool, FiUsers, FiLogOut } from "react-icons/fi";
import './Admin.css';
import PropTypes from "prop-types";

const AdminSidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
    <h2>Admin </h2>
    <ul>
      <li onClick={() => onSelect("dashboard")}>
        <FiGrid /> Dashboard
      </li>
      <li onClick={() => onSelect("addService")}>
        <FiTool /> Add New Service
      </li>
      <li onClick={() => onSelect("customers")}>
        <FiUsers /> Customers
      </li>
    </ul>
      <button className="logout-button">
        <FiLogOut /> Logout
      </button>
    </div>
  );
};
// Prop validation
AdminSidebar.propTypes = {
  onSelect: PropTypes.func.isRequired, // Ensure `onSelect` is passed
};
export default AdminSidebar;
