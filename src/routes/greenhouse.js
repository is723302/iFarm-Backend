const express = require("express");
const router = express.Router();
const greenhouseController = require("../controllers/greenhouse");

router.get("/", greenhouseController.getGreenhouses);
router.get("/:id", greenhouseController.getGreenhouse);

module.exports = router