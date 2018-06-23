const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const User = require('./User');

router.post('/add', protected({secret: config.server.jwtSecret}), async (req, res) => {

    const user = req.body.user;

    try {
        if (user) {
            const newUser = new User(user);
            let returnedUser = await newUser.save();
            res.send({user: returnedUser});
        } else {
            throw API_Error("Invalid user data.")
        }
    } catch (err) {
        if (err.code === 11000) res.status(500).send(API_Error("Username already in use."));
        if (err.name === 'ValidationError') res.status(500).send(API_Error("Validation Error."));
        else res.status(500).send(err);
    }
});

router.get('/', protected({secret: config.server.jwtSecret}), async (req, res) => {

    try {
        let userList = await User.find()
        .select('_id username role')
        .exec();
        res.send(userList);
    } catch (err) {
        res.status(500).send(err);
    }

});

router.post('/:id', protected({secret: config.server.jwtSecret}), async(req, res) => {

    const id = req.params.id;
    const userData = req.body.user;

    try {
        if (!userData) throw API_Error("Invalid user data.");
        let updatedUser = await User.findByIdAndUpdate(id, userData);
        res.send(updatedUser);
    } catch (err) {
        res.status(500).send(err);
    }

});

router.delete('/:id', protected({secret: config.server.jwtSecret}), async (req, res) => {
    
    const id = req.params.id;

    try {
        let deletedUser = await User.findByIdAndRemove(id);
        res.send({user: deletedUser});
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports = router;