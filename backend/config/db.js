const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Mobileshop",
  password: "Sowndar",
  port: 5432,
});

pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL!");
    client.release();
  })
  .catch(err => console.error("❌ Connection Error:", err.message));

module.exports = pool; // ✅ Make sure pool is properly exported
