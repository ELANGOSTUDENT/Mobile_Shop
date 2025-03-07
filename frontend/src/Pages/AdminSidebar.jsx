import { FiGrid,  FiLogOut } from "react-icons/fi";
import './AdminSidebar.css';
import PropTypes from "prop-types";

const AdminSidebar = ({ onSelect }) => {
  return (
    <div className="sidebar">
    <h2>Admin </h2>
    <ul>
      <li onClick={() => onSelect("dashboard")}>
        <FiGrid /> Dashboard
      </li>
      <li onClick={() => onSelect ("product")}>
        Add product
      </li>
      <li onClick={() => onSelect("addService")}>
         Add New Service
      </li>
      <li onClick={() => onSelect("customers")}>
        Customers
      </li>
      <li onClick={() => onSelect("customers")}>
         Service Request
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
