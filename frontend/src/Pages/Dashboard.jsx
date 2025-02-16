import { useState } from "react";
import TrackingService from "./TrackingService";
import AddService from "./Addservice";

const App = () => {
  const [status, setStatus] = useState("");
  const handleAddService = (service) => {
    fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((newService) => setServices([...services, newService]));
  };
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
      <AddService onAdd={handleAddService} />
      <TrackingService onTrack={trackService} />
      {status && <p className="tracking-result">Status: {status}</p>}
    </div>
  );
};

export default App;
