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
    let report = req.body.reportData;
    if ('sectionVisibility' in req.body) report.sectionVisibility = req.body.sectionVisibility;
    report = new Report(report);
    let savedReport = await report.save();
    if (!savedReport) throw API_Error('SUBMIT_REPORT_ERROR', 'The report failed to save.');

    res.status(200).send({ report: savedReport });

  } catch (error) {
    next(error);
  }
});

router.put('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async (req, res, next) => {
  if (!'reportData' in req.body) throw API_Error('UPDATE_REPORT_ERROR', 'The request was invalid.');
  try {
    let { reportData, sectionVisibility } = req.body;
    reportData.sectionVisibility = sectionVisibility;

    let report = await Report
      .findById(req.params.id)
      .exec();

    if (!report) throw API_Error('UPDATE_REPORT_ERROR', 'The report could not be found.');
    for (let field in reportData) report[field] = reportData[field];
    let result = report.save();
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

router.get('/all', async (req, res, next) => {
  try {
    let reports = await Report
      .find()
      .populate('related_effects', 'name')
      .exec();
    if (!reports) throw API_Error('GET_REPORTS_ERROR', 'The server failed to retrieve the reports.');
    res.status(200).send({ reports });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', secured({ secret: config.server.jwtSecret }), hasRoles(['admin', 'editor']), async(req, res, next) => {
  try {
    let reportData = await Report
      .findById(req.params.id)
      .exec();

    if (!reportData) throw API_Error('GET_REPORT_ERROR', 'The report could not be found.');
    const sectionVisibility = reportData.sectionVisibility;
    delete reportData.sectionVisibility;
    res.send({ reportData, sectionVisibility });
  } catch (error) {
    next(error);
  }
});

router.get('/slug/:slug', async(req, res, next) => {
  let slug = req.params.slug;
  try {
    let report = await Report
      .findOne({ slug })
      .populate('related_effects', 'name url tags')
      .lean()
      .exec();

    if (!report) throw API_Error('GET_REPORT_ERROR', 'The specified report could not be found.');

    delete report.sectionVisibility;

    res.send({ report });

  } catch (error) {
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    let reports = await Report
      .find()
      .select('title subject substances featured tags related_effects slug')
      .exec();
    if (!reports) throw API_Error('GET_REPORTS_ERROR', 'The server failed to retrieve the reports.');
    res.status(200).send({ reports });
  } catch (error) {
    next(error);
  }
});

router.post('/search', async (req, res, next) => {
  try {
    const { term } = req.body;
    if (!term) {
      res.sendStatus(200);
    } else {
      const results = await Report
      .find({ 
        $or: [
          { title: { $regex: term } },
          { 'subject.name': { $regex: term } }
        ]
      })
      .select('title subject');
      res.json({ results });
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;