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

require('./src/controllers/passport-setup');


app.use(express.urlencoded({extended: false}));
app.use('/api/assets', express.static(path.join(__dirname, './public')));


//Passport setting 
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

/*passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});*/

// body parser
app.use(express.json());

// CORS
app.use(corsHandler());

// routes
iFarmApi(app);
app.use('/api/login', loginRouter);
app.use('/api/livechat', liveChatRouter);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, config.host, function() {
    console.log(`Listening http://${config.host}:${config.port}`);
});