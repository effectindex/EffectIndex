const express = require('express');
const router = express.Router();
const config = require ('../../nuxt.config.js');
const protected = require('express-jwt');
const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

mongoose.plugin(slug);
mongoose.connect('mongodb://localhost:27017/effectindex');

const Post = mongoose.model('Post', {
    slug: { type: String, slug: ['title', 'body'], unqiue: true},
    author: String,
    title: String,
    datetime: Date,
    body: String
})

router.post('/', protected({secret: config.server.jwtSecret}), async (req, res) => {

    const post = new Post({
        author: req.user.username,
        datetime: Date.now(),
        title: req.body.title,
        body: req.body.body
    });

    let returned = await post.save();

    res.send({
        post: returned
    });

});

router.post('/:slug', protected({secret: config.server.jwtSecret}), async(req, res) => {

   let returned = await Post.findOneAndUpdate({slug: req.params.slug}, {
       title: req.body.title,
       body: req.body.body
   }).exec();

   res.send({
       post: returned
   });

});

router.get('/:slug/delete', protected({secret: config.server.jwtSecret}), async(req, res) => {
    let deleted = await Post.findOneAndRemove({slug: req.params.slug}).exec();
    res.send(deleted);
})

router.get('/:slug', async(req, res) => {
    let post = await Post.findOne({ slug: req.params.slug });
    res.send({post});
});


router.get('/', async(req, res) => {
    let posts = await Post
        .find()
        .sort({ datetime: 'desc' });

    res.send({posts});
});


module.exports = router;