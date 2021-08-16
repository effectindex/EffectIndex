const path = require('path');
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
const { readdir, unlink, access } = require('fs/promises');

const mongoose = require('mongoose');

const sharp = require('sharp');
const multer = require('multer');
const mkdirp = require('mkdirp');
const mime = require('mime');

const MAX_FILE_SIZE = 10485760; // 10 MB
const STATIC_DIR = 'static';
const TEMP_DIR = 'img/temp';
const IMAGE_DIR = 'img/profiles';



// Generates the filename for a given file
const filename = (req, file, cb) => {
  const extension = mime.getExtension(file.mimetype);
  const filename = `${uniqueSlug()}.${extension}`;
  cb(null, filename.toLowerCase());
};

// Generates the destination directory for a given file
const destination = async (req, file, cb) => {
  const destination = path.join(STATIC_DIR, TEMP_DIR);
  await mkdirp(destination);
  await clearDirectory(destination);
  cb(null, destination);
};

const storage = multer.diskStorage({ filename, destination });

const uploadAny = multer({ storage, limits: { fileSize: MAX_FILE_SIZE } }).single('profileImage');

async function clearDirectory(directory) {
  try {
    const files = await readdir(directory);
    for (const file of files) {
      unlink(path.join(directory, file));
    }
  } catch (error) {
    throw new Error("Error clearing directory.");
  }
}

