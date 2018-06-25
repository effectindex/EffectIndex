const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const User = require('./User');

router.post('/add', protected({secret: config.server.jwtSecret}), async (req, res, next) => {

    const user = req.body.user;

    try {
        if (user) {
            const newUser = new User(user);
            let returnedUser = await newUser.save();
            res.send({user: returnedUser});
        } else {
            throw API_Error("VALIDATION_ERROR", "New user data invalid.")
        }
    } catch (err) {
        if (err.code === 11000) next(API_Error("DUPLICATE_USER_ERROR", "Username already in use."));
        else if (err.name === 'ValidationError') next(API_Error("VALIDDDDATION_ERROR", "New user data invalid."));
        else next(err);
    }
});

router.get('/', protected({secret: config.server.jwtSecret}), async (req, res) => {

    try {
        let userList = await User.find()
        .select('_id username role')
        .exec();
        res.send(userList);
    } catch (err) {
        next(err);
    }

});

router.post('/:id', protected({secret: config.server.jwtSecret}), async(req, res) => {

    const id = req.params.id;
    const userData = req.body.user;

    try {
        if (!userData) throw API_Error("VALIDATION_ERROR", "New user data invalid.");
        let updatedUser = await User.findByIdAndUpdate(id, userData);
        res.send(updatedUser);
    } catch (err) {
        next(err);
    }

});

router.delete('/:id', protected({secret: config.server.jwtSecret}), async (req, res) => {
    
    const id = req.params.id;

    try {
        let deletedUser = await User.findByIdAndRemove(id);
        res.send({user: deletedUser});
    } catch (err) {
        next(err);
    }
});

module.exports = router;