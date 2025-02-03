import { useState } from "react";
import TrackingService from "./TrackingService";

const App = () => {
  const [status, setStatus] = useState("");

  const trackService = async (trackingId) => {
    // Simulating API call
    const repairStatus = {
      "12345": "In Progress",
      "67890": "Completed",
      "54321": "Pending",
    };

    setStatus(repairStatus[trackingId] || "Invalid Tracking ID");
  };

  return (
    <div>
      <TrackingService onTrack={trackService} />
      {status && <p className="tracking-result">Status: {status}</p>}
    </div>
  );
};

export default App;
