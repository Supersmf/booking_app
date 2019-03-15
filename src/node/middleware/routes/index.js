import Router from 'koa-router';

const router = new Router();


router.get('/', async (ctx) => {
  ctx.body = await 'dsdaddadada';
});

router.get('/tickets', async (ctx) => {
  ctx.body = await '32313121';
});

export function routes() { return router.routes(); }

export function allowedMethods() { return router.allowedMethods(); }
