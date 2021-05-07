const express = require("express");
const router = express.Router();

const authApi = require('./auth');
const seedApi = require('./seed');
const userApi = require('./user');
const messageApi = require('./message');
const calendarApi = require('./calendar');
const greenhouseApi = require('./greenhouse');

function iFarmApi(app) {
    authApi(app)
    seedApi(app);
    userApi(app);
    messageApi(app);
    calendarApi(app);
    greenhouseApi(app);
}

module.exports = iFarmApi;
