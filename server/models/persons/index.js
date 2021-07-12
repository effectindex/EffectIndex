const express = require('express');
const md5 = require('md5');
const router = express.Router();
const config = require ('../../../nuxt.config.js');

const secured = require('express-jwt');
const hasPerms = require('../HasPerms');
const API_Error = require('../ApiError');

const uniqueSlug = require('unique-slug');

const Person = require('./Person');
const User = require('../users/User');

const mongoose = require('mongoose');



const multer = require('multer');
const mkdirp = require('mkdirp');
const mime = require('mime');

const MAX_FILE_SIZE = 10485760; // 10 MB
const STATIC_ASSETS_DIRECTORY = 'static/';
const TEMPORARY_IMAGE_DIRECTORY = 'temp/';


// Generates the filename for a given file
const filename = (req, file, cb) => {
  const extension = mime.extension(file.mimetype);
  const filename = `${uniqueSlug()}.${extension}`;
  cb(null, filename.toLowerCase());
};

// Generates the destination directory for a given file
const destination = async (req, file, cb) => {
  const tempDirectory = STATIC_ASSETS_DIRECTORY + TEMPORARY_IMAGE_DIRECTORY;
  await mkdirp(tempDirectory);
  cb(null, tempDirectory);
};

const storage = multer.diskStorage({ filename, destination });

const uploadAny = multer({ storage, limits: { fileSize: MAX_FILE_SIZE } }).any();

router.post('/imageUpload', secured({ secret: config.server.jwtSecret }), hasPerms('own-person', 'all-people'), uploadAny, async(req, res, next) => {
  try {
    const { files } = req;
    if (Array.isArray(files) && files.length) {
      const file = files.shift();
      try {
        res.json({ imageUrl: TEMPORARY_IMAGE_DIRECTORY + file.filename });
      } catch (error) {
        console.log(error);
        throw API_Error('UPLOAD_IMAGE_ERROR', 'Failed to update user profile.');
      }
    } else {
      throw API_Error('UPLOAD_IMAGE_ERROR', 'No files were selected for upload.');
    }
  } catch (error) {
    next(error);
  }
});


router.get('/', async (req, res, next) => {
  try {
    const people = await Person.find();
    res.json({ people });
  } catch (err) {
    next(err);
  }
});

router.get('/me', secured({ secret: config.server.jwtSecret }), async(req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('GET_SELF_PROFILE_ERROR', 'User is not logged in.');
    const { _id } = req.user;
    const person = await Person.findOne({ user: _id });

    res.json({ person });

  } catch (error) {
    next(error);
  }
});

router.post('/me', secured({ secret: config.server.jwtSecret }), hasPerms('edit-profile'), async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('SAVE_SELF_PROFILE_ERROR', 'User is not logged in.');

    const { _id } = req.user;
    
    if (!req.body || !req.body.person) throw API_Error('UPDATE_SELF_PROFILE-ERROR', 'Invalid update data');

    const { not_public, full_name, alias, email, social_media, bio, tags, image } = req.body.person;

    const found = await Person.findOne({ user: _id });

    if (!found) {

      const person = new Person({
        user: mongoose.Types.ObjectId(_id),
        not_public,
        full_name,
        alias,
        email,
        gravatar_hash: email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        social_media,
        'bio.raw': bio,
        image
      });

      if (user.can('admin')) {
        person.tags = tags;
      }

      const saved = await person.save();

      await User.findOneAndUpdate({ _id }, { identity: saved._id });

      res.json({ person: saved });
    
    } else {

        found.not_public = not_public;
        found.full_name = full_name;
        found.alias = alias;
        found.email = email;
        found.gravatar_hash = email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        found.social_media = social_media;
        found.bio = { raw: bio };
        found.image = image;

        if (user.can('admin')) {
          person.tags = tags;
        }
    
        const saved = await found.save();
        res.json({ person: saved });

    }

  } catch (error) {
    next(error);
  }
});


router.post('/', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
  const { person } = req.body;

  try {
    if (!person) throw API_Error('ADD_PERSON_ERROR', 'New person data invalid.');

    person.gravatar_hash = (person.email && person.email.length) ? md5(person.email.trim().toLowerCase()) : undefined;

    const result = await Person.create(person);
    res.send({ person: result });
  } catch (err) {
    next(err);
  }
});

router.put('/:_id', secured({secret: config.server.jwtSecret}), hasPerms('admin'), async (req, res, next) => {
  const { _id } = req.params;
  const { person } = req.body;

  try {
    person.gravatar_hash = (person.email && person.email.length) ? md5(person.email.trim().toLowerCase()) : undefined;
    const result = await Person.findByIdAndUpdate(_id, { ...person });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});

router.delete('/:_id', secured({ secret: config.server.jwtSecret }), hasPerms('admin'), async (req, res, next) => {
  const { _id } = req.params;
  try {
    const result = await Person.deleteOne({ _id });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
