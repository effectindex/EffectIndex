const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const multer = require('multer');
const mime = require('mime');

const API_Error = require('../ApiError');
const hasRoles = require('../HasRoles');

const Profile = require('./Profile');

router.get('/', async (req, res, next) => {
    try {
        let profiles = await Profile.find()
            .sort({ username: 'asc' })
            .exec();
    
        res.status(200).send({ profiles }); 
    } catch (error) {
        next(error);
    }
});

const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        let username;
        if ('username' in req.body) username = req.body.username;
        let fileExtension = mime.extension(file.mimetype);
        let filename = (username ? username : 'unknown') + '.' + fileExtension;
        cb(null, filename.toLowerCase());
    },
    destination: function (req, file, cb) {
        if (file.fieldname === 'fullImageData') cb(null, 'static/img/profiles/');
        if (file.fieldname === 'croppedImageData') cb(null, 'static/img/profiles/cropped/');
    }
});

const upload = multer({ storage });

router.post('/upload', protected({ secret: config.server.jwtSecret }), hasRoles(['admin']), upload.any(), async(req, res, next) => {
    try {
        let profile = { profileImageFull: undefined, profileImageCropped: undefined };
        if (req.files && req.files.length) {
            req.files.forEach((file) => {
                if (file.fieldname === 'fullImageData') profile.profileImageFull = file.filename;
                if (file.fieldname === 'croppedImageData') profile.profileImageCropped = file.filename;
            });
            
            let updatedRecord = await Profile.findOneAndUpdate({ username: req.body.username }, profile);
            if (updatedRecord) res.sendStatus(200);
            else throw API_Error('UPLOAD_IMAGE_ERROR', 'Failed to update user profile.');
        }
    } catch (error) {
        next(error);
    }
});

router.post('/', protected({ secret: config.server.jwtSecret }), hasRoles(['admin']), async(req, res, next) => {
    try {
        if (!('profile' in req.body)) throw API_Error('PROFILE_ADD_ERROR', 'The submitted request is invalid.');
        if (typeof(req.body.profile) === 'string') req.body.profile = JSON.parse(req.body.profile);
        let profile = new Profile(req.body.profile);
        let returnedProfile = await profile.save();
        if (returnedProfile) res.send({ profile: returnedProfile });
        else throw API_Error('PROFILE_ADD_ERROR', 'Failed to save profile.');
    } catch (error) {
        if (error.code === 11000) next(API_Error('PROFILE_ADD_ERROR', 'Profile for user already exists.'));
        if (error.name === 'ValidationError') next(API_Error("PROFILE_ADD_ERROR", 'Vaidation error.'));
        next(error);
    }
});

router.put('/:id', protected({ secret: config.server.jwtSecret }), upload.any(), async(req, res, next) => {
    let id = req.params.id;
    try {
        if (!('profile' in req.body)) throw API_Error('PROFILE_UPDATE_ERROR', 'The submitted request is invalid.');
        if (typeof(req.body.profile) === 'string') req.body.profile = JSON.parse(req.body.profile);
        let updatedRecord = await Profile.findByIdAndUpdate(id, profile).exec();
        if (updatedRecord) res.sendStatus(200);
        else throw API_Error('PROFILE_UPDATE_ERROR', 'Failed to save updated profile.');
    } catch (error) {
        if (error.code === 11000) next(API_Error('PROFILE_UPDATE_ERROR', 'Profile for user already exists.'));
        if (error.name === 'ValidationError') next(API_Error("PROFILE_UPDATE_ERROR", 'Vaidation error.'));
        next(error);
    }
});

router.delete('/:id', protected({ secret: config.server.jwtSecret }), hasRoles(['admin']), async(req, res, next) => {
    let id = req.params.id;
    try {
        if (!id) throw API_Error('DELETE_PROFILE_ERROR', 'An ID must be supplied.');
        let deletedProfile = await Profile.findByIdAndRemove(id).exec();
        res.sendStatus(200);
    } catch (error) {
        next(error);
    }
});

router.get('/:id', protected({ secret: config.server.jwtSecret}), hasRoles(['admin']), async(req, res, next) => {
    let id = req.params.id;
    try {
        if (!id) throw API_Error('GET_PROFILE_ERROR', 'An ID is required.');

        let profile = await Profile.findById(id).exec();
        res.status(200).send({profile});
    } catch (error) {
        next(error);
    }

});

router.get('/user/:username', async(req, res, next) => {
    let username = req.params.username;

    try {
        let profile = await Profile.findOne({ username }).exec();
        if (!profile) throw API_Error('PROFILE_FIND_ERROR', 'The profile for the specified user cannot be found.');

        res.status(200).send({ profile });
    } catch (error) {
        next(error);
    }

});

module.exports = router;