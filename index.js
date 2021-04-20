const express = require('express');
const app = express();
const path = require('path');
const { config } = require('./config');
const iFarmApi = require('./src/routes/index');
const {
    logErrors,
    wrapErrors,
    errorHandler 
} = require('./src/utils/middleware/errorHandlers')
const corsHandler = require('./src/utils/middleware/corsHandler');
const notFoundHandler = require('./src/utils/middleware/notFoundHandler');

app.use(express.urlencoded({extended: false}));
app.use('/api/assets', express.static(path.join(__dirname, './public')));

// body parser
app.use(express.json());

// CORS
app.use(corsHandler());

// routes
iFarmApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, config.host, function() {
    console.log(`Listening http://${config.host}:${config.port}`);
});