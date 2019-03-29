import Router from 'koa-router';
import toursController from './controller';
import Tours from './model';

const router = new Router();

router
  .get('/tours', toursController.read)
  .post('/tours', toursController.create)
  .put('/tours/:id', toursController.update)
  .delete('/tours/:id', toursController.delete);

export { Tours };
export default router.routes();
