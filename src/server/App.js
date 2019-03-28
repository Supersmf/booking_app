/* eslint-disable prefer-arrow-callback */
/* eslint-disable consistent-return */
import mongoose from 'mongoose';
import passport from 'koa-passport';
import session from 'koa-session';
import cors from 'koa2-cors';
import bodyParser from 'koa-bodyparser';
import { routes, allowedMethods } from './middleware/routes';
import { port, dbUri } from './config';
import './config/config-passport';

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

app.keys = ['super-secret-key'];

app
  .use(cors())
  .use(logger())
  .use(bodyParser())
  .use(session(app))
  .use(passport.initialize())
  .use(passport.session())
  .use(routes())
  .use(allowedMethods());

app.listen(port, () => console.log(`✅  The server is running at http://localhost:${port}/`));
