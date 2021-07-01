const router = require('express').Router();
const config = require('../../../nuxt.config.js');
const secured = require('express-jwt');

const API_Error = require('../ApiError');
const hasPerms = require('../HasPerms');

const mongoose = require('mongoose');
const Report = require('./Report');

router.post('/', secured({ secret: config.server.jwtSecret }), hasPerms('own-reports', 'all-reports'), async (req, res, next) => {
  if (!'report' in req.body) throw API_Error('SUBMIT_REPORT_ERROR', 'The request was invalid.');
  const { user } = req;
  try {
    const { report, sectionVisibility } = req.body;

    report.sectionVisbility = sectionVisibility;
    report.user = mongoose.Types.ObjectId(user._id);

    const newReport = new Report(report);
    const savedReport = await newReport.save();

    if (!savedReport) throw API_Error('SUBMIT_REPORT_ERROR', 'The report failed to save.');

    res.json({ report: savedReport });

  } catch (error) {
    next(error);
  }
});

router.put('/:id', secured({ secret: config.server.jwtSecret }), hasPerms('own-reports', 'all-reports'), async (req, res, next) => {
  if (!'report' in req.body) throw API_Error('UPDATE_REPORT_ERROR', 'The request was invalid.');
  const { user } = req;
  try {
    const { report, sectionVisibility } = req.body;
    report.sectionVisibility = sectionVisibility;

    const updatedReport = await Report.findById(req.params.id).exec();

    if (!updatedReport) throw API_Error('UPDATE_REPORT_ERROR', 'The report could not be found.');

    if (!user.can('all-reports') && (user._id !== String(updatedReport.user))) {
      throw API_Error('UPDATE_REPORT_ERROR', 'The user does not have access to modify this report.');
    }

    for (const field in report) {
      updatedReport[field] = report[field];
    }

    const savedReport = await updatedReport.save();

    if (!savedReport) throw API_Error('UPDATE_REPORT_ERROR', 'The report failed to update.');
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id', secured({ secret: config.server.jwtSecret }), hasPerms('own-reports', 'all-reports'), async (req, res, next) => {
  const { user } = req;

  try {

    const _id = mongoose.Types.ObjectId(req.params.id);

    if (!_id) throw API_Error('DELETE_REPORT_ERROR', 'Invalid request.');

    const report = await Report.findById(_id).exec();

    if (!user.can('all-reports') && (String(report.user) !==  user._id)) {
      throw API_Error('DELETE_REPORT_ERROR', 'Cannot delete reports that are not your own.');
    }

    await report.deleteOne();

    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get('/admin', secured({ secret: config.server.jwtSecret }), hasPerms('own-reports', 'all-reports'), async (req, res, next) => {
  const { user } = req;
  try {

    const _id = mongoose.Types.ObjectId(user._id);

    if (!user.can('all-reports')) {
      const reports = await Report.find({ user: _id }).select('title subject featured tags slug');
      res.json({ reports });
    } else {
      const reports = await Report.find().select('title subject featured tags slug');
      res.json({ reports });
    }

  } catch (error) {
    next(error);
  }

});

router.get('/:id', secured({ secret: config.server.jwtSecret }), hasPerms('own-reports', 'all-reports'), async(req, res, next) => {
  try {
    const { user } = req;
    const id = mongoose.Types.ObjectId(req.params.id);
    const report = await Report.findById(id).exec();

    if (!user.can('all-reports') && (String(report.user) !== user._id)) throw API_Error('GET_REPORT_ERROR', 'Cannot edit reports that are not yours');

    if (!report) throw API_Error('GET_REPORT_ERROR', 'The report could not be found.');
    const sectionVisibility = report.sectionVisibility;
    delete report.sectionVisibility;
    res.send({ reportData: report, sectionVisibility });
  } catch (error) {
    next(error);
  }
});

router.get('/slug/:slug', async(req, res, next) => {
  const { slug } = req.params;

  try {

    if (!slug) throw API_Error('GET_REPORT_ERROR', 'Invalid slug.');

    let report = await Report
      .findOne({ slug })
      .select('-user -sectionVisibility')
      .populate('related_effects', 'name url tags')
      .lean()
      .exec();

    if (!report) throw API_Error('GET_REPORT_ERROR', 'The specified report could not be found.');

    res.send({ report });

  } catch (error) {
    next(error);
  }
});






router.get('/', async (req, res, next) => {
  try {
    const reports = await Report.find()
      .select('title subject substances featured tags related_effects slug')
      .exec();
    if (!reports) throw API_Error('GET_REPORTS_ERROR', 'The server failed to retrieve the reports.');
    res.json({ reports });
  } catch (error) {
    next(error);
  }
});

router.post('/search', async (req, res, next) => {
  try {
    const { term } = req.body;
    if (!term) res.sendStatus(200);
    else {
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