const pool = require("../config/db");

const getCustomers = async (req, res) => {
  try {
    console.log("Fetching customers..."); // Debugging

    const result = await pool.query("SELECT id, name, email, phone FROM users");

    console.log("Query result:", result.rows); // Check database response
    res.json(result.rows);
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ error: "Database error", details: err.message });
  }
};

module.exports = { getCustomers };
