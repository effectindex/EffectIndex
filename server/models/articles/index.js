const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Article = require('./Article');

const parse = require('../../../lib/vcode2/parse').default;

function kebab(text) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
}

function getBodyLength(parsed) {
  let length = 0;
  parsed.forEach(item => {
    if (typeof item === 'string') length += item.length;
    else if (item.children && item.children.length) {
      length += getBodyLength(item.children);
    }
  });
  return length;
}

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { article } = req.body;
    article.authors = article.authors.map(author => author._id);
    delete article._id;
    const parsed = parse(article.body.raw);
    const length = getBodyLength(parsed);

    const result = await new Article({
      ...article,
      slug: kebab(article.title),
      user: req.user.id,
      body: {
        raw: article.body.raw,
        parsed,
        length
      }
    }).save();
    if (!result) throw new API_Error('Error saving article.');
    res.json({ article: result });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { article } = req.body;
    article.authors = article.authors.map(author => author._id);
    article.body.parsed = parse(article.body.raw);
    article.body.length = getBodyLength(article.body.parsed);
    const result = await Article.findByIdAndUpdate(req.params.id, { ...article, slug: kebab(article.title) }, { new: true });
    if (!result) throw new API_Error('Error saving article.');
    res.json({ article: result });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.delete('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { id } = req.params;
    await Article.deleteOne({ _id: id });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.find({ publication_status: 'published' }).select('-created -citations -updated -body.raw -body.parsed').populate('authors').sort('-publication_date');
    res.json({ articles });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/admin', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']),  async (req, res, next) => {
  try {
    const articles = await Article.find().populate('authors');
    res.json({ articles });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/admin/:_id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    const { _id } = req.params;
    const article = await Article.findOne({ _id }).populate('authors');
    res.json({ article });
  } catch (error) {
    res.sendStatus(404);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const slug = req.params.slug;
    const article = await Article.findOne({ slug }).or({ publication_status: ['published', 'unlisted'], }).populate('authors');;
    res.json({ article });
  } catch (error) {
    res.sendStatus(404);
  }
});


module.exports = router;