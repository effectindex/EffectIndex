const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Article = require('./Article');

module.exports = router;