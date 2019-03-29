import passport from 'koa-passport';

export default {
  async login(ctx) {
    console.log('authenticated: ', ctx.isAuthenticated());
    await passport.authenticate('local', (err, user) => {
      if (err) { throw new Error(err); }
      if (!user) { return ctx.redirect('/login'); }
      ctx.logIn(user, (error) => {
        if (error) { throw new Error(err); }
        return ctx.redirect('/login');
      });
      // ctx.body = user;
      console.log('authenticated: ', ctx.isAuthenticated());
      return ctx.redirect('/users');
    })(ctx);
  },
};
