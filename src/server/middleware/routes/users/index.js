import Router from 'koa-router';
import '@babel/polyfill';
import usersController from './controller';
import Users from './model';

const router = new Router();

router
  .get('/users', usersController.read)
  .post('/users', usersController.create)
  .put('/users/:id', usersController.update)
  .delete('/users/:id', usersController.delete);

export { Users };
export default router.routes();
