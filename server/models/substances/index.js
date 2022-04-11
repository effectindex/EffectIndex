const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Substance = require('./Substance');
const Replication = require('../replications/Replication');

const DocumentParser = require('../../../lib/DocumentParser');
const parser = new DocumentParser();

function kebab(text) {
  return text.toLowerCase().replace(/ /g, '-').replace(/[^0-9a-z\-]/gi, '');
}

router.post('/', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {

  try {

    if (!('substance' in req.body)) throw API_Error('INVALID_REQUEST', 'The request was invalid.');

    let e = req.body.substance;

    const substance = new Substance({
      name: e.name,
      url: kebab(e.name),
      tags: e.tags,
      description_raw: e.description,
      description_formatted: JSON.stringify(parser.parse(e.description)),
      related_substances: e.related_substances,
      see_also: e.see_also,
      external_links: e.external_links,
      citations: e.citations,
      summary_raw: e.summary,
      long_summary_raw: e.long_summary,
      long_summary_formatted: JSON.stringify(parser.parse(e.long_summary)),
      contributors: e.contributors,
      duration_raw: e.duration,
      duration_formatted: JSON.stringify(parser.parse(e.duration)),
      intensity_scale_raw: e.intensity_scale,
      intensity_scale_formatted: JSON.stringify(parser.parse(e.intensity_scale)),
      experience_reports_raw: e.experience_reports,
      experience_reports_formatted: JSON.stringify(parser.parse(e.experience_reports)),
      personal_commentary_raw: e.personal_commentary,
      personal_commentary_formatted: JSON.stringify(parser.parse(e.personal_commentary)),
      social_media_image: e.social_media_image,
      featured: e.featured,
      subarticles: e.subarticles,
    });

    let returnedSubstance = await substance.save().catch((err) => {
      throw API_Error('SUBSTANCE_SAVE_ERROR', err);
    });

    res.send({ substance: returnedSubstance });

  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/', async (req, res) => {
  try {
    let substances = await Substance
      .find()
      .sort({ name: 1 })
      .select('-description_raw -description_formatted -long_summary_raw')
      .exec();
    res.send({ substances });
  } catch (error) {
    res.status(500).send({ error });
  }

});

router.get('/:url', async (req, res) => {
  try {
    let substance = await Substance.findOne({ url: req.params.url }).exec();
    if (substance) {
      substance = substance.toJSON();
      substance.replications = await Replication.find({
         type: { $in: ['image', 'gfycat'] },
         associated_substances: substance._id
        }).exec();
      substance.audio_replications = await Replication.find({
        type: { $in: ['audio'] },
        associated_substances: substance._id
      }).exec();
    }
    res.send({ substance });
  } catch (error) {
    res.status(500).send({ error });
  }
});

router.post('/:id', secured({secret: config.server.jwtSecret}), hasRoles(['admin', 'editor']), async (req, res) => {
  try {
    let updatedSubstance = await Substance.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      url: kebab(req.body.name),
      description_raw: req.body.description,
      description_formatted: JSON.stringify(parser.parse(req.body.description)),
      summary_raw: req.body.summary,
      long_summary_raw: req.body.long_summary,
      long_summary_formatted: JSON.stringify(parser.parse(req.body.long_summary)),
      duration_raw: req.body.duration,
      duration_formatted: JSON.stringify(parser.parse(req.body.duration)),
      intensity_scale_raw: req.body.intensity_scale,
      intensity_scale_formatted: JSON.stringify(parser.parse(req.body.intensity_scale)),
      experience_reports_raw: req.body.experience_reports,
      experience_reports_formatted: JSON.stringify(parser.parse(req.body.experience_reports)),
      personal_commentary_raw: req.body.personal_commentary,
      personal_commentary_formatted: JSON.stringify(parser.parse(req.body.personal_commentary)),
      contributors: req.body.contributors,
      related_substances: req.body.related_substances,
      external_links: req.body.external_links,
      see_also: req.body.see_also,
      tags: req.body.tags,
      citations: req.body.citations,
      gallery_order: req.body.gallery_order,
      social_media_image: req.body.social_media_image,
      featured: req.body.featured,
      subarticles: req.body.subarticles
    }, { new: true }).exec();

    res.send({ substance: updatedSubstance });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    let deletedSubstance = await Substance.findByIdAndRemove(req.params.id).exec();
    res.send({ substance: deletedSubstance });
  } catch (error) {
    res.status(500).send({ error });
  }
});

module.exports = router;
