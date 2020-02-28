const mongo = require('koa-mongo')

const post = {

    createPost: (ctx) => {
        ctx.request.body.date = new Date().toLocaleDateString("en-US");
        return ctx.db.collection('post').insertOne(ctx.request.body)
        .then(() => {
            ctx.body = ctx.request.body;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    updatePost: (ctx) => {
        return ctx.db.collection('post').updateOne({ "_id": mongo.ObjectID(ctx.params.id) }, { $set: { text: ctx.request.body.text, title: ctx.request.body.title } },{ upsert: true } )
        .then(() => {
            ctx.body = ctx.request.body;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    getPostById: (ctx) => {
        return ctx.db.collection('post').findOne({ "_id": mongo.ObjectID(ctx.params.id) })
        .then((results) => {
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    deletePost: (ctx) => {
        return ctx.db.collection('post').deleteOne({ "_id": mongo.ObjectID(ctx.params.id) })
        .then((results) => {
            ctx.body = 'Post deleted with success';
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    getAllPosts: (ctx) => {
        return ctx.db.collection('post').find().toArray()
        .then((results) => {
            console.log(results)
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    },
    searchPosts: (ctx) => {
        return ctx.db.collection('post').find( { $text: { $search: ctx.params.text } }).toArray()
        .then((results) => {
            console.log(results)
            ctx.body = results;
            ctx.status = 200;
        })
        .catch(err => { ctx.body = 'error: ' + err; ctx.status = 500; })
    }
}

module.exports = post;