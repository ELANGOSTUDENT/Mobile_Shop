import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return navigate("/login");

    fetch(`http://localhost:5000/api/get-products?userId=${user.id}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleAdd = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:5000/api/add-product", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id, product: { name: productName, category: productCategory } }),
    })
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  };

  return (
    <div>
      <h2>Add More Products</h2>
      <input type="text" placeholder="Product Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
      <input type="text" placeholder="Category" value={productCategory} onChange={(e) => setProductCategory(e.target.value)} />
      <button onClick={handleAdd}>Add Product</button>

      <h3>Your Products</h3>
      <ul>
        {products.map((p, index) => (
          <li key={index}>{p.name} - {p.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddProduct;
