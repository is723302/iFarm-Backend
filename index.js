const express = require('express');
const app = express();
const path = require('path');
const { config } = require('./config');
const passport = require('passport');
const boom = require("@hapi/boom")
const iFarmApi = require('./src/routes/index');
const {
    logErrors,
    wrapErrors,
    errorHandler 
} = require('./src/utils/middleware/errorHandlers')
const corsHandler = require('./src/utils/middleware/corsHandler');
const notFoundHandler = require('./src/utils/middleware/notFoundHandler');
const { nextDay } = require('date-fns');
const user = require('./src/models/user');

require('./src/utils/auth/strategies/passport-setup');


app.use(express.urlencoded({extended: false}));
app.use('/api/assets', express.static(path.join(__dirname, './public')));


//Passport setting 
var userProfile;

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));


// body parser
app.use(express.json());

// CORS
app.use(corsHandler());


//oAuth Strat
require("./src/utils/auth/strategies/passport-setup")

// routes
iFarmApi(app);
//app.use('/api/livechat', liveChatRouter);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

//Google oauth
app.get("/auth/google-oauth", passport.authenticate("google-oauth", {
  scope: ['email', 'profile', 'openid']
}));

app.get("/auth/google-oauth/callback", passport.authenticate("google-oauth",{session: false}),
  function(req, res, next){
    if(!req.user){
      next(boom.unauthorized());
    }

    const {token, ...user} = req.user;

    res.cookie("token", token, {
      httpOnly: !config.dev,
      secure: !config.dev
    });
    }
);

app.listen(config.port, config.host, function() {
    console.log(`Listening http://${config.host}:${config.port}`);
});