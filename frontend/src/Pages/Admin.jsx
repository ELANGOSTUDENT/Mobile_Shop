
import { useState, useEffect } from "react";
import AddService from "./Addservice";

const AdminDashboard = () => {
  const [services, setServices] = useState([]);
  const [repairRequests, setRepairRequests] = useState([]);

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

  const handleAddService = (service) => {
    fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    })
      .then((res) => res.json())
      .then((newService) => setServices([...services, newService]));
  };

  const handleDeleteService = (id) => {
    fetch(`/api/services/${id}`, { method: "DELETE" })
      .then(() => setServices(services.filter((service) => service.id !== id)));
  };

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
    <div>
      <h1>Admin Dashboard</h1>
      
      {/* Add Service Form */}
      <AddService onAdd={handleAddService} />

      {/* Service List */}
      <h2>Available Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id}>
            {service.name} - ${service.price} 
            <button onClick={() => handleDeleteService(service.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {/* Repair Requests Table */}
      <h2>Repair Requests</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Issue</th>
            <th>Status</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {repairRequests.map((req) => (
            <tr key={req.id}>
              <td>{req.id}</td>
              <td>{req.customer}</td>
              <td>{req.issue}</td>
              <td>{req.status}</td>
              <td>
                <select value={req.status} onChange={(e) => handleStatusChange(req.id, e.target.value)}>
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AdminDashboard;
