const express = require("express");
const router = express.Router();
const liveChatController = require("../controllers/livechat");

router.get("/", liveChatController);

module.exports = router