import Router from 'koa-router';
import '@babel/polyfill';
import Flight from '../../models/flights';
import Tickets from '../../models/tickets';

const router = new Router();

router.get('/flights', async (ctx) => {
  ctx.body = await Flight.find();
});

router.get('/tickets', async (ctx) => {
  ctx.body = await Tickets.find();
});

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
