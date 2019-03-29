export default {
  async logout(ctx) {
    console.log('authenticated: ', ctx.isAuthenticated());
    await ctx.logout();
    console.log('authenticated: ', ctx.isAuthenticated());
    ctx.redirect('/');
  },
};
