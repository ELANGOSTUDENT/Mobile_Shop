import { useState } from "react";
import PropTypes from "prop-types";
import "./Adminaddservice.css";

const AdminAddService = ({ onAdd }) => {
    const [serviceName, setServiceName] = useState("");
    const [serviceDescription, setServiceDescription] = useState("");
    const [serviceCost, setServiceCost] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!serviceName || !serviceCost) {
        alert("Please enter service name and cost.");
        return;
      }
  
      const newService = {
        name: serviceName,
        description: serviceDescription,
        cost: parseFloat(serviceCost),
      };
  
      onAdd(newService);
      setServiceName("");
      setServiceDescription("");
      setServiceCost("");
    };
  
    return (
      <form className="admin-add-service-form" onSubmit={handleSubmit}>
        <h2 className="admin-add-service-title">Add New Service</h2>
  
        <input
          className="admin-add-service-input"
          type="text"
          placeholder="Service Name"
          value={serviceName}
          onChange={(e) => setServiceName(e.target.value)}
          required
        />
  
        <textarea
          className="admin-add-service-input"
          placeholder="Service Description (Optional)"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
        />
  
        <input
          className="admin-add-service-input"
          type="number"
          placeholder="Service Cost (₹)"
          value={serviceCost}
          onChange={(e) => setServiceCost(e.target.value)}
          required
        />
  
        <button className="admin-add-service-button" type="submit">
          Add Service
        </button>
      </form>
    );
  };
  
  AdminAddService.propTypes = {
    onAdd: PropTypes.func.isRequired,
  };
  
  export default AdminAddService;