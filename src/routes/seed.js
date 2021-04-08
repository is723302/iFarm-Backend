const express = require("express");
const router = express.Router();
const seedController = require("../controllers/seed");

router.get("/", seedController.getSeeds);

module.exports = router