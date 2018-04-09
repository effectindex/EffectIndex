const express = require('express');
const router = express.Router();
const config = require ('../../nuxt.config.js');
const jwt = require('jsonwebtoken');
const protected = require('express-jwt');

router.post('/login', (req, res) => {
    let users = config.server.users;

    var requestUsername;
    var requestPassword;

    if (req.body && (req.body.username && req.body.password)) {
        requestUsername = req.body.username;
        requestPassword = req.body.password;

        let foundUser = users.find((user) => user.username === requestUsername);

        if (foundUser) {
            if (foundUser.password === requestPassword) {
                let token = jwt.sign({
                    username: requestUsername
                }, config.server.jwtSecret);
    
                res.send({
                    token
                });
            } else res.sendStatus(403);
        } else res.sendStatus(403);
    } else res.sendStatus(403);
    
});

router.get('/user', protected({secret: config.server.jwtSecret}), (req, res) => {
    if (req.user) {
        res.send({
            user: req.user
        });
    } else res.sendStatus(403);
});


module.exports = router;