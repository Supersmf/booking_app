import Router from 'koa-router';
import '@babel/polyfill';
import flights from './flights';

const router = new Router();

router.use(flights);

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
