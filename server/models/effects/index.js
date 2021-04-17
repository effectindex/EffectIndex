const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Effect = require('./Effect');
const Replication = require('../replications/Replication');
const Report = require('../reports/Report');

const DocumentParser = require('../../../lib/DocumentParser');
const parser = new DocumentParser();

function kebab(text) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
}

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {

  try {

    if (!('effect' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');

    const { name, markup_format, description, summary, long_summary, analysis, style_variations, personal_commentary,
      contributors, related_substances, external_links, see_also, tags, citations, gallery_order, social_media_image,
      featured, subarticles, toc } = req.body.effect;

    const effect = new Effect({
      name,
      url: kebab(name),
      tags,
      markup_format,
      toc,
      description: {
        raw: description
      },
      description_raw: description,
      description_formatted: JSON.stringify(parser.parse(description)),
      related_substances,
      gallery_order,
      see_also,
      external_links,
      citations,
      summary_raw: summary,
      long_summary: {
        raw: long_summary
      },
      long_summary_raw: long_summary,
      long_summary_formatted: JSON.stringify(parser.parse(long_summary)),
      contributors,
      analysis: {
        raw: analysis
      },
      analysis_raw: analysis,
      analysis_formatted: JSON.stringify(parser.parse(analysis)),
      style_variations: {
        raw: style_variations
      },
      style_variations_raw: style_variations,
      style_variations_formatted: JSON.stringify(parser.parse(style_variations)),
      personal_commentary: {
        raw: personal_commentary
      },
      personal_commentary_raw: personal_commentary,
      personal_commentary_formatted: JSON.stringify(parser.parse(personal_commentary)),
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
        '_id tags markup_format featured subarticles name url social_media_image long_summary long_summary_raw long_summary_formatted ' +
        'summary_raw')
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
  const { name, markup_format, description, summary, long_summary, analysis, style_variations, personal_commentary,
  contributors, related_substances, external_links, see_also, tags, citations, gallery_order, social_media_image,
  featured, subarticles, toc } = req.body;

  try {
    let updatedEffect = await Effect.findByIdAndUpdate(req.params.id, {
      name,
      url: kebab(name),
      markup_format,
      toc,
      description: {
        raw: description
      },
      description_raw: description,
      description_formatted: JSON.stringify(parser.parse(description)),
      summary_raw: summary,
      long_summary: {
        raw: long_summary
      },
      long_summary_raw: long_summary,
      long_summary_formatted: JSON.stringify(parser.parse(long_summary)),
      analysis: {
        raw: analysis
      },
      analysis_raw: analysis,
      analysis_formatted: JSON.stringify(parser.parse(analysis)),
      style_variations: {
        raw: style_variations
      },
      style_variations_raw: style_variations,
      style_variations_formatted: JSON.stringify(parser.parse(style_variations)),
      personal_commentary: {
        raw: personal_commentary
      },
      personal_commentary_raw: personal_commentary,
      personal_commentary_formatted: JSON.stringify(parser.parse(personal_commentary)),
      contributors,
      related_substances,
      external_links,
      see_also,
      tags,
      citations,
      gallery_order,
      social_media_image,
      featured,
      subarticles,
    }, { new: true }).exec();

    res.send({ effect: updatedEffect });
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
