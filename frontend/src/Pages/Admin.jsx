import { useState, useEffect } from "react";
import AdminSidebar from "./AdminSidebar";
 import AdminDetails from "./Request";

const AdminDashboard = () => {
  const [view, setView] = useState("addService"); // Default view
  const [services, setServices] = useState([]);
  const [repairRequests, setRepairRequests] = useState([]);
  const [customers, setCustomers] = useState([]); // Add this line

// Fetch customers from backend
useEffect(() => {
  fetch("/api/customers") // Update API route if needed
    .then((res) => res.json())
    .then((data) => setCustomers(data))
    .catch((err) => console.error("Error fetching customers:", err));
}, []);


  // Fetch services from backend
  useEffect(() => {
    fetch("/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // Fetch repair requests from backend
  useEffect(() => {
    fetch("/api/repairs")
      .then((res) => res.json())
      .then((data) => setRepairRequests(data));
  }, []);

  // Add a new service
  const handleAddService = (service) => {
    fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((newService) => setServices([...services, newService]));
  };

  // Delete a service
  const handleDeleteService = (id) => {
    fetch(`/api/services/${id}`, { method: "DELETE" })
      .then(() => setServices(services.filter((service) => service.id !== id)));
  };

  // Update repair request status
  const handleStatusChange = (id, newStatus) => {
    fetch(`/api/repairs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: newStatus }),
    }).then(() =>
      setRepairRequests(
        repairRequests.map((req) =>
          req.id === id ? { ...req, status: newStatus } : req
        )
      )
    );
  };

  return (
    <div className="admin-container">
      {/* Sidebar Navigation */}
      <AdminSidebar onSelect={setView} />

      {/* Main Content */}
      <AdminDetails
        view={view}
        services={services}
        repairRequests={repairRequests}
        customers={customers}
        onAddService={handleAddService}
        onDeleteService={handleDeleteService}
        onStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default AdminDashboard;
