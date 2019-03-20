import Router from 'koa-router';
import '@babel/polyfill';
import flightsController from './controller';
import Flights from './model/flights';

const router = new Router();

router
  .get('/flights', flightsController.read)
  .post('/flights', flightsController.create);

export { Flights };
export default router.routes();
