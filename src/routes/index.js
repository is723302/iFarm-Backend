const express = require("express");
const router = express.Router();
// const homePageRouter = require('./home_page');
// const seedRouter = require('./seed');
// const messageRouter = require('./message');
// const calendarRouter = require('./calendar');
// const employeeRouter = require('./employee');
// const supervisorRouter = require('./supervisor');
// const greenhouseRouter = require('./greenhouse');

const greenhouseApi = require('./greenhouse')

function iFarmApi(app) {
    greenhouseApi(app);
}



// module.exports = {
//     homePageRouter,
//     seedRouter,
//     messageRouter,
//     calendarRouter,
//     employeeRouter,
//     supervisorRouter,
//     greenhouseRouter
// }

module.exports = iFarmApi;