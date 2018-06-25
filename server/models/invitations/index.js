const express = require('express');
const router = express.Router();
const config = require ('../../../nuxt.config.js');
const protected = require('express-jwt');

const API_Error = require('../ApiError');

const Invitation = require('./Invitation');

router.post('/generate', protected({secret: config.server.jwtSecret}), async (req, res) => {
    let { expiration } = req.body;

    try {

        let invitation = await Invitation.save({ expiration })
            .catch(error, () => { throw API_Error("SAVE_ERROR", "The invitation failed to save."); });

        res.send(invitation);
    
    } catch (err) {
        next(err);
    }
});

module.exports = router;