require("dotenv").config();
const { Pool } = require("pg");


const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.connect()
  .then(client => {
    console.log(" Connected to PostgreSQL!");
    client.release();
  })
  .catch(err => console.error(" Connection Error:", err.message));

module.exports = pool; //
