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

// Los routers se agregan a las rutas
app.use('/', homePageRouter);
app.use('/seeds', seedRouter);
app.use('/messages', messageRouter);
app.use('/calendar', calendarRouter);
app.use('/employees', employeeRouter);
app.use('/supervisors', supervisorRouter);
app.use('/greenhouses', greenhouseRouter);

app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});