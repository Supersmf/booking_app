import Router from 'koa-router';
import '@babel/polyfill';
// import passport from 'passport';
import flights from './flights';
import tickets from './tickets';
import tours from './tours';
import customers from './customers';
import users from './users';
import login from './login';

const router = new Router();

router.use(flights);
router.use(tickets);
router.use(tours);
router.use(customers);
router.use(users);
router.use(login);

export function routes() { return router.routes(); }
export function allowedMethods() { return router.allowedMethods(); }
