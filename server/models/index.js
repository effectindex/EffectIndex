const mongoose = require('mongoose');
const config = require('../../nuxt.config.js');
mongoose.connect(config.server.mongooseUri);

const express = require('express');
const router = express.Router();
const auth = require('./auth/index'),
      blog = require('./blog/index'),
      effects = require('./effects/index'),
      replications = require('./replications/index');


router.use('/auth', auth);
router.use('/blog', blog);
router.use('/effects', effects);
router.use('/replications', replications);

module.exports = router;