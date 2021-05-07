const express = require('express');
const path = require('path');
const app = express();
const {config} = require('./config');
const passport = require('passport');
const {
    homePageRouter,
    seedRouter,
    messageRouter,
    calendarRouter,
    employeeRouter,
    supervisorRouter,
    greenhouseRouter,
    loginRouter,
    liveChatRouter

} = require('./src/routes');

require('./src/controllers/passport-setup');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
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


// Los routers se agregan a las rutas
app.use('/api', homePageRouter);
app.use('/api/seeds', seedRouter);
app.use('/api/messages', messageRouter);
app.use('/api/calendar', calendarRouter);
app.use('/api/employees', employeeRouter);
app.use('/api/supervisors', supervisorRouter);
app.use('/api/greenhouses', greenhouseRouter);
app.use('/api/login', loginRouter);
app.use('/api/livechat', liveChatRouter);

app.listen(config.port, config.host, function() {
    console.log(`Listening on port ${config.port} and host ${config.host}`);
});