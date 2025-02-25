const pool = require("../config/db");

// Add a new service
const addService = async (req, res) => {
  const { deviceType, issue, estimatedCost, appointmentDate } = req.body;

  if (!deviceType || !issue || !appointmentDate) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const result = await pool.query(
      "INSERT INTO services (device_type, issue, estimated_cost, appointment_date) VALUES ($1, $2, $3, $4) RETURNING *",
      [deviceType, issue, estimatedCost, appointmentDate]
    );
    res.status(201).json({ message: "Service booked successfully", service: result.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

// Get all services
const getServices = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM services");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  } 
};
// Get service details by ID
const getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM services WHERE id = $1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Service not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
};

module.exports = { addService, getServices ,getServiceById};
