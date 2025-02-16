import PropTypes from "prop-types";
import AdminAddService from "./Adminaddservice";
import CustomerList from "./CustomerList";

const AdminDetails = ({ view, services, repairRequests, customers, onAddService, onDeleteService, onStatusChange }) => {
  return (
    <div className="content">
      {view === "addService" && (
        <div>
          <h2>Add New Service</h2>
          <AdminAddService onAdd={onAddService} />
        </div>
      )}

      {view === "repairRequests" && (
        <div>
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
                    <select value={req.status} onChange={(e) => onStatusChange(req.id, e.target.value)}>
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
      )}

      {view === "customers" && <CustomerList customers={customers} />}
    </div>
  );
};

// PropTypes validation
AdminDetails.propTypes = {
  view: PropTypes.string.isRequired,
  services: PropTypes.array.isRequired,
  repairRequests: PropTypes.array.isRequired,
  customers: PropTypes.array.isRequired,
  onAddService: PropTypes.func.isRequired,
  onDeleteService: PropTypes.func.isRequired,
  onStatusChange: PropTypes.func.isRequired,
};

export default AdminDetails;
