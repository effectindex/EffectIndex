const express = require('express');
const router = express.Router();
const auth = require('./auth/index'),
      blog = require('./blog/index'),
      effects = require('./effects/index'),
      replications = require('./replications/index'),
      users = require('./users/index'),
      invitations = require('./invitations/index');


router.use('/auth', auth);
router.use('/blog', blog);
router.use('/effects', effects);
router.use('/replications', replications);
router.use('/users', users);
router.use('/invitations', invitations);

router.use(function (err, req, res, next) {
      let error = (err['type'] === 'API' ? { name: err.name, message: err.message} : err)
      res.status(500).send(error);
});

module.exports = router;