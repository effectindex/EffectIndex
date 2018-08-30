const express = require('express');
const router = express.Router();
const Effect = require('../effects/Effect');
const Report = require('../reports/Report');

router.post("/", async (req, res, next) => {
  const query = req.body.query;
  if (!query) res.sendStatus(204);
  else {
    const effectResults = await searchEffects(query)
      .catch((err) => next(err));

    const reportResults = await searchReports(query)
      .catch((err) => next(err));

    let results = [];

    effectResults.forEach((result) => {
      results.push(
        {
          _id: result._id,
          type: 'effect',
          data: result
        }
      );
    });

    reportResults.forEach((result) => {
      results.push(
        {
          _id: result._id,
          type: 'report',
          data: result
        }
      );
    });

    res.send(results);
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

module.exports = router;