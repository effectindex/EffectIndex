const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const Effect = require('./Effect');
const Replication = require('../replications/Replication');
const Report = require('../reports/Report');

router.get('/', async (req, res) => {
  try {
    const effects = await Effect.find()
      .select('_id tags featured subarticles name url social_media_image long_summary.parsed summary_raw')
      .sort({ name: 'asc' })
      .exec();
    res.send({ effects });
  } catch (error) {
    next(error);
  }
});


router.post('/', secured({secret: config.server.jwtSecret}), hasPerms('admin-effects'), async (req, res) => {
  try {

    if (!('effect' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');

    const { name, description, summary, long_summary, analysis, style_variations, personal_commentary,
      contributors, external_links, see_also, tags, citations, gallery_order, social_media_image,
      featured, subarticles, toc } = req.body.effect;

    const e = new Effect({
      name,
      url: name,
      tags,
      toc,
      ['description.raw']: description,
      ['long_summary.raw']: long_summary,
      ['analysis.raw']: analysis,
      ['style_variations.raw']: style_variations,
      ['personal_commentary.raw']: personal_commentary,
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

    const effect = await e.save();

    res.json({ effect });

  } catch (error) {
    next(error);
  }

});

router.get('/admin/:slug', secured({secret: config.server.jwtSecret}), hasPerms('admin-effects', 'edit-effects'), async (req, res) => {
  try {
    const { slug } = req.params;
    const effect = await Effect.findOne({ url: slug });

    if (!effect) throw API_Error('GET_EFFECT_ERROR', 'The specified effect (by slug) was not found.', 404);

    effect.replications = await Replication.find({
      type: { $in: ['image', 'gfycat'] },
      associated_effects: effect._id
    });

    effect.audio_replications = await Replication.find({
      type: { $in: ['audio'] },
      associated_effects: effect._id
    });
    
    res.json({ effect });

  } catch (error) {
    next(error);
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

router.post('/:id', secured({secret: config.server.jwtSecret}), hasPerms('edit-effects', 'admin-effects'), async (req, res) => {
  const { name, description, summary, long_summary, analysis, style_variations, personal_commentary,
  contributors, external_links, see_also, tags, citations, gallery_order, social_media_image,
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

router.delete('/:id', secured({secret: config.server.jwtSecret}), hasPerms('admin-effects'), async (req, res) => {
  try {
    const deleted = await Effect.findByIdAndRemove(req.params.id).exec();
    res.send({ effect: deleted });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
