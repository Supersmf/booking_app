import Router from 'koa-router';
import ticketsController from './controller';
import Tickets from './model';

const router = new Router();

router
  .get('/tickets', ticketsController.read)
  .post('/tickets', ticketsController.create)
  .put('/tickets/:id', ticketsController.update)
  .delete('/tickets/:id', ticketsController.delete);

export { Tickets };
export default router.routes();
