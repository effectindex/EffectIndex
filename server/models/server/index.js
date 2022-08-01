const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasPerms = require('../HasPerms');
const API_Error = require('../ApiError');

const shell = require('shelljs');

router.get("/restart", secured({secret: config.server.jwtSecret, algorithms: ['HS256']}), hasPerms('admin'), async (req, res, next) => {
  res.sendStatus(200);
  shell.exec('../restart');
});

module.exports = router;
