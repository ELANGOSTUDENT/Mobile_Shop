import { useState } from "react";
import PropTypes from "prop-types";
import "./Addservice.css";

const AddService = ({ onAdd }) => {
  const [deviceType, setDeviceType] = useState("");
  const [issue, setIssue] = useState("");
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [appointmentDate, setAppointmentDate] = useState("");

  const issueCostMapping = {
    "Screen Replacement": 3000,
    "Battery Issue": 1500,
    "Water Damage": 2000,
    "Software Issue": 1000,
  };

  const handleIssueChange = (e) => {
    const selectedIssue = e.target.value;
    setIssue(selectedIssue);
    setEstimatedCost(issueCostMapping[selectedIssue] || 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = { deviceType, issue, estimatedCost, appointmentDate };
    onAdd(service);
    setDeviceType("");
    setIssue("");
    setEstimatedCost(0);
    setAppointmentDate("");
  };

  return (
    <form className="add-service-form" onSubmit={handleSubmit}>
      <h2 className="add-service-title">Book Repair Service</h2>

      <select
        className="add-service-input"
        value={deviceType}
        onChange={(e) => setDeviceType(e.target.value)}
        required
      >
        <option value="">Select Device Type</option>
        <option value="Mobile">Mobile</option>
        <option value="Tablet">Tablet</option>
        <option value="Laptop">Laptop</option>
      </select>

      <select
        className="add-service-input"
        value={issue}
        onChange={handleIssueChange}
        required
      >
        <option value="">Select Issue</option>
        {Object.keys(issueCostMapping).map((key) => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
      </select>

      <input
        className="add-service-input"
        type="text"
        value={`Estimated Cost: ₹${estimatedCost}`}
        readOnly
      />

      <input
        className="add-service-input"
        type="datetime-local"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        required
      />

      <button className="add-service-button" type="submit">
        Book Service
      </button>
    </form>
  );
};

// Add PropTypes validation for onAdd
AddService.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddService;
