const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const Article = require('./Article');
const People = require('../persons/Person');

const parse = require('../../../lib/vcode2/parse').default;

const mongoose = require('mongoose');

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

router.post('/', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('all-articles', 'own-articles'), async (req, res, next) => {
  try {
    const {article} = req.body;
    article.authors = article.authors.map(author => author._id);
    delete article._id;
    const parsed = parse(article.body.raw);
    const length = getBodyLength(parsed);

    const result = await new Article({
      ...article,
      slug: article.title,
      user: req.user._id,
      body: {
        raw: article.body.raw,
        parsed,
        length
      }
    }).save();
    if (!result) throw API_Error('Error saving article.');
    res.json({article: result});
    console.log(result);
  } catch (error) {
    res.status(500).send({error});
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('own-articles', 'all-articles'), async (req, res, next) => {
  try {
    const {id} = req.params;

    const article = await Article.findById(id);

    if (!article) throw API_Error('UPDATE_ARTICLE_ERROR', 'Cannot find specified article to update.', 404);

    if (!req.user.can('all-articles') && (String(article.user) !== req.user._id)) {
      throw API_Error('UPDATE_ARTICLE_ERROR', 'User does not have permission to modify articles other than their own.', 500);
    }

    if (!req.body.article) throw API_Error('UPDATE_ARTICLE_ERROR', 'Invalid request.');

    const {
      title, subtitle, publication_status, publication_date,
      created, authors, citations, short_description, social_media_image,
      tags, body, featured, frontpage
    } = req.body.article;

    article.title = title;
    article.created = created;
    article.subtitle = subtitle;
    article.publication_status = publication_status;
    article.publication_date = publication_date;
    article.authors = authors.map(author => author._id);
    article.citations = citations;
    article.updated = new Date();
    article.short_description = short_description;
    article.social_media_image = social_media_image;
    article.tags = tags;
    article.body.raw = body.raw;
    article.body.parsed = parse(body.raw);
    article.body.length = getBodyLength(article.body.parsed);
    article.slug = title;
    article.featured = featured;
    article.frontpage = frontpage;

    const result = await article.save();

    if (!result) throw API_Error('UPDATE_ARTICLE_ERROR', 'Error saving article.');

    res.json({article: result});
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('all-articles', 'own-articles'), async (req, res, next) => {
  try {
    const {id} = req.params;
    const {user} = req;
    if (!mongoose.isValidObjectId(id)) throw API_Error('DELETE_ARTICLE_ERROR', 'ID is not a valid ObjectID');

    const article = await Article.findById(id);

    if (!article) throw API_Error('DELETE_ARTICLE_ERROR', 'Article could not be found.');

    if (!user.can('all-articles') && (String(article.user) !== user._id)) throw API_Error('DELETE_ARTICLE_ERROR', 'Article does not belong to user.', 500);

    await article.deleteOne();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send({error});
  }

});

router.get('/', async (req, res, next) => {
  try {
    const articles = await Article.find({publication_status: 'published'}).select('-created -citations -updated -body.raw -body.parsed').populate('authors').sort('-publication_date');
    const authorIds = [...new Set(articles.map(article => article.authors.map(author => author._id)).flat())];
    const authors = await People.find({'_id': {$in: authorIds}});
    res.json({articles, authors});
  } catch (error) {
    res.status(500).send({error});
  }
});

router.get('/admin', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('own-articles', 'all-articles'), async (req, res, next) => {
  try {
    const {user} = req;
    let articles;

    if (!user.can('all-articles')) articles = await Article.find({user: req.user._id}).populate('authors');
    else articles = await Article.find().populate('authors');

    res.json({articles});
  } catch (error) {
    res.status(500).send({error});
  }
});

router.get('/admin/:_id', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('own-articles', 'all-articles'), async (req, res, next) => {
  try {
    const {_id} = req.params;
    const {user} = req;

    if (!mongoose.isValidObjectId(_id)) throw API_Error('GET_ARTICLE_ERROR', 'Specified ID is not valid.');

    const article = await Article.findOne({_id}).populate('authors');

    if (!article) throw API_Error('GET_ARTICLE_ERROR', 'Article with specified ID was not found.', 404);

    if (!user.can('all-articles')) {
      if (String(article.user) === user._id) res.json({article});
      else throw API_Error('GET_ARTICLE_ERROR', 'Article does not belong to user.', 500);
    } else res.json({article});

  } catch (error) {
    next(error);
  }
});

router.get('/:slug', async (req, res, next) => {
  try {
    const {slug} = req.params;
    const article = await Article.findOne({slug}).or({publication_status: ['published', 'unlisted'],}).populate('authors');
    if (article) res.json({article});
    else throw new Error('Article not found.');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
