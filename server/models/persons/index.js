const express = require('express');
const md5 = require('md5');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasPerms = require('../HasPerms');
const API_Error = require('../ApiError');

const Person = require('./Person');
const mongoose = require('mongoose');

router.get('/', async (req, res, next) => {
  try {
    const people = await Person.find();
    res.json({ people });
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

    const userId = mongoose.Types.ObjectId(user._id);

    const found = await Person.findOne({ user: userId });

    if (!found) {

      const person = new Person({
        user: mongoose.Types.ObjectId(_id),
        not_public,
        full_name,
        alias,
        email,
        gravatar_hash: email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        social_media,
        'bio.raw': bio,
        tags
      });

      const saved = await person.save();
      res.json({ person: saved });
    
    } else {

        found.not_public = not_public;
        found.full_name = full_name;
        found.alias = alias;
        found.email = email;
        found.gravatar_hash = email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        found.social_media = social_media;
        found.bio = { raw: bio };
        found.tags = tags;
    
        const saved = await found.save();
        res.json({ person: saved });

    }

  } catch (error) {
    next(error);
  }
});


router.post('/', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
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

router.put('/:_id', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
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

router.delete('/:_id', secured({ secret: config.server.jwtSecret }), hasPerms('admin'), async (req, res, next) => {
  const { _id } = req.params;
  try {
    const result = await Person.deleteOne({ _id });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
