const express = require('express');
const router = express.Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Report = require('./Report');

router.post('/', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res, next) => {
  if (!'report' in req.body) throw API_Error('SUBMIT_REPORT_ERROR', 'The request was invalid.');
  try {
    let report = new Report(req.body.report);
    let savedReport = await report.save();
    if (!savedReport) throw API_Error('SUBMIT_REPORT_ERROR', 'The report failed to save.');

    res.status(200).send({ report: savedReport });

  } catch (error) {
    next(error);
  }
});

router.put('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res, next) => {
  if (!'report' in req.body) throw API_Error('UPDATE_REPORT_ERROR', 'The request was invalid.');
  try {
    let report = req.body.report;

    let result = await Report
      .findByIdAndUpdate(req.params.id, report)
      .exec();

    if (!result) throw API_Error('UPDATE_REPORT_ERROR', 'The report failed to update.');

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res, next) => {
  try {
    let response = await Report
      .findByIdAndRemove(req.params.id)
      .exec();

    if (!response) throw API_Error('DELETE_REPORT_ERROR', 'The report failed to delete.');

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    let reports = await Report
      .find()
      .exec();
    if (!reports) throw API_Error('GET_REPORTS_ERROR', 'The server failed to retrieve the reports.');
    res.status(200).send({ reports });
  } catch (error) {
    next(error);
  }
});


module.exports = router;