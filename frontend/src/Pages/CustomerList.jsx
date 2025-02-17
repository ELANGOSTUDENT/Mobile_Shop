import PropTypes from "prop-types";

const CustomerList = ({ customers }) => {
  return (
    <div>
      <h2>All Customers</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

CustomerList.propTypes = {
  customers: PropTypes.array.isRequired,
};

export default CustomerList;
