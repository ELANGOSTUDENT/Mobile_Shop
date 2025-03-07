import { useState } from "react";
import PropTypes from "prop-types";

const AddProduct = ({ token, onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    description: "",
    category: "Mobile",
    subCategory: "Cable",
    bestSeller: false,
    colours: [],
    images: [],
  });
  const [done, setDone] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setProduct((prev) => ({ ...prev, images: files }));
  };

  const validateForm = () => {
    if (!product.name.trim()) return "Product name is required";
    if (!product.description.trim()) return "Product description is required";
    if (!product.price.trim()) return "Product price is required";
    if (product.colours.length === 0) return "At least one colour must be selected";
    if (product.images.length === 0) return "At least one image must be uploaded";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    try {
      const formData = new FormData();
      Object.entries(product).forEach(([key, value]) => {
        if (key === "images") {
          value.forEach((file, index) => {
            formData.append(`image${index + 1}`, file);
          });
        } else if (typeof value === "object") {
          formData.append(key, JSON.stringify(value)); // Only stringify arrays/objects
        } else {
          formData.append(key, value); // Keep other values as they are
        }
      });

      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setDone("Product Added Successfully");
        setProduct({
          name: "",
          price: "",
          description: "",
          category: "Mobile",
          subCategory: "Cable",
          bestSeller: false,
          colours: [],
          images: [],
        });
        onAddProduct();
      } else {
        setError("Product not added");
      }

      setTimeout(() => setDone(""), 4000);
    } catch (error) {
      console.error("Error occurred while adding the product:", error);
      setError("An error occurred while adding the product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">
      {error && <p className="error-message">{error}</p>}
      {done && <p className="success-message">{done}</p>}

      <h2>Add New Product</h2>
      <input type="text" name="name" placeholder="Product Name" value={product.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={product.price} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={product.description} onChange={handleChange} required />

      <label>Upload Images:
        <input type="file" multiple onChange={handleImageChange} />
      </label>

      <label>
        <input type="checkbox" name="bestSeller" checked={product.bestSeller} onChange={handleChange} />
        Add to Best Seller
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
};

AddProduct.propTypes = {
  token: PropTypes.string.isRequired,
  onAddProduct: PropTypes.func.isRequired,
};

export default AddProduct;
