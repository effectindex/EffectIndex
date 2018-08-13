const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Replication = require('./Replication');
const Effect = require('../effects/Effect');

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {

  try {
    let r = req.body.replication;

    const replication = new Replication({
      title: r.title,
      artist: r.artist,
      artist_url: r.artist_url,
      description: r.description,
      date: r.date,
      resource: r.resource,
      thumbnail: r.thumbnail,
      type: r.type,
      associated_effects: r.associated_effects
    });

    let returnedReplication = await replication.save().catch((err) => {
      throw API_Error('REPLICATION_SAVE_ERROR', err);
    });

    res.send({ replication: returnedReplication });

  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/gallery', async (req, res) => {
  try {
    let replications = await Replication.find().exec();
    let replicated_effects = await Effect.find(
      { _id: { $in: await Replication.find({
        type: { $in: ['gfycat', 'image']}
      }).distinct("associated_effects") } })
      .select('name gallery_order url');
    res.send({ replications, replicated_effects });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/', async (req, res) => {

  try {
    let replications = await Replication.find().sort({ type: 'desc' }).exec();
    res.send({ replications });
  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/byartist/:artist', async (req, res, next) => {
  let artist = req.params.artist;
  try {
    let replications = await Replication.find({ artist }).exec();
    res.send({ replications });
  } catch (error) {
    next(error);
  }
});

router.get('/:url', async (req, res) => {
  try {
    let replication = await Replication.findOne({ url: req.params.url }).exec();
    res.send({ replication });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res) => {
  try {
    if (!('replication' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');
    let replication = req.body.replication;
    if (replication) {

      let r = await Replication.findById(req.params.id).exec();
      ['title', 'artist', 'artist_url', 'description', 'date', 'resource', 'thumbnail', 'type', 'associated_effects']
      .forEach((field) => r[field] = replication[field]);

      let updatedReplication = await r.save();
      if (!updatedReplication) throw API_Error('UPDATE_REPLICATION_ERROR', 'The replication was not successfully updated.');
      res.send({ effect: updatedReplication });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.delete('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res) => {
  try {
    let deletedReplication = await Replication.findByIdAndRemove(req.params.id).exec();
    res.send({ replication: deletedReplication });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;