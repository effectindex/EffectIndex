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
            }
        }      
    } 
});

router.get('/user', protected({secret: config.server.jwtSecret}), (req, res) => {
    res.send({
        user: req.user
    });
});


module.exports = router;