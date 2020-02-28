const logger = require('koa-logger');
const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const user = require('./controllers/UserController');
const post = require('./controllers/PostController');
const cors = require('@koa/cors');
const app = new Koa();

app.use(cors());

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

router.post('/login', user.login)
    .get('/users', user.getAllUsers)
    .post('/user', user.createUser)
    .put('/user/:id', user.updateUser)
    .delete('/user/:id', user.deleteUser)

    .get('/posts', post.getAllPosts)
    .post('/post', post.createPost)
    .put('/post/:id', post.updatePost)
    .delete('/post/:id', post.deletePost)
    ;

app.use(router.routes());

app.listen(3001);