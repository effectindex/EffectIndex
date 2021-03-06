const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Post = require('./Post');

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {
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
    res.status(500).send({ error });
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async(req, res) => {
  try {

    let post = await Post.findById(req.params.id).exec();
    post.title = req.body.title;
    post.body = req.body.body;

    let result = await post.save();

    res.sendStatus(200);

  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:id/delete', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async(req, res) => {
  try {

    let deleted = await Post.findByIdAndRemove(req.params.id).exec().catch((error) => {
      throw API_Error('DELETE_POST_ERROR', error);
    });

    res.send(deleted);

  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:slug', async(req, res) => {
  try {
    let post = await Post.findOne({ slug: req.params.slug }).catch((err) => {
      throw API_Error('POST_NOT_FOUND', err);
    });

    res.send({ post });

  } catch (error) {
    res.status(500).send({ error });
  }
});


router.get('/', async(req, res) => {
  try {
    let posts = await Post
      .find()
      .setOptions({
        maxTimeMS: 500
      })
      .sort({ datetime: 'desc' });
    res.send({ posts });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;