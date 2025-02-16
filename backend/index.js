require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const cors = require("cors");
const customerRoutes = require("./routes/customerRoutes");
const app = express(); // Initialize app first

app.use(cors({ origin: "http://localhost:5173" })); // ✅ Allow frontend access
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
