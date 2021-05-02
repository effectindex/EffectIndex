const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Effect = require('./Effect');
const Replication = require('../replications/Replication');
const Report = require('../reports/Report');

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {

  try {

    if (!('effect' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');

    const { name, description, summary, long_summary, analysis, style_variations, personal_commentary,
      contributors, related_substances, external_links, see_also, tags, citations, gallery_order, social_media_image,
      featured, subarticles, toc } = req.body.effect;

    const effect = new Effect({
      name,
      url: name,
      tags,
      toc,
      ['description.raw']: description,
      ['long_summary.raw']: long_summary,
      ['analysis.raw']: analysis,
      ['style_variations.raw']: style_variations,
      ['personal_commentary.raw']: personal_commentary,
      related_substances,
      gallery_order,
      see_also,
      external_links,
      citations,
      summary_raw: summary,
      contributors,
      social_media_image,
      featured,
      subarticles,
    });

    let returnedEffect = await effect.save().catch((err) => {
      throw API_Error('EFFECT_SAVE_ERROR', err);
    });

    res.send({ effect: returnedEffect });

  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/', async (req, res) => {
  try {
    let effects = await Effect
      .find()
      .sort({ name: 1 })
      .select(
        '_id tags markup_format featured subarticles name url social_media_image long_summary summary_raw')
      .exec();
    res.send({ effects });
  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/admin/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    const effect = await Effect.findOne({ url: slug });
    if (effect) {
      effect.replications = await Replication.find({
        type: { $in: ['image', 'gfycat'] },
        associated_effects: effect._id
       });
       effect.audio_replications = await Replication.find({
        type: { $in: ['audio'] },
        associated_effects: effect._id
      });
    }
    res.json({ effect });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.get('/:url', async (req, res) => {
  try {
    let effect = await Effect.findOne({ url: req.params.url });
    if (effect) {
      effect = effect.toJSON();
      effect.replications = await Replication.find({
         type: { $in: ['image', 'gfycat'] },
         associated_effects: effect._id
        });
      effect.audio_replications = await Replication.find({
        type: { $in: ['audio'] },
        associated_effects: effect._id
      });
      effect.related_reports = await Report.find({
        related_effects: effect._id
      })
      .select('title subject substances slug featured');
    }
    res.send({ effect });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {
  const { name, description, summary, long_summary, analysis, style_variations, personal_commentary,
  contributors, related_substances, external_links, see_also, tags, citations, gallery_order, social_media_image,
  featured, subarticles, toc } = req.body;

  const _id = req.params.id;

  try {

    const effect = await Effect.findById(_id);

    effect.description.raw = description;
    effect.long_summary.raw = long_summary;
    effect.analysis.raw = analysis;
    effect.style_variations.raw = style_variations;
    effect.personal_commentary.raw = personal_commentary;

    Object.assign(effect, {
      url: name,
      name,
      toc,
      contributors,
      related_substances,
      external_links,
      summary_raw: summary,
      see_also,
      tags,
      citations,
      gallery_order,
      social_media_image,
      featured,
      subarticles
    });

    const updated = await effect.save();

    res.send({ effect: updated });

  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let deletedEffect = await Effect.findByIdAndRemove(req.params.id).exec();
    res.send({ effect: deletedEffect });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
