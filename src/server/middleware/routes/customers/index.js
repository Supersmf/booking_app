import Router from 'koa-router';
import '@babel/polyfill';
import customersController from './controller';
import Customers from './model';

const router = new Router();

router
  .get('/customers', customersController.read)
  .post('/customers', customersController.create)
  .put('/customers/:id', customersController.update)
  .delete('/customers/:id', customersController.delete);

export { Customers };
export default router.routes();
