const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisor");

router.get("/", supervisorController.getSupervisors);

module.exports = router