import Router from 'koa-router';
import '@babel/polyfill';
import Ticket from '../../models/ticket';

const router = new Router();

router.get('/flights', async (ctx) => {
  ctx.body = await Ticket.find();
});

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