router.post('/imageUpload', secured({ secret: config.server.jwtSecret }), hasPerms('own-person', 'all-people'), uploadAny, async(req, res, next) => {
  try {
    const { file } = req;
    if (file) {
      try {
        res.json({ path: TEMP_DIR + '/', filename: file.filename });
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

router.post('/imageCrop', secured({ secret: config.server.jwtSecret }), hasPerms('own-person', 'all-people'), async(req, res, next) => {
  try {
    const { filename, coordinates } = req.body;
    if (filename && coordinates) {

      const destinationFilename = uniqueSlug() + filename;
      const { left, top, height, width } = coordinates;
      const destinationDir = path.join(STATIC_DIR, IMAGE_DIR, req.user._id);
      const tempDir = path.join(STATIC_DIR, TEMP_DIR);

      await mkdirp(destinationDir);
      await sharp(path.join(tempDir, filename))
        .extract({ left, top, height, width })
        .resize(300, 300)
        .toFile(path.join(destinationDir, destinationFilename));

      res.json({ path: `${IMAGE_DIR}/${req.user._id}/`, filename: destinationFilename });
    } else {
      throw API_Error('CROP_IMAGE_ERROR', 'Invalid crop request.');
    }
  } catch (error) {
    next(error);
  }
});


router.get('/', async (req, res, next) => {
  try {
    const people = await Person.find({ isPrivate: { $ne: true }});
    res.json({ people });
  } catch (err) {
    next(err);
  }
});

router.get('/all', secured({ secret: config.server.jwtSecret }), async (req, res, next) => {
  try {
    const people = await Person.find();
    res.json({ people });
  } catch (err) {
    next(err);
  }
});

router.get('/featured', async (req, res, next) => {
  try {
    const people = await Person.find({ featured: true });
    res.json({ people });
  } catch (error) {
    next(error);
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


router.get('/:profile_url', async (req, res, next) => {
  const { profile_url } = req.params;

  try {

    if (!profile_url) throw API_Error('GET_PERSON_ERROR', 'A profile URL is required.');

    const person = await Person.findOne({ profile_url });

    if (!person) throw API_Error('GET_PERSON_ERROR', 'The person was not found.', 404);

    if (person.isPrivate) throw API_Error('GET_PERSON_ERROR', 'That profile is private.', 500);

    res.json({ person });

  } catch (error) {
    next(error);
  }
});


router.post('/me', secured({ secret: config.server.jwtSecret }), hasPerms('own-person'), async (req, res, next) => {
  try {
    const { user } = req;

    if (!user) throw API_Error('SAVE_SELF_PROFILE_ERROR', 'User is not logged in.');

    const { _id } = req.user;
    
    if (!req.body || !req.body.person) throw API_Error('UPDATE_SELF_PROFILE-ERROR', 'Invalid update data');

    const { isPrivate, full_name, alias, email, social_media, bio, tags, image, profile_image, profile_url } = req.body.person;

    const found = await Person.findOne({ user: _id });

    if (!found) {

      const person = new Person({
        user: mongoose.Types.ObjectId(_id),
        isPrivate,
        full_name,
        alias,
        email,
        gravatar_hash: email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        profile_url: profile_url ? profile_url : full_name || alias,
        social_media,
        profile_image,
        'bio.raw': bio,
        image
      });

      if (user.can('all-people')) {
        person.tags = tags;
      }

      const saved = await person.save();

      await User.findOneAndUpdate({ _id }, { identity: saved._id });

      res.json({ person: saved });
    
    } else {

        found.isPrivate = isPrivate;
        found.full_name = full_name;
        found.profile_image = profile_image;
        found.profile_url = profile_url ? profile_url : full_name || alias;
        found.alias = alias;
        found.email = email;
        found.gravatar_hash = email && email.length ? md5(email.trim().toLowerCase()) : undefined,
        found.social_media = social_media;
        found.bio = { raw: bio };
        found.image = image;

        if (user.can('all-people')) found.tags = tags;
    
        const saved = await found.save();

        res.json({ person: saved });

    }

  } catch (error) {
    next(error);
  }
});


router.post('/', secured({secret: config.server.jwtSecret}), hasPerms('all-people'), async (req, res, next) => {
  try {
    const { person } = req.body;

    if (!person) throw API_Error('ADD_PERSON_ERROR', 'New person data invalid.');

    const { isPrivate, full_name, alias, email, social_media, bio, tags, image, profile_image, profile_url } = person;

    const newPerson = new Person({
      isPrivate,
      full_name,
      alias,
      email,
      gravatar_hash: email && email.length ? md5(email.trim().toLowerCase()) : undefined,
      social_media,
      profile_image,
      profile_url: profile_url ? profile_url : full_name || alias,
      'bio.raw': bio,
      tags,
      image
    });

    const savedPerson = await newPerson.save();

    res.json({ person: savedPerson });
    
  } catch (err) {
    next(err);
  }
});

router.put('/meta/:_id', secured({ secret: config.server.jwtSecret }), hasPerms('all-people'), async (req, res, next) => {
  const { _id } = req.params;
  const { person } = req.body;

  try {
    const foundPerson = await Person.findById(_id);

    if (foundPerson) {
      foundPerson.featured = person.featured;
      foundPerson.role = person.role;

      await foundPerson.save();

      res.sendStatus(200);
    } else {
      throw API_Error('UPDATE_PERSON_META_ERROR', 'Person not found.', 404);
    }
  } catch (error) {
    next(error);
  }

});

router.put('/:_id', secured({secret: config.server.jwtSecret}), hasPerms('all-people'), async (req, res, next) => {
  const { user } = req;

  try {
    const { _id } = req.params;
    const { person } = req.body;

    if (!_id || !person) throw API_Error('UPDATE_PERSON_ERROR', 'The request to update a person was invalid.');

    const { isPrivate, full_name, alias, email, social_media, bio, tags, image, profile_image, profile_url } = person;

    const found = await Person.findOne({ _id });

    if (found) {
      found.isPrivate = isPrivate;
      found.full_name = full_name;
      found.profile_image = profile_image;
      found.profile_url = profile_url ? profile_url : full_name || alias;
      found.alias = alias;
      found.email = email;
      found.gravatar_hash = email && email.length ? md5(email.trim().toLowerCase()) : undefined,
      found.social_media = social_media;
      found.bio = { raw: bio };
      found.image = image;

      if (user.can('all-people')) found.tags = tags;
  
      const saved = await found.save();

      res.json({ person: saved });
    } else {
      throw API_Error('UPDATE_PERSON_ERROR', 'Specified person was not found.');
    }
  } catch (err) {
    next(err);
  }
});

router.delete('/:_id', secured({ secret: config.server.jwtSecret }), hasPerms('all-people'), async (req, res, next) => {
  const { _id } = req.params;
  try {
    const result = await Person.deleteOne({ _id });
    res.json({ result });
  } catch (err) {
    next(err);
  }
});



module.exports = router;
