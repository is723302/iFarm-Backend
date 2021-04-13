const express = require("express");
const router = express.Router();
const supervisorController = require("../controllers/supervisor");

router.get("/", supervisorController.getSupervisors);
router.get("/:id", supervisorController.getSupervisor);
router.get("/:email", supervisorController.getSupervisorByEmail);
router.post("/", supervisorController.postRegister);
module.exports = router