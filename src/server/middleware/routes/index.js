import Router from 'koa-router';
import '@babel/polyfill';
import flights from './flights';
import tickets from './tickets';
import tours from './tours';
import customers from './customers';

const router = new Router();

router.use(flights);
router.use(tickets);
router.use(tours);
router.use(customers);

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
