import Router from 'koa-router';
import loginController from './controller';

const router = new Router();

router
  .post('/login', loginController.login);

export default router.routes();
