const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Article = require('./Article');

const parse = require('../../../lib/vcode2/parse').default;

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { article } = req.body;
    const result = await new Article({
      title: article.title,
      publication_status: article.publicationStatus,
      user: req.user.id,
      short_description: article.shortDescription,
      social_media_image: article.socialMediaImage,
      body: {
        raw: article.code,
        parsed: parse(article.code)
      }
    }).save();
    if (!result) throw new API_Error('Error saving article.');
    res.json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.delete('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Article.deleteOne({ _id: id });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.find();
    res.json({ articles });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/admin/:_id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { _id } = req.params;
    const article = await Article.findOne({ _id });
    res.json({ article });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const article = await Article.findOne({ slug });
    res.json({ article });
  } catch (error) {
    res.status(500).send({ error });
  }
});


module.exports = router;