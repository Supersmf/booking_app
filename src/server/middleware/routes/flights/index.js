import Router from 'koa-router';
import '@babel/polyfill';
import flightsController from './controller';
import Flights from './model';

const router = new Router();

router
  .get('/flights', flightsController.read)
  .post('/flights', flightsController.create)
  .put('/flights/:id', flightsController.update)
  .delete('/flights/:id', flightsController.delete);

export { Flights };
export default router.routes();
