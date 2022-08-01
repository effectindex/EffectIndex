const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasPerms = require('../HasPerms');
const API_Error = require('../ApiError');

const ObjectId = require('mongoose').Types.ObjectId;

const Redirect = require('./Redirect');

router.get('/', async (req, res, next) => {
  try {
    const redirects = await Redirect.find({}).sort({ from: 'desc' });
    res.json({ redirects });
  } catch (err) {
    next();
  }
});

router.post('/', secured({ secret: config.server.jwtSecret, algorithms: ['HS256'] }), hasPerms('admin'), async (req, res, next) => {
  const { redirect } = req.body;

  try {
    if (!redirect) throw API_Error('ADD_REDIRECT_ERROR', 'New redirect data invalid.');
    const { from, to } = redirect;
    if (!from || !to || !from.length || !to.length) throw API_Error('ADD_REDIRECT_ERROR', 'Invalid redirect data.');
    const created = await Redirect.create({ from, to });
    res.send({ redirect: created });
  } catch (err) {
    next(err);
  }
});

router.put('/:_id', secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('admin'), async (req, res, next) => {
  const { _id } = req.params;
  const { redirect } = req.body;

  try {
    if (!redirect) throw API_Error('UPDATE_REDIRECT_ERROR', 'Updated direct data invalid.');
    if (!ObjectId.isValid(_id)) throw API_Error('UPDATE_REDIRECT_ERROR', 'Invalid redirect ID.');
    await Redirect.findByIdAndUpdate(_id, { ...redirect });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});

router.delete('/:_id', secured({ secret: config.server.jwtSecret, algorithms: ['HS256'] }), hasPerms('admin'), async (req, res, next) => {
  const { _id } = req.params;
  try {
    if (!ObjectId.isValid(_id)) throw API_Error('UPDATE_REDIRECT_ERROR', 'Invalid redirect ID.');
    await Redirect.deleteOne({ _id });
    res.sendStatus(200);
  } catch (err) {
    next(err);
  }
});



module.exports = router;
