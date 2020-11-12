const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Article = require('./Article');

const DocumentParser = require('../../../lib/DocumentParser');
const parser = new DocumentParser();

router.post('/', hasRoles(['ADMIN', 'EDITOR']), async (req, res, next) => {
  try {
    const { article } = req.body;
    const result = await new Article(article).save();
    if (!result) throw new API_Error('Error saving article.');
    res.json(result);
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

module.exports = router;