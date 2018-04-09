const express = require('express');
const router = express.Router();
const config = require ('../../nuxt.config.js');
const protected = require('express-jwt');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/effectindex');

const Post = mongoose.model('Post', {
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

router.get('/', async(req, res) => {
    let posts = await Post
        .find()
        .sort({ datetime: 'desc' });

    res.send({posts});
});


module.exports = router;