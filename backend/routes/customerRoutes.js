const express = require("express");
const { getCustomers } = require("../controller/customerController");

const router = express.Router();

router.get("/", getCustomers); // Fetch all registered users

module.exports = router;
