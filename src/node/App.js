import mongoose from 'mongoose';
import { routes, allowedMethods } from './middleware/routes';
import { port, dbUri } from './config';

mongoose.connect(dbUri, { useNewUrlParser: true });

mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => {
  console.log('db connect');
});

const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

app
  .use(logger())
  .use(routes())
  .use(allowedMethods());

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`));
