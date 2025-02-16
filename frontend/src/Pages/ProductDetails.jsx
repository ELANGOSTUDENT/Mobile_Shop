import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductDetails = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return navigate("/login");

    fetch("http://localhost:5000/api/add-first-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id, product: { name: productName, category: productCategory } }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        navigate("/add-product"); // Redirect to add more products
      });
  };

  return (
    <div>
      <h2>Enter Your First Product</h2>
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="text" placeholder="Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
      <button onClick={handleSubmit}>Save Product</button>
    </div>
  );
};

export default ProductDetails;
