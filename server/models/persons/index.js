const express = require('express');
const md5 = require('md5');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasRoles = require('../HasRoles');
const API_Error = require('../ApiError');

const parse = require('../../../lib/vcode2/parse').default;

const Person = require('./Person');
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
  try {
    const results = await Person
      .find();
    res.json({ people: results });
  } catch (err) {
    next(err);
  }
});

router.get('/me', secured({ secret: config.server.jwtSecret }), async(req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('GET_SELF_PROFILE_ERROR', 'User is not logged in.');
    const { _id } = req.user;
    const person = await Person.findOne({ user: _id });

    res.json({ person });

  } catch (error) {
    next(error);
  }
});

router.post('/me', secured({ secret: config.server.jwtSecret }), async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('SAVE_SELF_PROFILE_ERROR', 'User is not logged in.');

    const { _id } = req.user;
    
    if (!req.body || !req.body.person) throw API_Error('UPDATE_SELF_PROFILE-ERROR', 'Invalid update data');

    const { not_public, full_name, alias, email, social_media, bio, tags } = req.body.person;

    const person = new Person({
      user: mongoose.Types.ObjectId(_id),
      not_public,
      full_name,
      alias,
      email,
      gravatar_hash: email && email.length ? md5(email.trim().toLowerCase()) : undefined,
      social_media,
      bio,
      bio_parsed: parse(bio),
      tags
    });

    const saved = await person.save();
    res.json({ person: saved });

  } catch (error) {
    next(error);
  }
});

router.put('/me', secured({ secret: config.server.jwtSecret }), async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('UPDATE_SELF_PROFILE_ERROR', 'User is not logged in.');

    if (!req.body || !req.body.person) throw API_Error('UPDATE_SELF_PROFILE-ERROR', 'Invalid update data');

    const { not_public, full_name, alias, email, social_media, bio, tags } = req.body.person;

    const userId = mongoose.Types.ObjectId(user._id);

    const person = await Person.findOne({ user: userId });

    person.not_public = not_public;
    person.full_name = full_name;
    person.alias = alias;
    person.email = email;
    person.social_media = social_media;
    person.bio = bio;
    person.tags = tags;

    const saved = await person.save();
    res.json({ person: saved });

  } catch (error) {
    next(error);
  }
});

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin']), async (req, res, next) => {
  const { person } = req.body;

  try {
    if (!person) throw API_Error('ADD_PERSON_ERROR', 'New person data invalid.');

    person.gravatar_hash = (person.email && person.email.length) ? md5(person.email.trim().toLowerCase()) : undefined;

    const result = await Person.create(person);
    res.send({ person: result });
  } catch (err) {
    next(err);
  }
});

router.put('/:_id', secured({secret: config.server.jwtSecret}), hasRoles(['admin']), async (req, res, next) => {
  const { _id } = req.params;
  const { person } = req.body;

  try {
    person.gravatar_hash = (person.email && person.email.length) ? md5(person.email.trim().toLowerCase()) : undefined;
    const result = await Person.findByIdAndUpdate(_id, { ...person });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});

router.delete('/:_id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin']), async (req, res, next) => {
  const { _id } = req.params;
  try {
    const result = await Person.deleteOne({ _id });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
