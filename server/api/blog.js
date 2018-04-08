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
    await new Promise((resolve, reject) => {
        Post.find((err, posts) => {
            res.send({
                posts
            });
            if(err) reject(err);
            else resolve();
        }).sort({ datetime: 'desc' });  
    }); 
});


module.exports = router;