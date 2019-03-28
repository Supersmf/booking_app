import passport from 'koa-passport';

export default {
  async login(ctx) {
    await passport.authenticate('login', (err, user) => {
      if (err) { throw new Error(err); }
      if (!user) { return ctx.redirect('/login'); }
      ctx.logIn(user, (error) => {
        if (error) { throw new Error(err); }
        return ctx.redirect('/login');
      });
      // ctx.body = user;
      console.log(user);
      return ctx.redirect('/');
    })(ctx);
  },
};
