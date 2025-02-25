const express = require("express");
const { addService, getServices, getServiceById } = require("../controller/serviceController");

const router = express.Router();

router.post("/services", addService);
router.get("/services", getServices);
router.get("/services/:id", getServiceById);

module.exports = router;
