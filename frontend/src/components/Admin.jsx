
import AddProduct from "./Addproduct";
import AddService from "./Addservice";
//import ProductsList from "./ProductsList";
//import ServicesList from "./ServicesList";

const AdminDashboard = () => {
  const handleAddProduct = (product) => {
    fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };
  const handleAddService = (service) => {
    fetch("/api/services", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(service),
    });
  };

  

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <AddProduct onAdd={handleAddProduct} />
      <AddService onAdd={handleAddService} />
    
    </div>
  );
};

export default AdminDashboard;
