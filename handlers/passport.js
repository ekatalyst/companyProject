const passport = require('passport');
const mongoose = require('mongoose');
const Individual = mongoose.model('Individual');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');


//passport.use(Individual.createStrategy());
//passport.use(Group.createStrategy());

// passport.serializeUser(Individual.serializeUser());
// passport.deserializeUser(Individual.deserializeUser());

//passport.serializeUser(Group.serializeUser());
//passport.deserializeUser(Group.deserializeUser());

module.exports = function(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
      // Match user
      Individual.findOne({
        email: email
      }).then(individual => {
        if (!individual) {
          return done(null, false, { errorMsg: 'That email is not registered' });

        }

        // Match password
        bcrypt.compare(password, individual.password, (err, isMatch) => {
          if (err) throw err;
          if (isMatch) {
            return done(null, individual);
          } else {
            return done(null, false, { errorMsg: 'Password incorrect' });
          }
        });
      });
    })
  );

  passport.serializeUser(function(individual, done) {
    done(null, individual.id);
  });

  passport.deserializeUser(function(id, done) {
    Individual.findById(id, function(err, individual) {
      done(err, individual);
    });
  });
};