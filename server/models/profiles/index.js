const express = require('express');
const router = express.Router();
const { jwtSecret: secret } = require ('../../../nuxt.config.js').server;
const secured = require('express-jwt');

const multer = require('multer');
const mkdirp = require('mkdirp');
const mime = require('mime');

const MAX_FILE_SIZE = 10485760; // 10 MB

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Profile = require('./Profile');

router.get('/', async (req, res, next) => {
  try {
    const profiles = await Profile.find()
      .sort({ sortOrder: 'asc' })
      .exec();

    res.status(200).send({ profiles });
  } catch (error) {
    next(error);
  }
});

const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    const username = 'username' in req.body ? req.body.username : 'unknown';
    const extension = mime.extension(file.mimetype);
    const filename = `${username}'.'${extension}`;
    cb(null, filename.toLowerCase());
  },
  destination: async function (req, file, cb) {
    const fullImagesDirectory = 'static/img/profiles/';
    const croppedImagesDirectory = 'static/img/profiles/cropped';

    if (file.fieldname === 'fullImageData') {
      const directory = await mkdirp(fullImagesDirectory);
      cb(null, fullImagesDirectory);
    }

    if (file.fieldname === 'croppedImageData') {
      const directory = await mkdirp(croppedImagesDirectory);
      cb(null, croppedImagesDirectory);
    }
  }
});

const uploadAny = multer({ storage, limits: { fileSize: MAX_FILE_SIZE } }).any();

router.post('/upload', secured({ secret }), hasRoles(['admin', 'editor']), uploadAny, async(req, res, next) => {
  try {
    const profile = { profileImageFull: undefined, profileImageCropped: undefined };
    const { files } = req;

    if (Array.isArray(files) && files.length) {
      for (const file of files) {
        if (file.fieldname === 'fullImageData') profile.profileImageFull = file.filename;
        if (file.fieldname === 'croppedImageData') profile.profileImageCropped = file.filename;
      }

      try {
        const updatedRecord = await Profile.findOneAndUpdate({ username: req.body.username }, profile);
      } catch (error) {
        throw API_Error('UPLOAD_IMAGE_ERROR', 'Failed to update user profile.');
      }

      res.sendStatus(200);
    } else {
      throw API_Error('UPLOAD_IMAGE_ERROR', 'No files were selected for upload.');
    }
  } catch (error) {
    next(error);
  }
});

router.post('/', secured({ secret }), hasRoles(['admin']), async(req, res, next) => {
  try {
    if (!('profile' in req.body)) throw API_Error('PROFILE_ADD_ERROR', 'The submitted request is invalid.');
    if (typeof (req.body.profile) === 'string') req.body.profile = JSON.parse(req.body.profile);
    const profile = new Profile(req.body.profile);
    const returnedProfile = await profile.save();
    if (returnedProfile) res.send({ profile: returnedProfile });
    else throw API_Error('PROFILE_ADD_ERROR', 'Failed to save profile.');
  } catch (error) {
    if (error.code === 11000) next(API_Error('PROFILE_ADD_ERROR', 'Profile for user already exists.'));
    if (error.name === 'ValidationError') next(API_Error("PROFILE_ADD_ERROR", 'Vaidation error.'));
    next(error);
  }
});

router.put('/:id', secured({ secret }), uploadAny, async(req, res, next) => {
  let id = req.params.id;
  try {
    if (!('profile' in req.body)) throw API_Error('PROFILE_UPDATE_ERROR', 'The submitted request is invalid.');
    let { profile } = req.body;
    let updatedRecord = await Profile.findByIdAndUpdate(id, profile).exec();
    if (updatedRecord) res.sendStatus(200);
    else throw API_Error('PROFILE_UPDATE_ERROR', 'Failed to save updated profile.');
  } catch (error) {
    if (error.code === 11000) next(API_Error('PROFILE_UPDATE_ERROR', 'Profile for user already exists.'));
    if (error.name === 'ValidationError') next(API_Error("PROFILE_UPDATE_ERROR", 'Vaidation error.'));
    next(error);
  }
});

router.delete('/:id', secured({ secret }), hasRoles(['admin']), async(req, res, next) => {
  let id = req.params.id;
  try {
    if (!id) throw API_Error('DELETE_PROFILE_ERROR', 'An ID must be supplied.');
    let deletedProfile = await Profile.findByIdAndRemove(id).exec();
    res.sendStatus(200);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', secured({ secret }), hasRoles(['admin', 'editor']), async(req, res, next) => {
  let id = req.params.id;
  try {
    if (!id) throw API_Error('GET_PROFILE_ERROR', 'An ID is required.');

    let profile = await Profile.findById(id).exec();
    res.status(200).send({ profile });
  } catch (error) {
    next(error);
  }
});

router.get('/user/:username', async(req, res, next) => {
  const { username } = req.params;
  const usernameRegex = new RegExp(`^${username}$`, 'i');
  try {
    const profile = await Profile.findOne({ username: usernameRegex });
    res.json({ profile });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
