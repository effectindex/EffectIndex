const express = require('express');
const router = express.Router();
const Effect = require('../effects/Effect');
const Report = require('../reports/Report');
const Article = require('../articles/Article');

router.post("/", async (req, res, next) => {
  const query = req.body.query;
  if (!query) res.sendStatus(204);
  else {
    try {
      const effects = await searchEffects(query);
      const reports = await searchReports(query);
      const articles = await searchArticles(query);

      const results = {
        effects,
        reports,
        articles,
        total_results: effects.length + reports.length + articles.length
      };

      res.send(results);
    } catch (err) {
      next(err);
    }
  }
});

async function searchEffects(query) {
  const results = await Effect.find({
    $text: {
      $search: query
    }
  })
  .select('_id name tags summary_raw url')
  .exec()
  .catch((err) => {
    throw new Error(err);
  });

  return results;

};

async function searchReports(query) {
  const results = await Report.find({
    $text: {
      $search: query
    }
  })
  .select('_id title subject substances tags slug')
  .exec()
  .catch((err) => {
    throw new Error(err);
  });

  return results;
};

async function searchArticles(query) {
  const results = await Article.find({
    $text: {
      $search: query
    },
    'publication_status': 'published'
  })
  .select('_id title subtitle tags authors publication_date featured slug short_description social_media_image')
  .populate('authors')
  .exec()
  .catch((err) => {
    throw new Error(err);
  });

  return results;
}

module.exports = router;