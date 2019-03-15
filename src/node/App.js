// import { routes, allowedMethods } from './middleware/routes';

const Koa = require('koa');
const logger = require('koa-logger');

const port = process.env.PORT || 3000;
const app = new Koa();

app.use(logger());
// app.use(routes());
// app.use(allowedMethods());

// response
app.use((ctx) => {
  ctx.body = 'Hello Koa';
});

app.listen(port);

// https://mlab.com/
// https://mongoosejs.com/
// https://habr.com/ru/post/307148/
// "startServer": "nodemon ./src/node/app.js --exec babel-node --presets es2015,stage-2"
