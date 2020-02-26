const bcrypt = require('bcryptjs');
const mongo = require('koa-mongo')

const user = {
    login: (ctx) => {
        return ctx.db.collection('user').insert(ctx.request.body)
            .then((results) => {
                ctx.body = results;
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    createUser: (ctx) => {
        return ctx.db.collection('user').insert(ctx.request.body)
            .then((results) => {
                ctx.body = results;
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    getUserById: (ctx) => {
        return ctx.db.collection('user').findOne({ "_id": mongo.ObjectID(ctx.params.id) })
            .then((results) => {
                ctx.body = results;
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    deleteUser: (ctx) => {
        return ctx.db.collection('user').deleteOne({ "_id": mongo.ObjectID(ctx.params.id) })
            .then(() => {
                ctx.body = 'User deleted';
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    updateUser: (ctx) => {
        return ctx.db.collection('user').updateOne({ "_id": mongo.ObjectID(ctx.params.id) }, ctx.request.body)
            .then(() => {
                ctx.body = ctx.request.body;
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    getAllUsers: (ctx) => {
        return ctx.db.collection('user').find().toArray()
            .then((results) => {
                ctx.body = results;
                ctx.status = 200;
            })
            .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    }

}

module.exports = user;