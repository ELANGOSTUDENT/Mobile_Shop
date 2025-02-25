require("dotenv").config();
const cors = require("cors");
const express = require("express");

const authRoutes = require("./routes/authRoutes");
const customerRoutes = require("./routes/customerRoutes");
const serviceRoutes = require("./routes/serviceRoutes");
const app = express(); 

app.use(cors({ origin: "http://localhost:5173" })); 
app.use(express.json());

app.use("/api/service", serviceRoutes); 
app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal Server Error" });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
