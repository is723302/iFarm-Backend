const homePageRouter = require('./home_page');
const seedRouter = require('./seed');
const messageRouter = require('./message');
const calendarRouter = require('./calendar');
const employeeRouter = require('./employee');
const supervisorRouter = require('./supervisor');
const greenhouseRouter = require('./greenhouse');
const loginRouter = require('./login');
const liveChatRouter = require('./livechat');

module.exports = {
    homePageRouter,
    seedRouter,
    messageRouter,
    calendarRouter,
    employeeRouter,
    supervisorRouter,
    greenhouseRouter,
    loginRouter,
    liveChatRouter
}