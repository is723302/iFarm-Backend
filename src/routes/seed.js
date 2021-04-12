const express = require("express");
const router = express.Router();
const seedController = require("../controllers/seed");

router.get("/", seedController.getSeeds);
router.get("/:id", seedController.getSeed);

module.exports = router