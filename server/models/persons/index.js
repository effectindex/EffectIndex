const express = require('express');
const md5 = require('md5');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasRoles = require('../HasRoles');
const API_Error = require('../ApiError');


const Person = require('./Person');

router.get('/', async (req, res, next) => {
  try {
    const results = await Person
      .find();
    res.json({ people: results });
  } catch (err) {
    next(err);
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
