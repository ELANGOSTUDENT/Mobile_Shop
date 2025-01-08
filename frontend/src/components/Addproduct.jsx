import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const AddProduct = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { name, price, description, category };
    onAdd(product); // Call onAdd passed as prop
    setName("");
    setPrice("");
    setDescription("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Product</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
      <button type="submit">Add Product</button>
    </form>
  );
};

// Add PropTypes validation for onAdd
AddProduct.propTypes = {
  onAdd: PropTypes.func.isRequired, // Validate that onAdd is a required function
};

export default AddProduct;
