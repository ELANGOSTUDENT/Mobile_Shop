const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../config/db"); // Ensure correct path


const JWT_SECRET = "c8916717a4049983949091ce5299d11f3eab7982392afa11a0f30c82093f655d74363691381626af12778005c2bdf0522c519ac14162e1b00d9fe6d6bd8a2f19";


exports.register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    console.log("Received Data:", req.body);

    // ✅ Validate input fields
    if (!name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Ensure `pool` works
    const client = await pool.connect();

    // ✅ Check if user exists
    const result = await client.query("SELECT * FROM users WHERE email = $1", [email]);
    if (result.rows.length > 0) {
      client.release();
      return res.status(400).json({ message: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Insert new user
    const newUser = await client.query(
      "INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, email, phone, hashedPassword]
    );

    client.release();
    console.log("✅ User registered successfully:", newUser.rows[0]);

    res.status(201).json({ message: "Registration successful", user: newUser.rows[0] });

  } catch (error) {
    console.error("❌ Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
};

// User Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists
    const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error logging in" });
  }
};
