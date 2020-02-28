const bcrypt = require('bcryptjs');
const mongo = require('koa-mongo')

const user = {
    createUser: (ctx) => {
        return bcrypt.hash(ctx.request.body.password, 10)
        .then((hash)=>{
            ctx.request.body.password = hash;
            return ctx.db.collection('user').insertOne(ctx.request.body)  
        }) 
        .then((results) => {
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })            
    },
    login: (ctx) => {
        return ctx.db.collection('user').findOne({ "email": ctx.request.body.email })
        .then(result=>{
            if (result == null)
                return false
            if(bcrypt.compare(ctx.request.body.password ,result.password)){
                return result;
            }
        })
        .then(res => {
            ctx.body = res;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    updateUser: (ctx) => {
        return ctx.db.collection('user').updateOne({ "_id": mongo.ObjectID(ctx.params.id) }, { $set: { name: ctx.request.body.name, email: ctx.request.body.email, role: ctx.request.body.role } },{ upsert: true } )
        .then(() => {
            ctx.body = ctx.request.body;
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
            .then((results) => {
                ctx.body = 'User deleted with success';
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