const express = require('express');
const path = require('path');
const app = express();
const {config} = require('./config');
const {
    homePageRouter,
    seedRouter,
    messageRouter,
    calendarRouter,
    employeeRouter,
    supervisorRouter,
    greenhouseRouter
} = require('./src/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/api/assets', express.static(path.join(__dirname, './public')));

// Los routers se agregan a las rutas
app.use('/api', homePageRouter);
app.use('/api/seeds', seedRouter);
app.use('/api/messages', messageRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/supervisors', supervisorRouter);
app.use('/api/greenhouses', greenhouseRouter);

app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});