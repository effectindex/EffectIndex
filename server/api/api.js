const express = require('express');
const router = express.Router();
const auth = require('./auth.js');
const blog = require('./blog.js');

router.use('/auth', auth);
router.use('/blog', blog);

module.exports = router;
