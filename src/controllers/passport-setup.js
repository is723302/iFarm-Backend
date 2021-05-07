
const passport = require('passport');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const {config} = require('../../config');


passport.use(new GoogleStrategy({
    clientID:     config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: "http://localhost:4200/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


 