const express = require("express");
const router = express.Router();
const tracingController = require("../controllers/tracing");

router.get("/", tracingController.renderTracingPage);

module.exports = router