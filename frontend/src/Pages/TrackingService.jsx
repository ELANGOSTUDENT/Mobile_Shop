import { useState } from "react";
import PropTypes from "prop-types";
import "./TrackingService.css";

const TrackingService = ({ onTrack }) => {
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingId.trim() !== "") {
      onTrack(trackingId);
    }
  };

  return (
    <form className="tracking-form" onSubmit={handleSubmit}>
      <h2 className="tracking-title">Track Your Repair</h2>
      
      <input
        className="tracking-input"
        type="text"
        placeholder="Enter Tracking ID"
        value={trackingId}
        onChange={(e) => setTrackingId(e.target.value)}
        required
      />
      
      <button className="tracking-button" type="submit">
        Track
      </button>
    </form>
  );
};

TrackingService.propTypes = {
  onTrack: PropTypes.func.isRequired,
};

export default TrackingService;
