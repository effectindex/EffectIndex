const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const jwt = require('jsonwebtoken');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

router.post('/login', (req, res) => {
    let users = config.server.users;

    var requestUsername;
    var requestPassword;
    try {
        if (req.body && (req.body.username && req.body.password)) {
            requestUsername = req.body.username;
            requestPassword = req.body.password;

            let foundUser = users.find((user) => user.username === requestUsername);

            if (foundUser) {
                if (foundUser.password === requestPassword) {
                    let token = jwt.sign({
                        username: requestUsername
                    }, config.server.jwtSecret);
        
                    res.send({ token });

                } else throw (API_Error('PASSWORD_INCORRECT', 'Password is incorrect.'));
            } else throw (API_Error('INVALID_USERNAME', 'The username was not found.'));
        } else throw (API_Error('INVALID_REQUEST', 'Invalid API request.'))
    } catch (error) {
        res.status(401).send({error});
    }
});

router.get('/user', protected({secret: config.server.jwtSecret}), (req, res) => {
    try {
        if (req.user) {
            res.send({
                user: req.user
            });
        } else throw (API_Error('NOT_AUTHORIZED', 'User is not logged in.'));
    } catch (error) {
        res.status(403).send({error});
    }
});


module.exports = router;