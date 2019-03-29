import Router from 'koa-router';
import logoutController from './controller';

const router = new Router();

router
  .get('/logout', logoutController.logout);

export default router.routes();
