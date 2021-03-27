const express = require("express");
const router = express.Router();
const predictionController = require("../controllers/prediction");

router.get("/", predictionController.renderPredictionPage);

module.exports = router