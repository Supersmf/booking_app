import mongoose from 'mongoose';
import cors from 'koa2-cors';
import { routes, allowedMethods } from './middleware/routes';
import { port, dbUri } from './config';

mongoose.connect(dbUri, { useNewUrlParser: true });

mongoose.connection.on('error', console.error);
mongoose.connection.once('open', () => {
  console.log('✅  Database connect');
});

const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();

app
  .use(cors())
  .use(logger())
  .use(routes())
  .use(allowedMethods());

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`));
