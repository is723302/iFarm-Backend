const express = require("express");
const router = express.Router();

const seedApi = require('./seed');
const userApi = require('./user');
const messageApi = require('./message');
const greenhouseApi = require('./greenhouse');

function iFarmApi(app) {
    seedApi(app);
    userApi(app);
    messageApi(app);
    greenhouseApi(app);
}

module.exports = iFarmApi;