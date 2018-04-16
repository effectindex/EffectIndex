const express = require('express');
const router = express.Router();
const auth = require('./auth/index'),
      blog = require('./blog/index'),
      effects = require('./effects/index');

router.use('/auth', auth);
router.use('/blog', blog);
router.use('/effects', effects);

module.exports = router;