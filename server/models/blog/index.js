const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const Post = require('./Post');
router.post('/', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('manage-blog'), async (req, res, next) => {
  try {

    if (!req.body || (!req.body.title || !req.body.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');

    const post = new Post({
      author: req.user.username,
      datetime: Date.now(),
      title: req.body.title,
      body: req.body.body
    });

    let returnedPost = await post.save().catch((err) => {
      throw API_Error('USER_SAVE_ERROR', err);
    });

    res.send({ post: returnedPost });

  } catch (error) {
    next(error);
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('manage-blog'), async(req, res, next) => {
  try {

    const post = await Post.findById(req.params.id).exec();
    const { title, body } = req.body;

    post.title = title;
    post.body = body;

    await post.save();

    res.sendStatus(200);

  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:id/delete', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('manage-blog'), async(req, res, next) => {
  try {

    const post = await Post.findById(req.params.id);

    if (!post) throw API_Error('DELETE_POST_ERROR', 'Cannot find post to delete.');

    await post.delete();

    res.sendStatus(200);

  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:slug', async(req, res, next) => {
  try {
    const { slug } = req.params;

    const post = await Post.findOne({ slug });

    if (!post) throw API_Error('GET_POST_ERROR', 'Post not found.', 404);

    res.send({ post });

  } catch (error) {
    next(error);
  }
});


router.get('/', async(req, res, next) => {
  try {
    const posts = await Post.find().sort({ datetime: 'desc' });
    res.send({ posts });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
