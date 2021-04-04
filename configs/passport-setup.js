const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

passport.use(
    new GoogleStrategy({
        // options for the google strat
        clientID: process.env.ClientID,
        clientSecret: process.env.ClientSecret
    }), () => {
        // passport callback function
    }
);