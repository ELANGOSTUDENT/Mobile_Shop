import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const AddService = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const service = { name, price, description, duration };
    onAdd(service); // Call onAdd passed as prop
    setName("");
    setPrice("");
    setDescription("");
    setDuration("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Service</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input type="text" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
      <button type="submit">Add Service</button>
    </form>
  );
};

// Add PropTypes validation for onAdd
AddService.propTypes = {
  onAdd: PropTypes.func.isRequired, // Validate that onAdd is a required function
};

export default AddService;
