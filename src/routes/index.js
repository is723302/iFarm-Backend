const express = require("express");
const router = express.Router();

const seedApi = require('./seed');
const greenhouseApi = require('./greenhouse');

function iFarmApi(app) {
    seedApi(app);
    greenhouseApi(app);
}

module.exports = iFarmApi;