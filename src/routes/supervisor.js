const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisor");

router.get("/", supervisorController.getSupervisors);
router.get("/:id", supervisorController.getSupervisor);

module.exports = router