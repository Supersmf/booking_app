import Router from 'koa-router';
import '@babel/polyfill';
import loginController from './controller';
// import Users from './model';

const router = new Router();

router
  .post('/login', loginController.login);

// export { Users };
export default router.routes();
