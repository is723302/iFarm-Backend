const express = require("express");
const router = express.Router();

const seedApi = require('./seed');
const userApi = require('./user');
const greenhouseApi = require('./greenhouse');

function iFarmApi(app) {
    seedApi(app);
    userApi(app);
    greenhouseApi(app);
}

module.exports = iFarmApi;