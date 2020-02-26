const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const user = require('./controllers/user');
const app = new Koa();

const mongo = require('koa-mongo')

app.use(mongo({
    host: 'mongo',
    port: 27017,
    db: 'blogdb',
    authSource: 'admin',
    max: 100,
    min: 1
}));

const router = new Router();

app.use(bodyParser());

app.use(logger());

router.get('/login', user.login)
    .delete('/user/:id', user.deleteUser)
    .get('/user', user.getAllUsers)
    .post('/user', user.createUser);

app.use(router.routes());

app.listen(3001);