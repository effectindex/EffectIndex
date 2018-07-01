const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const User = require('./User');
const Invitation = require('../invitations/Invitation');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.post('/add', protected({secret: config.server.jwtSecret}), async (req, res, next) => {

    const user = req.body.user;

    try {
        if (!user) throw API_Error('ADD_USER_ERROR', 'New user data invalid.')
        
        const newUser = new User(user);
        let returnedUser = await newUser.save();
        res.send({user: returnedUser});

    } catch (err) {
        if (err.code === 11000) next(API_Error('ADD_USER_ERROR', 'Username already in use.'));
        else if (err.name === 'ValidationError') next(API_Error('ADD_USER_ERROR', 'New user data invalid.'));
        else next(err);
    }
});

router.post('/register', async (req, res, next) => {
    let user = req.body.user;
    
    try {
        if (!('inviteCode' in user)) throw API_Error('REGISTRATION_ERROR', 'The invitation code was invalid.');
        if (!user.inviteCode) throw API_Error('REGISTRATION_ERROR', 'An invitation code is required.');
        let invitation = await Invitation.findById(user.inviteCode).exec();
        if (!invitation) throw API_Error('REGISTRATION_ERROR', 'Invitation not found.');
        if ((invitation.used === true) || (invitation.expires < Date.now())) throw API_Error('REGISTRATION_ERROR', 'Invitation is invalid or expired.');
        if (!('username' in user) || !('password' in user)) throw API_Error('REGISTRATION_ERROR', 'Invalid registration details.');

        let username = String(user.username);
        let password = String(user.password);

        if (username.length < 4 || username.length > 15) throw API_Error('REGISTRATION_ERROR', 'Username must be between 4 and 15 characters.')
        if (password.length < 6) throw API_Error('REGISTRATION_ERROR', 'The password must be 6 or more characters.')

        let hash = await bcrypt.hash(password, 10);

        let newUser = new User({
            username,
            hash,
            role: 'user'
        });

        let returnedUser = await newUser.save();
   
        if (returnedUser) await invitation.update({ used: true }).exec();

        res.send({ user: { username: returnedUser.username, _id: returnedUser._id } });

    } catch (err) {
        if (err.code === 11000) next(API_Error('REGISTRATION_ERROR', 'Username already in use.'));
        else next(err);
    }
    res.status(500).send();
});

router.get('/user', protected({secret: config.server.jwtSecret}), (req, res, next) => {
    try {
        let user = req.user;
        if (!user) throw API_Error('LOGIN_ERROR', 'User is not logged in.');
        res.send({ user });
    } catch (error) { next(error); }
});

router.post('/login', async (req, res, next) => {
    try {
        if (!('user' in req.body)) throw API_Error('LOGIN_ERROR', 'The login request was invalid.');
        let user = req.body.user;
        if (!('username' in user) || !('password' in user)) throw API_Error('LOGIN_ERROR', 'The login request was invalid.');
        let foundUser = await User.findOne({username: user.username}).exec();
        if (!foundUser) throw API_Error('LOGIN_ERROR', 'Username not found.');
        let validPassword = await bcrypt.compare(String(user.password), foundUser.hash);
        if (!validPassword) throw API_Error('LOGIN_ERROR', 'Incorrect password.');
        let token = jwt.sign({ username: foundUser.username }, config.server.jwtSecret);
        res.send({ token });
    } catch (error) {
        next(error);
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
        if (!userData) throw API_Error('UPDATE_USER_ERROR', 'New user data invalid.');
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