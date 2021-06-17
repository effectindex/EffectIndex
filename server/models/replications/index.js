const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const Replication = require('./Replication');
const Effect = require('../effects/Effect');
const mongoose = require('mongoose');

router.post('/', secured({secret: config.server.jwtSecret}), hasPerms('all-replications', 'own-replications'), async (req, res, next) => {
  try {

    const { user } = req;

    if (!user || !user._id) throw API_Error('CREATE_REPLICATION_ERROR', 'User is not logged in.');

    const { replication } = req.body;

    if (!replication) throw API_Error('CREATE_REPLICATION_ERROR', 'Replication data invalid.');

    const { title, artist, artist_url, description, date, resource, thumbnail, type, associated_effects, featured, person } = replication;

    const saved = await new Replication({
      user: user._id,
      title,
      artist,
      artist_url,
      description,
      date,
      resource,
      thumbnail,
      person,
      type,
      associated_effects,
      featured,
    }).save();
    
    res.json({ replication: saved });

  } catch (error) {
    next(error);
  }

});

router.get('/gallery', async (req, res, next) => {
  try {
    const replications = await Replication.find().exec();
    const replicated_effects = await Effect.find(
      { _id: { $in: await Replication.find({
        type: { $in: ['gfycat', 'image']}
      }).distinct("associated_effects") } })
      .select('name gallery_order url');
    res.send({ replications, replicated_effects });
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {

  try {
    
    const replications = await Replication.find().sort({ type: 'desc' }).exec();

    res.send({ replications });

  } catch (error) {
    next(error);
  }

});

router.get('/byartist/:artist', async (req, res, next) => {
  const { artist } = req.params;
  try {
    const replications = await Replication.find({ artist }).exec();
    res.send({ replications });
  } catch (error) {
    next(error);
  }
});

router.get('/:url', async (req, res, next) => {
  try {
    let replication = await Replication.findOne({ url: req.params.url }).exec();
    res.send({ replication });
  } catch (error) {
    next(error)
  }
});

router.post('/:id', secured({ secret: config.server.jwtSecret }), hasPerms('all-replications', 'own-replications'), async (req, res, next) => {
  try {
    const { user } = req;

    if (!user || !user._id) throw API_Error('UPDATE_REPLICATION_ERROR', 'User is not logged in.');

    const { replication } = req.body;

    if (!replication) throw API_Error('UPDATE_REPLICATION_ERROR', 'Replication data invalid.');

    const { id } = req.params;

    if (!id || !mongoose.isValidObjectId(id)) throw API_Error('UPDATE_REPLICATION_ERROR', 'Invalid replication ID provided.');

    const { title, artist, artist_url, description, date, resource, thumbnail, type, associated_effects, featured, person } = replication;

    const rep = await Replication.findById(id).exec();

    if (!rep) throw API_Error('UPDATE_REPLICATION_ERROR', 'Replication was not found');

    rep.title = title;
    rep.artist = artist;
    rep.artist_url = artist_url;
    rep.description = description;
    rep.date = date;
    rep.resource = resource;
    rep.thumbnail = thumbnail;
    rep.type = type;
    rep.person = person;
    rep.associated_effects = associated_effects;
    rep.featured = featured;

    const result = await rep.save();

    if (!result) throw API_Error('UPDATE_REPLICATION_ERROR', 'The replication was not successfully updated.');

    console.log(result);

    res.sendStatus(200);

  } catch (error) {
    next(error);
  }
});

router.delete('/:id', secured({ secret: config.server.jwtSecret }), hasPerms('all-replications', 'own-replications'), async (req, res, next) => {
  try {
    let deletedReplication = await Replication.findByIdAndRemove(req.params.id).exec();
    res.send({ replication: deletedReplication });
  } catch (error) {
    next(error)
  }
});

module.exports = router;