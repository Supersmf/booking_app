/* eslint-disable no-underscore-dangle */
import passport from 'koa-passport';
import LocalStrategy from 'passport-local';
import Users from '../middleware/routes/users/model';

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  Users.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use('local', new LocalStrategy(
  ((username, password, done) => {
    Users.findOne({ username }, (err, user) => {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (user.password !== password) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
  }),
));
