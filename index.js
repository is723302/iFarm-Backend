const express = require('express');
const path = require('path');
const app = express();
const {config} = require('./config');
const {
    homePageRouter,
    calendarRouter,
    predictionRouter,
    profileRouter,
    tracingRouter,
    userRouter
} = require('./src/routes');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Los routers se agregan a las rutas
app.use('/', homePageRouter);
app.use('/calendar', calendarRouter);
app.use('/predictions', predictionRouter);
app.use('/profile', profileRouter);
app.use('/tracing', tracingRouter);
app.use('/users', userRouter);

app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});