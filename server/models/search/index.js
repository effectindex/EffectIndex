const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const Effects = require('../effects/');
const Reports = require('../reports/');

router.post("/", async (req, res) => {
  const query = req.body.query;
  if (!query.length) res.sendStatus(204);

  res.send([
    {
      type: 'effect',
      name: 'acuity osmething',
      tags: ['a', 'b', 'george']
    },
    {
      type: 'report',
      name: 'i like doing drugs i am smart',
      tags: ['c', 'd', 'fionna']
    }
  ]);
});

module.exports = router;