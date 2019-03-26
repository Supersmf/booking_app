import mongoose from 'mongoose';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import { routes, allowedMethods } from './middleware/routes';
import { port, dbUri } from './config';

const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

mongoose.connect(dbUri, { useNewUrlParser: true });

mongoose.connection.on('error', () => {
  console.log('⛔  Database connection error');
});
mongoose.connection.once('open', () => {
  console.log('✅  Database connect');
});

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(routes())
  .use(allowedMethods());

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`));
